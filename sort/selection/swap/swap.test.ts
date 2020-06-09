import { swap } from './swap';

let testArray = [7, 9, 4];
swap(testArray, 0, 1);

it('deve fazer swap de array', () => {
    expect(testArray.toString()).toBe([9, 7, 4].toString());
})

