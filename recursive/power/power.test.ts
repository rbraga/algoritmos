import { power } from './power';

it('Deve calcular a potência de 3 elevado a 0.', () => {
    var result = power(3,0);

    expect(result).toBe(1);
});

it('Deve calcular a potência de 3 elevado a 1.', () => {
    var result = power(3,1);

    expect(result).toBe(3);
})

it('Deve calcular a potência de 3 elevado a 2.', () => {
    var result = power(3,2);

    expect(result).toBe(9);
})

it('Deve calcular a potência de 3 elevado a -1.', () => {
    var result = power(3,-1);

    expect(result).toBe(1/3);
})

it('Deve calcular a potência de 5 elevado a 2.', () => {
    var result = power(5,2);

    expect(result).toBe(25);
})

it('Deve calcular a potência de 10 elevado a -2.', () => {
    var result = power(10,-2);

    expect(result).toBe(0.01);
})
