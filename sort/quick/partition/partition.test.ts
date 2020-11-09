import { partition } from './partition';

it('Array após particionamento deve ser [5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]', () => {
    let array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
    
    let q = partition(array, 0, array.length - 1);
    
    expect(q).toBe(4);
    expect(array).toStrictEqual([5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]);
});

it('Array após particionamento deve ser [-7, 1, 5, 3, 0, 5, 27, 10, 33, 14, 53]', () => {
    let array = [10, -7, 53, 1, 33, 5, 27, 3, 0, 14, 5];
    
    let q = partition(array, 0, array.length - 1);
    
    expect(q).toBe(5);
    expect(array).toStrictEqual([-7, 1, 5, 3, 0, 5, 27, 10, 33, 14, 53]);
});