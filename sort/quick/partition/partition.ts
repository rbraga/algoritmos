const swap = function (array: number[], firstIndex: number, secondIndex: number) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function (array: number[], p: number, r: number) {
    var q = p;
    for (var j = p; j < r; j++) {
        if (array[j] <= array[r]) {
            swap(array, j, q);
            q++;
        }
    }

    swap(array, r, q);
    return q;
};

export { partition };
