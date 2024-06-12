"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// calcular promedio
var suma, nota, promedio, contador;
contador = 1;
suma = 0;
while (contador <= 10) {
    nota = readlineSync.questionFloat("Ingrese su nota : ");
    suma = suma + nota;
    contador = contador + 1;
}
promedio = suma / 10;
console.log("El promedio del alumno es : " + promedio);
