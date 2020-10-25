function firstCharacter(str: string): string {
    return str.slice(0,1);
}

function lastCharacter(str: string): string {
    return str.slice(-1);
}

function middleCharaters(str: string): string {
    return str.slice(1, -1);
}

function isPalindrome(str: string): boolean {
    if (str.length === 0 || str.length === 1) {
        return true;
    }

    if (firstCharacter(str) !== lastCharacter(str)) {
        return false;
    }

    return isPalindrome(middleCharaters(str));
}

export { isPalindrome };