import { multiplicar, PI } from "./src/modules/matematica.js";
import { Alumno } from "./src/modules/alumno.js";

console.log(multiplicar(3, 6));
console.log(PI);

let alumno1 = new Alumno("iapa", 2323);
let alumno2 = new Alumno("vader", 1321123);
console.log(alumno1.mostrar());
console.log(alumno2.mostrar());