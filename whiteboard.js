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


// Question 2: Write a function that takes in a number.
//If the number is divisible by 3, return "Fizz".
//If the number is divisible by 5, return "Buzz".
//If the number is divisible by both 3 and 5, return "FizzBuzz". Otherwise, just return the number that was passed into the function.

function fizzBuzz(number) {
    if (number % 15 === 0) { return 'FizzBuzz' }
    else if (number % 3 === 0) { return 'Fizz' }
    else if (number % 5 === 0) { return 'Buzz' }
    else return number; // removed semi colon from if / else if above because it created an error.
}
console.log(fizzBuzz(0));
console.log(fizzBuzz(1));
console.log(fizzBuzz(2));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(7));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));

//Question 3: Write a program that takes in a year (as an integer) and returns true if the year is a leap year.
//Years that are divisible by 4 are leap years, return true
//Years that are divisible by 100 are not leap years, return false
//Years that are divisible by 400 are leap years, return true

function leapYear(year) {
    if (year % 400 === 0) { return true }
    else if (year % 100 === 0) { return false }
    else if (year % 4 === 0) { return true }
    else return false;
}
console.log(leapYear(2024));
console.log(leapYear(2004));
console.log(leapYear(2017));
console.log(leapYear(2200));

// Question 4: Write a function that accepts an array of ingredients, and determines whether they make a BLT sandwich.
//An array is a sandwich if the first and last items are both "bread",
//and the middle contains "bacon", "lettuce" and "tomatoes".


function sandwichBLT(ingredients) {
    let bacon = false;
    let lettuce = false;
    let tomatoes = false;
    if (ingredients.length < 2 || ingredients[0] !== 'bread' || ingredients[ingredients.length - 1] !== 'bread') {
        breadOnBothSides = false
        return "Its not a BLT";
    }

    for (let i = 1; i < ingredients.length - 1; i++) {
        if (ingredients[i] === "bacon") {
            bacon = true;
        } else if (ingredients[i] === "lettuce") {
            lettuce = true;
        } else if (ingredients[i] === "tomatoes") {
            tomatoes = true;
        }
    }
    if (bacon && lettuce && tomatoes) {
        return "Its a BLT!";
    } else {
        return "Its not a BLT";
    }
}

console.log(sandwichBLT(["bread", "bacon", "lettuce", "blue cheese", "tomatoes", "bread"]));
console.log(sandwichBLT(["bacon", "lettuce", "blue cheese", "tomatoes", "bread"]));
console.log(sandwichBLT(["bread", "bacon", "blue cheese", "tomatoes", "bread"]));