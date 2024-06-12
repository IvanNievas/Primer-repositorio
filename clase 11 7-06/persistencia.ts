import * as fs from 'node:fs' ;
// import * as fs from 'node:fs' ;
// let fs = require ('node:fs') ;

// let contenido : number = 9 ;

// let contenidoString : string = contenido.toString () ;

const nombres: string [] = ["Juan", "Amalia", "Nicolas", "Carla"] ;
let contenido : string = "" ;

for (let i : number = 0 ; i < nombres.length; i++) {
    contenido += `${nombres[i]} `

}


fs.writeFileSync('./test.txt',contenido) ;

// leer información de txt
const datos : string = fs.readFileSync('./test.txt', 'utf8') ;
const datos2 : string = datos.trim(); //Saca los espacios de adelante y atrás del string ;
const nuevoArray : string [] = datos2.split (" ") ;
console.log (nuevoArray) ;
