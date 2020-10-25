import { factorial, recursiveFactorial } from './factorial';

it('O fatorial de 5 deve ser 120', () => {
    var valor = 5;

    var resultado = factorial(valor);

    expect(resultado).toBe(120);
});

it('O fatorial de 5 deve ser 120', () => {
    var valor = 0;

    var resultado = factorial(valor);

    expect(resultado).toBe(1);
});

it('O fatorial de 10 deve ser 3628800', () => {
    var valor = 10;

    var resultado = factorial(valor);

    expect(resultado).toBe(3628800);
});

it('O fatorial de 5 deve ser 120', () => {
    var valor = 0;

    var resultado = recursiveFactorial(valor);

    expect(resultado).toBe(1);
});

it('O fatorial de 10 deve ser 3628800', () => {
    var valor = 10;

    var resultado = recursiveFactorial(valor);

    expect(resultado).toBe(3628800);
});