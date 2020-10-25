import { linearSearch } from './linear-search'

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

it('Valida busca binária de 13', () => {
    expect(linearSearch(primes, 13)).toBe(5);
})

it('Valida busca binária de 13', () => {
    expect(linearSearch(primes, 31)).toBe(10);
})

it('Valida busca binária de 13', () => {
    expect(linearSearch(primes, 97)).toBe(24);
})