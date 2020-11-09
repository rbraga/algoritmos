import { partition } from './partition/partition';

const quickSort = function(array: number[], p: number, r: number) {
    if (r-p >= 1) {
        var q = partition(array, p, r);
        quickSort(array, p, q-1);
        quickSort(array, q+1, r);
    }
};

export { quickSort };