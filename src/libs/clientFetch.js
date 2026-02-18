export async function clientFetch(url, options = {}) {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
    const fullUrl = `${baseUrl}${url}`;

    let response = await fetch(fullUrl, {
       ...options,
        headers: {
            ...options.headers,
        },
        credentials: 'include',
    });
     if (response.status === 403) {
        // 🔥 Refresh token
        const refreshRes = await fetch(`${baseUrl}/api/auth/refresh`, {
            credentials: 'include', // include cookies in requests
            cache: 'no-store',
            method: 'POST'
        })

        if (!refreshRes.ok) {
            return refreshRes.json()
        }

        response = await fetch(fullUrl, {
            ...options,
            headers: {
                ...options.headers,
            },
            credentials: 'include',
        })
    }
    
    return response
}