import { insert } from "./insert";

function insertionSort(array: number[]) {
    for(var i = 0; i < array.length-1; i++) {
        insert(array, i, array[i+1]);
    }
} 

export { insertionSort };