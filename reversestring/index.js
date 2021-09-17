// Directions
// Given a string, return a new string with the reversed
// order of characters

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.export = reverse;

// console.log(reverse("iloveu"));

    // const arr = str.split('')
    // // arr.reverse();
    // // return arr.join('');
    // return str.slipt('').reverse().join('');

    // let reversed = '';

    // for (let characters of str) {
    //     reversed = characters + reversed;
    // }

    // return reversed;