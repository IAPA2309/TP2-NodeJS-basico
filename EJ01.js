let textoEntrada01 = "Escuela";
let textoEntrada02 = "ORT";
let textoSalida;

textoSalida = concatInvert(textoEntrada01, textoEntrada02);

console.clear();

console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);

console.log(`Texto de Salida: "${textoSalida}"`);


function concatInvert(texto, texto2){
    texto = texto.trim();
    texto2 = texto2.trim();

    texto = invertString(texto);
    texto2 = invertString(texto2);

    jointStr = texto2 + texto;

    return jointStr;
}

function invertString(str){
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    return joinArray;
}