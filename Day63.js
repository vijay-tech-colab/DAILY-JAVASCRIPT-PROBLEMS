// !Question: Find the Maximum Number in an Array
// Write a function findMax(arr) that takes an array of numbers as input and returns the maximum number from the array.

// const findMax = (numOfArr) => {
//     if(numOfArr.length === 0){
//         return null
//     }
//     return Math.max(...numOfArr);
// }

const findMax = (numOfArr) => {
    if (numOfArr.length === 0) {
        return null;
    }

    let longestNum = numOfArr[0];
    for(let i = 0; i < numOfArr.length; i++){
        if(numOfArr[i] > longestNum){
            longestNum = numOfArr[i];
        }
    }
    return longestNum
}

// const findMax = (arr) => {
//     if (arr.length === 0) {
//         return null;
//     }
//     return arr.reduce((acc, cur) => {
//         if (acc < cur) {
//             acc = cur;
//         }
//         return acc;
//     }, arr[0]);
// };

console.log(findMax([3, 1, 7, 4, 9, 2]));   // 9
console.log(findMax([-10, -5, -1, -20]));   // -1
console.log(findMax([100]));   // 100
console.log(findMax([]));   // null (handle empty array case)
