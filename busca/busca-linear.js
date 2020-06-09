var assert = require('assert');

function buscaLinear(array, valor) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) return i;
    }
    return -1;
}

var primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

console.log(buscaLinear(primos, 13));

assert.equal(buscaLinear(primos, 13), 5);
assert.equal(buscaLinear(primos, 31), 10);
assert.equal(buscaLinear(primos, 97), 24);