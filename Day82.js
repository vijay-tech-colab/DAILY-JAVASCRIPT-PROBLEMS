
// 👉 Task 1
// Square each number
// Filter out numbers greater than 50
// Sort the remaining numbers in descending order
const numbers = [4, 25, 64, 100, 9, 49];
const  transformArray = (arr) =>  arr.map((num) => num * 2).filter((num) => num <= 50).sort((a, b) => b - a);
console.log(transformArray(numbers));
