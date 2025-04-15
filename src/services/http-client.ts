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

    /**
     * Get the time when request was send
     */
    const startTime = performance.now();


    /**
     * Making the api call
     */
    const res = await fetch(url, options);

    /**
     * Conver the response to json
     */
    const resJson = await res.json();

    /**
     * Get the time when request received a response
     */
    const endTime = performance.now();

    /**
     * Calculate the time taken for the request to compelete
     */
    const timeTaken = endTime - startTime;

    /**
     * Get response status code and text
     */
    const resStatusCode = `${res.status} ${res.statusText}`;

    return {
        json: resJson,
        status: resStatusCode,
        time: timeTaken
    };
}

export default HttpClient;