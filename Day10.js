// 1. Write a JavaScript program that displays the largest integer among two integers.

const largestValue = (num1,num2) => {
    if(parseInt(num1) > parseInt(num2))
        return `${num1} is greater  than ${num2}`
    else
        return `${num2} is greater  than ${num1}`
}
console.log(largestValue(40,66));