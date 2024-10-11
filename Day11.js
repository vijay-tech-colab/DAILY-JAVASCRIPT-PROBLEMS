// ! 1. Write a JavaScript function that reverses a number.

const reverseNum = function  (number) {
    let copyNum = number
    let reverse = 0;
    while(copyNum > 0){
        reverse = reverse * 10 + copyNum % 10;
        copyNum = Math.floor(copyNum/10);
    }
    return reverse;
}
console.log(reverseNum(123456789));