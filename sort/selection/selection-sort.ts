import {swap} from './swap';
import {indexOfMinimum} from './index-of-minimum';

var selectionSort = function(array: number[]) {
    for(var i = 0; i < array.length; i++) {
        var minIndex = indexOfMinimum(array, i);
        swap(array, i, minIndex);
    }
}

export {selectionSort}
// var array = [22, 11, 99, 88, 9, 7, 42];
// selectionSort(array);
// console.log("Array after sorting:  " + array);