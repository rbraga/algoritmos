const isEven = (n: number) => n % 2 === 0;
const isOdd = (n: number) => !isEven(n);

const power = function(x: number, n: number): number {
    if (n === 0) return 1^n;

    if (n < 0) return 1 / power(x, Math.abs(n));

    if (isOdd(n)) return power(x, n-1) * x;

    if (isEven(n)) {
        const calculatedPower = power(x, n/2);
        return calculatedPower * calculatedPower;
    }

    return x * power(x, n-1);
}

export { power };