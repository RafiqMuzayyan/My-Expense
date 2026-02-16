import { cookies } from 'next/headers';
export async function serverFetch(url, options = {}) {
    const baseUrl = process.env.SERVER_BASE_URL || 'http://localhost:5000';
    const fullUrl = `${baseUrl}${url}`;

    const cookieStore = cookies();
    const cookieHeader = (await cookieStore).toString(); // Get all cookies as a string

    const response = await fetch(fullUrl, {
        ...options,
        headers: {
            Cookie: cookieHeader, 
        },
        credentials: 'include', // include cookies in requests
        cache: 'no-store', // disable caching to always get fresh data
    });
    // if (!response.ok) {
    //     const errorData = await response.json();
    //     const error = new Error(errorData.message || 'Server error');
    //     throw error;
    // }
    return response.json();
}