interface HttpClientProps {
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    headers?: {},
    body?: null | string,
}

const HttpClient = async ({ url, method = 'GET', headers = {}, body = null }: HttpClientProps) => {
    const options: RequestInit = {
        method,
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            ...headers,
        },
        ...(body ? { body: typeof body === 'string' ? body : JSON.stringify(body) } : {})
    };

    const res = await fetch(url, options);
    return res.json();
}

export default HttpClient;