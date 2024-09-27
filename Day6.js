// write a function findMax that takes array of number as a input and return the maximum number in array

// 1st way core concept
// function findMax (array) {
//     let maxNum = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i] > maxNum){
//             maxNum = array[i];
//         }
//         else{
//             maxNum = maxNum;
//         }
//     }
//     return maxNum
// }
// console.log(findMax([2,4,3,8,6,4,50,199]));

// 2nd way using math object
// function findMax (array) {
//     return Math.max(...array);
// }
// console.log(findMax([2,4,3,8,6,4]));


// 3rd way using reduce method 
function findMax (array) {
    return array.reduce((acc,curr) => curr > acc ? curr : acc ,0);
}
console.log(findMax([2,4,3,8,6,4]));

// we can easily solve multiple way using map filter and more concept