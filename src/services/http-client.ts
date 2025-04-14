import { resBadge } from "../components/general/get-badges";

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
     * Get the time when request was made
     */
    const startTime = performance.now();

    /**
     * Making the api call
     */
    const res = await fetch(url, options);

    /**
     * Get the time when request received a response
     */
    const endTime = performance.now();
    const timeTaken = endTime - startTime;

    /**
     * Update the status and response time for the request made
     */
    resBadge.statusBadge.innerText = `Status: ${res.status} ${res.statusText}`;
    resBadge.timeBadge.innerText = `Time: ${timeTaken.toFixed(0)}ms`;

    return res.json();
}

export default HttpClient;