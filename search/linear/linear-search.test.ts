import { linearSearch } from './linear-search'

function getPrimes() {
    return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
        41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
}

it('Valida busca binária de 13', () => {
    var primes = getPrimes();
    
    var indexOfValue = linearSearch(primes, 13);

    expect(indexOfValue).toBe(5);
})

it('Valida busca binária de 13', () => {
    var primes = getPrimes();
    
    var indexOfValue = linearSearch(primes, 31);

    expect(indexOfValue).toBe(10);
})

it('Valida busca binária de 13', () => {
    var primes = getPrimes();
    
    var indexOfValue = linearSearch(primes, 97);

    expect(indexOfValue).toBe(24);
})