const firstCharacter = (str: string) => str.slice(0,1);
const lastCharacter = (str: string) => str.slice(-1);
const middleCharaters = (str: string) => str.slice(1, -1);

const isPalindrome = function(str: string): boolean {
    if (str.length === 0 || str.length === 1) {
        return true;
    }

    if (firstCharacter(str) !== lastCharacter(str)) {
        return false;
    }

    return isPalindrome(middleCharaters(str));
}

export { isPalindrome };