// Directions
// Given a String, return the character that is most 
// commonly used in the string.Directions
// maxChar("abcccccccd") === "c"
// marChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};

    let max = 0;  
    let maxChar = ''


    for(let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar

    // console.log(charMap);
}

module.exports = maxChar;