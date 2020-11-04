import { merge } from "./merge";

const mergeSort = function (array: number[], p: number, r: number) {
    if (r - p >= 1) {
        var q = p + Math.floor((r - p) / 2);
        mergeSort(array, p, q);
        mergeSort(array, q + 1, r);
        merge(array, p, q, r);
    }
};

export { mergeSort };
