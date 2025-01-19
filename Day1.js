// /*
// Write a function that return a findlongestword and take a string as a input.
// If there are multiple are multiple longestword, return first longestword. 
// */

// //? create a function and using sort method 
// const findLongestWord = (str) => {
//     if(!str.trim().length){
//         return false
//     }
//     let words = str.split(' ');
//     words.sort((a,b) => b.length - a.length);
//     return words[0]

// }
// console.log(findLongestWord('welcome to the github! In future I will be data scientist.'));


// //? other way using reduce method 
// const findLongestWord = (str) => {
//     return str.split(' ').reduce((accum,curr) => accum.length > curr.length ? accum : curr,'');
// }
// console.log(findLongestWord('welcome to the github! In future I will be data scientist.'));


// //? other way using core conecpt
// const findLongestWord = (str) => {
//     const arr = str.split(' ');
//     let words = ''
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > words.length) {
//             words = arr[i];
//         } else {
//             words = words
//         }
//     }
//     return words;
// }
// console.log(findLongestWord('welcome to the github! In future I will be data scientist.'));
