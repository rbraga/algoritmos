var buscaBinaria = function (array: string | any[], valor: number) {
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

export { buscaBinaria }