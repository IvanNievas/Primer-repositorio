"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// esperar colectivo ;
var llegadaColectivo;
llegadaColectivo = readlineSync.question("Llego el colectivo? (S/N)");
while (llegadaColectivo == "N") {
    console.log("Todavia no llego");
    llegadaColectivo = readlineSync.question("Llego el colectivo? (S/N)");
}
console.log("Llego el colectivo");
