console.log('This is my js file.')

// Question 1: Write a function that reverses a sting w/o using js .reverse () method
function reverseString(originalString) {
    let stringReverse = "";
    for (let i = originalString.length - 1; i >= 0; i--) {
        stringReverse += originalString[i]
    }
    return stringReverse;
}

console.log(reverseString('Jen Allen'));
console.log(reverseString('Prime Digital'));
console.log(reverseString('Drink Water'));

// Q1 Steps:
// 1. created function named reverseString and set it's parameter to 'originalString'
// 2. created a variable w/n the function named stringReverse and set its value empty to store reversed version of the original string.
// 3. used a for loop to loop through each character of the string, starting at the last index, decrementing by 1 as long as i is >= 0,
// and outputting the last character to the first, creating a reverse return.