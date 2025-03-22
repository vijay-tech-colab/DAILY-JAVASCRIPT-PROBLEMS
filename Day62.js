// ! Question:
//? Write a function called isPalindrome that takes a string as input and returns true if the string is a palindrome, and false otherwise.

//? A palindrome is a word, phrase, number, or sequence of characters that reads the same forward and backward (ignoring case and non-alphanumeric characters).

const isPalindromeWith = (str) => {
    let cleanedStr = str.replace(/\s+/g, "").toLowerCase();
    const strReverse = [...cleanedStr].reverse().join('');
    return strReverse === cleanedStr ? true : false
}

const isPalindrome = (str) => {
    let strReverse = ''
    for(let i = str.length - 1; i >= 0; i--){
        strReverse += str[i]
    }
    return str === strReverse ? true : false
}

console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("A man, a plan, a canal, Panama"));  // false
console.log(isPalindrome("12321"));  // true
console.log(isPalindrome("123456")); // false
