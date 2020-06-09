import { indexOfMinimum } from './index-of-minimum'

var array = [18, 6, 66, 44, 9, 22, 14];   
var index = indexOfMinimum(array, 2);

it('Deve encontrar o indice do menor valor a partir do incice 2', () => {
    expect(index).toBe(4);
})