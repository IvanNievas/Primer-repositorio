import * as rls from 'readline-sync'

let palabra : string = rls.question ("ingrese la palabra que desea invertir: ") ;
let cantidadLetras : number = palabra.length ;
let arregloLetras : string [] = palabra.split("") ;

