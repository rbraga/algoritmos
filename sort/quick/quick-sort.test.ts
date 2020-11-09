import { quickSort } from './quick-sort';

it('Array após sortear deve ser [2, 3, 5, 6, 7, 9, 10, 11, 12, 14]', () => {
    let array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];

    quickSort(array, 0, array.length - 1);

    expect(array).toStrictEqual([2, 3, 5, 6, 7, 9, 10, 11, 12, 14]);
});

it('Array após sortear deve ser [-5, 0, 5, 12, 22, 32, 50, 65, 77, 92]', () => {
    let array = [12, 5, 50, 32, 0, 77, 22, 92, -5, 65];

    quickSort(array, 0, array.length - 1);

    expect(array).toStrictEqual([-5, 0, 5, 12, 22, 32, 50, 65, 77, 92]);
});