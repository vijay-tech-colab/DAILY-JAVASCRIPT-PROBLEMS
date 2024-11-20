// Factorial Write a function to calculate the factorial of a number.

// using core concept ?
// function calculateFactorial (num) {
//     let fact = 1;
//     for(let i = 1; i <= num; i++){
//         fact *= i
//     }
//     return fact
// }
// console.log(calculateFactorial(5)); // Output: 120

function calculateFactorial(num){
    let number = [];
    for(let i = 1; i <= num; i++){
        number.push(i);
    }
    return number.reduce((acc,curr) => acc * curr,1);
}
console.log(calculateFactorial(5));