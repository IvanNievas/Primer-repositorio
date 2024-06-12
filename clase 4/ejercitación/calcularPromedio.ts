import * as readlineSync from 'readline-sync' ;

// calcular promedio

let suma : number, nota : number, promedio : number, contador : number;

contador = 1 ;
suma = 0 ;
while (contador <= 10) {
    nota = readlineSync.questionFloat ("Ingrese su nota : ") ;
    suma = suma + nota ;
    contador = contador + 1 ;
}

promedio = suma/10 ;

console.log ("El promedio del alumno es : " + promedio) ;
