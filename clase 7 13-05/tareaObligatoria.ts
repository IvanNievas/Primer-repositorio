const arreglo: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16] ;
let numeroMasGrande: number = arreglo[0] ;

// Encontrar el número más grande en el arreglo

for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > numeroMasGrande) {
        numeroMasGrande = arreglo[i];
    }
}

console.log("El número más grande del arreglo es:", numeroMasGrande) ;

// Función necesaria para determinar si un número es par o impar

function determinarParImpar(numero: number): void {
    if (numero % 2 == 0) {
        console.log(numero + " es un número par.") ;
    } else {
        console.log(numero + " es un número impar.") ;
    }
}

// Llamar a la función para determinar si el número más grande es par o impar

determinarParImpar(numeroMasGrande);