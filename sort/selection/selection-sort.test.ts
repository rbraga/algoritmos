import { selectionSort } from './selection-sort';

it('Deve ordenar array', () => {
    let array = [22, 11, 99, 88, 9, 7, 42];
    const ordenedArray = [7, 9, 11, 22, 42, 88, 99].toString();

    selectionSort(array);

    expect(array.toString()).toBe(ordenedArray);
})
