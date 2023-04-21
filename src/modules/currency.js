import { getCountry } from 'currency-map-country';

export function obtenerMoneda(codigoPais){
    let objeto = {}
    objeto = getCountry(codigoPais)
    if(objeto != null) return objeto.cur
    return null;
}