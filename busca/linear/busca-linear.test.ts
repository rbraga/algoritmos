import { buscaLinear } from './busca-linear'

var primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

it('Valida busca binária de 13', () => {
    expect(buscaLinear(primos, 13)).toBe(5);
})

it('Valida busca binária de 13', () => {
    expect(buscaLinear(primos, 31)).toBe(10);
})

it('Valida busca binária de 13', () => {
    expect(buscaLinear(primos, 97)).toBe(24);
})