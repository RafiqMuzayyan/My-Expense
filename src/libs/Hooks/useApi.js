"use client"
import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"

export const useApi = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const [status, setStatus] = useState(false)

  const router = useRouter()

  const request = useCallback(async ({
    url,
    method = "GET",
    body = null,
    headers = {},
    option = {},
    redirectTo = null,
  }) => {

    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL
    const fullUrl = `${baseUrl}${url}`

    try {
      setLoading(true)
      setError(null)

      let res = await fetch(fullUrl, {
        ...option,
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: body ? JSON.stringify(body) : null,
      })

      if (res.status === 403) {
        const refreshRes = await fetch(`${baseUrl}/api/auth/refresh`, {
          credentials: "include",
          cache: "no-store",
          method: "POST",
        })

        if (!refreshRes.ok) {
          router.push("/auth")
          return
        }

        res = await fetch(fullUrl, {
          ...option,
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: body ? JSON.stringify(body) : null,
        })
      }

      const resData = await res.json()

      if (!res.ok) {
        throw new Error(resData.message || "Something went wrong")
      }

      setStatus(true)
      setData(resData)

      if (redirectTo) {
        router.push(redirectTo)
      }

      return resData

    } catch (err) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }

  }, [router])  // ⬅️ dependency penting

  return { request, loading, error, data, status }
}