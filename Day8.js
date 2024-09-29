// 1. Write a JavaScript function that reverses a number.

const reverseNum = (num) => {
    let copyNum = num;
    let reverse = 0;
    while (copyNum > 0) {
        reverse = reverse * 10 + (copyNum % 10);
        copyNum = Math.floor(copyNum / 10);
    }
    return reverse;
};
console.log(reverseNum(123456789));

/* 
6. Write a JavaScript function that accepts a string as a parameter 
and finds the longest word within the string.
*/

const longestWord = (str) => {
    const strToArr = str.split(' ');
    const word = strToArr.reduce((preVal,currVal) => preVal.length > currVal.length ? preVal : currVal,'');
    return word;
}

console.log(longestWord('welcome kg coding ?'));