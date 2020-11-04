import { insert } from './insert/insert';

const insertionSort = function (array: number[]) {
    for (var i = 0; i < array.length - 1; i++) {
        insert(array, i, array[i + 1]);
    }
}

export { insertionSort };