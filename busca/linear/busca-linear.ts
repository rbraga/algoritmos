var buscaLinear = function(array: number[], valor: number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) return i;
    }
    return -1;
}

export { buscaLinear }