// Dircteions
// Given an SVGAnimatedInteger, return an integer that is the reverse 
// ordering of numbers 

// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(5) === 5
// reverseInt(-15) === 51
// reverseInt(-90) === -9


function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');

    // if(n < 0) {
    //     return parseInt(reverseed) * -1;
    // }
    return parseInt(reversed) * Math.sign(n);
}

modelue.exports = reverseInt;