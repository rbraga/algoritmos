function indexOfMinimum(array: number[], startIndex: number) {
    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    
    return minIndex;
}; 

export { indexOfMinimum };