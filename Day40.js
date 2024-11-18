// Basic Variables and Operations

// Write a JavaScript program to:

// Declare two variables, a and b, and assign them values of 10 and 20.
// Swap the values of a and b without using a third variable.

let a = 10;
let b  = 20;
[a,b] = [b,a];  // swaping a and b
console.log(a); // a = 20
console.log(b); // b = 10

// Conditional Statements

// Write a function checkEvenOrOdd(number) that:
// Takes a number as input.
// Returns "Even" if the number is even and "Odd" otherwise.
function checkEvenOrOdd(number) {
    if(number % 2 === 0){
        return "Even"
    }
    else{
        return "Odd"
    }
}
console.log(checkEvenOrOdd(1)); // Odd number
console.log(checkEvenOrOdd(10)); // Even number

// Loops

// Write a program that prints numbers from 1 to 100:
// If the number is divisible by 3, print "Fizz" instead.
// If the number is divisible by 5, print "Buzz" instead.
// If the number is divisible by both 3 and 5, print "FizzBuzz".

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0){console.log("Fizz")}
    else if(i % 5 === 0){console.log("Buzz")}
    else if(i % 3 === 0 && i % 5 === 0){console.log("FizzBuzz")}
    else{console.log(i)};
}

// Arrays

// Write a program to:
// Create an array of numbers [1, 2, 3, 4, 5].
// Add a number at the end.
// Remove the first number.
// Find the sum of all numbers in the array.

const numbers = [1,2,3,4,5,6,7,8,9,10]; // using literal
// const numbers = new Array(1,2,3,4,5,6,7,8,10); // using array constructer
numbers.push(11); // Add a number at the end.
numbers.shift(); // Remove the first number.
const sumOfNum = numbers.reduce((acc,value) => acc + value,0); // Find the sum of all numbers in the array.
console.log(sumOfNum); // output 65 