import { insert } from './insert';

it('Array após inserir 2 deve ser [2, 3, 5, 7, 11, 13, 9, 6]', () => {
    let array: number[] = [3, 5, 7, 11, 13, 2, 9, 6];

    insert(array, 4, 2);

    expect(array).toStrictEqual([2, 3, 5, 7, 11, 13, 9, 6]);
})

it('Array após inserir 9 deve ser [2, 3, 5, 7, 9, 11, 13, 6]', () => {
    let array: number[] = [2, 3, 5, 7, 11, 13, 9, 6];

    insert(array, 5, 9);

    expect(array).toStrictEqual([2, 3, 5, 7, 9, 11, 13, 6]);
});

it('Array após inserir 6 deve ser [2, 3, 5, 6, 7, 9, 11, 13]', () => {
    let array: number[] = [2, 3, 5, 7, 9, 11, 13, 6];

    insert(array, 6, 6);

    expect(array).toStrictEqual([2, 3, 5, 6, 7, 9, 11, 13]);
});