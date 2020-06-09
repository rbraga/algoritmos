var assert = require('assert');

var buscaBinaria = function (array, valor) {
    let esquerda = 0;
    let direita = array.length - 1;
    while (esquerda <= direita) {
        const mid = esquerda + Math.floor((direita - esquerda) / 2);
        if (array[mid] === valor) {
            return mid;
        }
        if (array[mid] < valor) {
            esquerda = mid + 1;
        } else {
            direita = mid - 1;
        }
    }
    return -1;
};

var primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var resultado = buscaBinaria(primos, 73);
console.log("Primo encontrado no indice " + resultado);

assert.equal(buscaBinaria(primos, 73), 20);
assert.equal(buscaBinaria(primos, 41), 12);
assert.equal(buscaBinaria(primos, 17), 6);