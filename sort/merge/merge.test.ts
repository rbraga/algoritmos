import { merge } from './merge';

it('Array após merge deve ser: [2, 3, 6, 7, 9, 11, 12, 14]', () => {
    const array = [3, 7, 12, 14, 2, 6, 9, 11];

    merge(array, 0,
        Math.floor((0 + array.length-1) / 2),
        array.length - 1);

    expect(array).toStrictEqual([2, 3, 6, 7, 9, 11, 12, 14]);
});