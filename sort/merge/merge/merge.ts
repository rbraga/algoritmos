const merge = function (array: number[], p: number, q: number, r: number) {
    let lowHalf = [];
    let highHalf = [];

    let k = p;
    let i;
    let j;
    
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;

    while (i < lowHalf.length && j < highHalf.length) {
        if (lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i];
            i++;
        } else {
            array[k] = highHalf[j];
            j++;
        }
        k++;
    }

    while (i < lowHalf.length) {
        array[k] = lowHalf[i];
        i++;
        k++;
    }

    while (j < highHalf.length) {
        array[k] = highHalf[j];
        j++;
        k++;
    }
};

export { merge };