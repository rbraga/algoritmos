import { swap } from './swap/swap';
import { indexOfMinimum } from './index-of-minimum/index-of-minimum';

const selectionSort = function (array: number[]) {
    for (var i = 0; i < array.length; i++) {
        var minIndex = indexOfMinimum(array, i);
        swap(array, i, minIndex);
    }
}

export { selectionSort }