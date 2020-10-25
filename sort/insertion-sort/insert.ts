function insert(array: number[], rightIndex: number, value: number) {
    for(var i = rightIndex;
        i >= 0 && array[i] > value;
        i--) {
            array[i+1] = array[i];
        }
    array[i+1]=value;
}

export { insert };