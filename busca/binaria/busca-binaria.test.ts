import { buscaBinaria } from './busca-binaria'

var primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var resultado = buscaBinaria(primos, 73);

it('Valida busca binária de 73', () => {
    expect(buscaBinaria(primos, 73)).toBe(20);
})

it('Valida busca binária de 41', () => {
    expect(buscaBinaria(primos, 41)).toBe(12);
})

it('Valida busca binária de 17', () => {
    expect(buscaBinaria(primos, 17)).toBe(6);
})