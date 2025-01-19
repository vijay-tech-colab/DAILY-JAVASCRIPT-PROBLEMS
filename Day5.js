// //! write a function to determine whether a given string is a palindrome ?

// //first way using core concept
// const isPalindrome = (str) => {
//     let reveseStr = '';
//     for(let i = str.length-1; i >= 0; i--){
//         reveseStr = reveseStr + str[i];
//     }
//     return reveseStr === str ? true : false
// }

// console.log(isPalindrome("vijay")); // false
// console.log(isPalindrome("mom"));   // true


// //2nd way to using method 
// const isPalindrome = (str) => {
//     const reveseStr = str.split('').reverse().join('');
//     return reveseStr === str ? true : false
// }
// console.log(isPalindrome("vijay")); // false
// console.log(isPalindrome("mom"));   // true





