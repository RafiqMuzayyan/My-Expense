export async function clientFetch(url, options = {}) {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
    const fullUrl = `${baseUrl}${url}`;

    const response = await fetch(fullUrl, {
        headers: {
            ...options.headers
        },
        ...options,
        credentials: 'include', // include cookies in requests
        cache: 'no-store', // disable caching to always get fresh data
    });
    // if (!response.ok) {
    //     const errorData = await response.json();
    //     const error = new Error(errorData.message || 'Server error');
    //     throw error;
    // }
    // 
    
    return response.json()
}