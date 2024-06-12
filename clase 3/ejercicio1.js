"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precioProducto = readlineSync.questionInt("100");
var precioDescuento = 0.1;
var descuento = 100 * 0.1;
var precioFinal = precioProducto - precioDescuento;
console.log("precioFinal");
console.log("el precio final es : " + precioProducto * 0.9);
