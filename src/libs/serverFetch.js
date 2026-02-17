import { cookies } from 'next/headers'

export async function serverFetch(url, options = {}) {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL
    const fullUrl = `${baseUrl}${url}`

    const cookieStore = cookies()
    const cookieHeader = (await cookieStore).toString();

    let res = await fetch(fullUrl, {
        ...options,
        headers: {
            ...options.headers,
            Cookie: cookieHeader,
        },
        cache: 'no-store',
    })

    if (res.status === 403) {
        // 🔥 Refresh token
        const refreshRes = await fetch(`${baseUrl}/api/auth/refresh`, {
            method: "POST",
            headers: {
                Cookie: cookieHeader
            }
        })

        if (!refreshRes.ok) {
            return refreshRes.json()
        }

        // 🔥 Ambil set-cookie
        const setCookie = refreshRes.headers.get("set-cookie")

        if (setCookie) {
            // Forward cookie ke browser
            return new Response(
                JSON.stringify({ message: "Token refreshed" }),
                {
                    status: 401,
                    headers: {
                        "set-cookie": setCookie
                    }
                }
            )
        }

        // 🔥 Fetch ulang pakai cookie lama (browser akan update otomatis)
        res = await fetch(fullUrl, {
            ...options,
            headers: {
                ...options.headers,
                Cookie: cookieStore.toString(),
            },
            cache: 'no-store',
        })
    }

    return res.json()
}
