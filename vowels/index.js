// Directions
// Write a function that returns the number of vowels
// used in a String. Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'

// vowels('Hi There!') -> 3
// vowels('Why do use ask?') -> 4
// vowels('Why?') -> 0

function vowels(str) {
  const matches= str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
  
//   for(let char of str.toLowerCase()) {
//       if (checker.includes(char)) {
//           count++;
//       }
//       return count;
//   }