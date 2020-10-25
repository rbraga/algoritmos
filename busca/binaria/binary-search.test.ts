import { binarySearch } from './binary-search'

function getPrimes() {
    return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
        41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
} 

it('Valida busca binária de 73', () => {
    var primes = getPrimes();

    var indexOfValue = binarySearch(primes, 73);

    expect(indexOfValue).toBe(20);
})

it('Valida busca binária de 41', () => {
    var primes = getPrimes();

    var indexOfValue = binarySearch(primes, 41);

    expect(indexOfValue).toBe(12);
})

it('Valida busca binária de 17', () => {
    var primes = getPrimes();

    var indexOfValue = binarySearch(primes, 17);

    expect(indexOfValue).toBe(6);
})