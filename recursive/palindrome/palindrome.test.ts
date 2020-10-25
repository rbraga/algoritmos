import { isPalindrome } from './palindrome';

it('A palavra "a" deve ser um palindromo', () => {
    let keyword = 'a';

    let result = isPalindrome(keyword);

    expect(result).toBe(true);
})

it('A palavra "rotor" deve ser um palindromo', () => {
    let keyword = 'rotor';

    let result = isPalindrome(keyword);

    expect(result).toBe(true);
})

it('A palavra "motor" deve ser um palindromo', () => {
    let keyword = 'motor';

    let result = isPalindrome(keyword);

    expect(result).toBe(false);
})