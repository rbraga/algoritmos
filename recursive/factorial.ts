function factorial(n: number) {
    var result = 1;
    
    for(var i = 1; i <= n; i++) {
        result *= i;
    }
    
    return result;
};

export { factorial };
