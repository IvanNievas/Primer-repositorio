// Definimos el arreglo de números
const num: number[] = [20, 14, 8, 0, 5, 19, 24];

// Función para mostrar los valores del arreglo
function mostrarNumeros(arreglo: number[]): void {
    console.log("Los valores del arreglo son:");
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}

// Mostramos los valores del arreglo al usuario
mostrarNumeros(num);