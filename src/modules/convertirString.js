export function concatInvert(texto, texto2){
    texto = texto.trim();
    texto2 = texto2.trim();

    texto = invertString(texto);
    texto2 = invertString(texto2);

    let jointStr = texto2 + texto;

    return jointStr;
}

function invertString(str){
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    return joinArray;
}