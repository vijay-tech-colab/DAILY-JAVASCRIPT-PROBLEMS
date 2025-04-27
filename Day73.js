//! 🟢 Easy

// Write a function add(a, b) that returns the sum of two numbers.
function add(a,b) {
    return a + b
}
console.log(add(4,6));
// Write a function isEven(num) that returns true if a number is even, false otherwise.
function isEven(num){
    if(num % 2 === 0){
        return true
    }
    return false
}
console.log(isEven(5))

// Write a function greet(name) that returns "Hello, <name>!".
function greet(name){
    return `Hello, ${name}`
}
console.log(greet('vijay'))
// Write a function getFirstElement(arr) that returns the first element of an array.
function getFirstElement(arr){
    return arr[0]
}
console.log(getFirstElement([2,3,4,5,6]))

// Write a function square(num) that returns the square of a number.
function square(num){
    return num * num
}
console.log(square(5));
//! 🟡 Medium

// Write a function reverseString(str) that returns the string reversed.
function reverseString(str){
    return [...str].reduce((acc, curr) => curr + acc,'');
}
console.log(reverseString('hello'));

// Write a function findMax(arr) that returns the largest number in an array.
function findMax(arr){
    return Math.max(...arr);
}
console.log(findMax([2,3,4,5]));
// Write a function factorial(n) that returns the factorial of a number.
function factorial(n){
    if(n === 1 || n <= 0){
        return 1
    }
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact *= i
    }
    return fact
}
console.log(factorial(5));

// Write a function isPalindrome(str) that checks if a string is a palindrome (same forwards and backwards).
function isPalindrome(str){
   return  [...str].reverse().join('') === str ? true : false
}
console.log(isPalindrome('madam'));  

// Write a function countVowels(str) that returns the number of vowels in a string.
function countVowels(str){
    let vowels = 'aeiou';
    let countVowel = 0;
    for(let i = 0; i < vowels.length; i++){
        if(vowels.includes(str[i])){
            countVowel++
        }
    }
    return countVowel;
}
console.log(countVowels('vijay'));
