import { swap } from './swap';

it('deve fazer swap de array', () => {
    let testArray = [7, 9, 4];

    swap(testArray, 0, 1);

    expect(testArray.toString()).toBe([9, 7, 4].toString());
})

