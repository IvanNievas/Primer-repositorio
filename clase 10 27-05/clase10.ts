//ejercicio promedio edades

/* El DT de los infantiles del equipo de fútbol desea saber el promedio de la edad de los chicos. 
La edad de los chicos va de 3 a 7 años. Las edades son cargadas al azar (use la función aleatorio(menorValor, mayorValor)), es decir aleatorio (3,7).
Muestre todas las edades y el promedio de las mismas.
*/

import * as rls from 'readline-sync' ;

let dimensionArreglo : number = rls.questionInt ("Ingrese la cantidad de jugadores: ") ;
let edadesNinios : number [] = new Array (dimensionArreglo) ;

function cargarJugadores(edadesNinios:number [], dimensionArreglo : number) {
    let i : number = 0
    for (let i = 0; i < edadesNinios.length ; i++ ) {
        edadesNinios [i] = Aleatorio(3,7) ;
    }

}

function Aleatorio(menorValor: number, mayorValor: number): number {
   let numeroADevolver : number = 0 ; 
   numeroADevolver = Math.floor ( Math.random () * (mayorValor - menorValor) + menorValor) ;
    return numeroADevolver
}

function mostrarJugadores (edadesNinios : number [], dimensionArreglo : number) {
    let i : number = 0 ;
    let jugadores : string = "" ;
    for (i ; i < edadesNinios.length ; i++) {
        jugadores += edadesNinios [i] + "-" ;
    }
    console.log ("los jugadores son: ", jugadores) ;
}

function obtenerPromedioEdadesJugadores (edadesNinios : number [], dimensionArreglo : number) : number {
let suma : number = 0 ;
let i : number = 0 ;
let promedio : number = 0 ;
for (i; i < dimensionArreglo; i++) {
    suma = suma + edadesNinios [i];
    }
    promedio = suma / dimensionArreglo ;
    return promedio ;
    
    }

   

