
//! Problem: Find the First Non-Repeating Character
//! Write a function firstNonRepeatingChar(str) that takes a string as input and returns the first
//!  non-repeating character. If all characters are repeated, return null.

const firstNonRepeatingChar = (str) => {
    const charCount = {};
    for(let char of str){
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char in charCount){
        if(charCount[char] === 1){
            return char
        }
    }
    return null
}
console.log(firstNonRepeatingChar("aabbcdd")); // Output: 'c'
console.log(firstNonRepeatingChar("abcabc"));  // Output: null
console.log(firstNonRepeatingChar("javascript")); // Output: 'j'