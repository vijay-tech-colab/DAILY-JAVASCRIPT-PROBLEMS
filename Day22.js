// // write a function that takes number of array and return the even number of array

// // using filter method ?
// const evenNumber = (arr) => {
//     return arr.filter((value) => value % 2 === 0);
// }
// const number = [23,4,5,6,7,8,99,33,44,];
// console.log(evenNumber(number));

// using reduce method ?
// const evenNumber = (arr) => {
//     return arr.reduce((acc,value) => {
//         if(value % 2 === 0) acc.push(value);
//         return acc
//     },[]);
// }
// const number = [23,4,5,6,7,8,99,33,44,];
// console.log(evenNumber(number));


// // using core concept ?
// function evenNumber (arr) {
//     const even = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0) even.push(arr[i]);
//     }
//     return even
// }
// const number = [23,4,5,6,7,8,99,33,44,];
// console.log(evenNumber(number));
