function swap(array: number[], firstIndex: number, secondIndex: number) {
    var firstValue = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = firstValue;
}

export { swap };