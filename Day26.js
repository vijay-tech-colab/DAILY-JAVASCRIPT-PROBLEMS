// Question: Unique Characters in a String
// Write a JavaScript function hasUniqueChars(str) that takes a string as an argument and returns true if all characters in the string are unique, and false if there are any duplicate characters.


// 1st case: using for loop
// const hasUniqueChars = function (str) {
//     const lowercase = str.toLowerCase();    
//     for (let i = 0; i < lowercase.length; i++) {
//         if(lowercase.charAt(i) === lowercase.charAt(i + 1)) {
//             return false;
//         }
//     }
//     return true
// };

// Test Cases:
// console.log(hasUniqueChars('123455')); // false because it's not unique 5 characters repeated
// console.log(hasUniqueChars("hello")); // false, because "l" appears twice
// console.log(hasUniqueChars("world")); // true, all characters are unique
// console.log(hasUniqueChars("JavaScript")); // false, because "a" appears twice

// 2nd case: using Set 

function hasUniqueChars(str) {
    const charSet = new Set();

    for (let char of str) {
        if (charSet.has(char)) {
            return false; // Duplicate found
        }
        charSet.add(char);
    }

    return true; // All characters are unique
}

// Test cases
console.log(hasUniqueChars("hello"));    // false, "l" appears twice
console.log(hasUniqueChars("world"));    // true, all characters are unique
console.log(hasUniqueChars("JavaScript"));// false, "a" appears twice
console.log(hasUniqueChars("abcdef"));   // true, all characters are unique
