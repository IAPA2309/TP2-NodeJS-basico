export function parsearUrl(urlString) {
    try {
        const url = new URL(urlString);
        const queryParams = Object.fromEntries(url.searchParams.entries());
        return {
            host: url.origin,
            pathname: url.pathname,
            parametros: queryParams
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}