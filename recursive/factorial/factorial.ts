const factorial = function(n: number) {
    var result = 1;
    
    for(var i = 1; i <= n; i++) {
        result *= i;
    }
    
    return result;
};

const recursiveFactorial = function(n: number): number {
    if (n === 0) return 1;

    return recursiveFactorial(n-1) * n;
}

export { factorial, recursiveFactorial };
