// Write a function sumOfTwoNumbers that takes two numbers as arguments and returns their sum.

// using core concept
// function sumOfTwoNumbers(a,b){
//     return a + b;
// }
// console.log(sumOfTwoNumbers(2,4));

// using reduce method ?
function sumOfTwoNumbers(nums){
    return nums.reduce((acc,curr) => curr + acc,0);
}
console.log(sumOfTwoNumbers([2,33]));