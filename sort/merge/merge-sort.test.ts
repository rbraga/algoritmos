import { mergeSort } from './merge-sort';

it('Array após ordenação deve ser: [2, 3, 6, 7, 9, 11, 12, 14]', () => {
    const array = [14, 7, 3, 12, 9, 11, 6, 2];

    mergeSort(array, 0, array.length - 1);

    expect(array).toStrictEqual([2, 3, 6, 7, 9, 11, 12, 14]);
});

it('Array após ordenação deve ser: [-7, 0, 1, 2, 9, 12, 23, 80]', () => {
    const array = [1, -7, 23, 12, 9, 80, 0, 2];

    mergeSort(array, 0, array.length - 1);

    expect(array).toStrictEqual([-7, 0, 1, 2, 9, 12, 23, 80]);
});