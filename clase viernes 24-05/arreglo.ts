/* Ordenamiento. Implemente un algoritmo de ordenamiento con el método Bubble sort,
 para que ordene un arreglo de longitud N en orden descendente. */
let arreglo = [68, 38, 29, 16, 26, 15, 94];
console.log(ordenamientoDesc(arreglo, 7));
function ordenamientoDesc(arreglo, cantidad: number) {
    let n = arreglo.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arreglo[j] < arreglo[j + 1]) {
                let aux = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = aux;
            }
        }
    }
}
