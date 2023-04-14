import { concatInvert } from "./src/modules/convertirString.js";
import { PI, sumar, restar, multiplicar, dividir } from "./src/modules/matematica.js";
import { Alumno } from "./src/modules/alumno.js";
import { copiar } from "./src/modules/filerw.js";
import { parsearUrl } from "./src/modules/urlParse.js"

let textoEntrada01 = "Escuela";
let textoEntrada02 = "ORT";
let textoSalida;


textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear();
console.log("----------------------------");
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

console.log("----------------------------");

console.log(`El valor de PI es : ${PI}`);
console.log(`El resultado de la suma entre 3 y 6 es : ${sumar(3, 6)}`);
console.log(`El resultado de la resta entre 3 y 6 es : ${restar(3, 6)}`);
console.log(`El resultado de la multiplicacion entre 3 y 6 es : ${multiplicar(3, 6)}`);
console.log(`El resultado de la division entre 3 y 6 es : ${dividir(3, 6)}`);

console.log("----------------------------");

let alumno1 = new Alumno("iapa", 2323);
let alumno2 = new Alumno("vader", 1321123);

console.log(`El alumno 1 es : ${alumno1.mostrar()}`);
console.log(`El alumno 2 es : ${alumno2.mostrar()}`);

console.log("----------------------------");

copiar('./entrada.txt', './salida.txt');

console.log("----------------------------");

const objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(objeto);

const objeto2 = parsearUrl("ht@tp://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(objeto2);

console.log("----------------------------");