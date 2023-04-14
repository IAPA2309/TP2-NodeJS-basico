export function parsearUrl(urlString) {
    const urlParts = urlString.split('?');
    const urlParams = urlParts[1] ? urlParts[1].split('&') : [];
    
    const queryParams = urlParams.reduce((acc, param) => {
    const [key, value] = param.split('=');
    acc[key] = value;
    return acc;
    }, {});
    
    const hostParts = urlParts[0].split('/');
    const host = hostParts[0] + '//' + hostParts[2];
    const pathname = urlParts[0].substring(host.length);
    
    return {
        host: host,
        pathname: pathname,
        parametros: queryParams
    };
}