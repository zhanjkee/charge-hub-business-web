
export async function fetchFromApi(endpoint: string) {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
    }
    return await response.json();
}
