// Directions
// Given a string, return true if the string is a palindrome
// or false if it is not. 
// Palindromes are strings that form the same word if it is reversed.
// *Do* include spaces and punctuation in determining if the string is a
// palindrome.

// Examples: 
// palindrome("abba") == truee
// palindrome("acvasd") == false

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

module.export = palindrome;

    // const reversed = str.split('').reverse().join('');
    
    // return str === reversed;