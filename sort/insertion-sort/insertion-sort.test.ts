import {insertionSort} from './insertion-sort';

it('Array após ordenação deve ser [7,9,11,22,42,88,99]', () => {
    var array = [ 22, 11, 99, 88, 9, 7, 42];

    insertionSort(array);
    
    expect(array).toStrictEqual([7, 9, 11, 22, 42, 88, 99]);
})