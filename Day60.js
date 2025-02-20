//! Write a function reverseString(str) that takes a string as input and returns the reversed version of the string.

// Method 1: Using built-in methods
function reverseStringBuiltIn(str) {
    return str.split('').reverse().join('');
}

// Method 2: Using a for loop
const reverseStringLoop = (str) => {
    let reverse = '';
    for(let i = str.length - 1; i >= 0; i--){
        reverse += str[i];
    }
    return reverse;
}

// Method 3: Using reduce method
const reverseStringReduce = (str) => {
    return [...str].reduce((acc, curr) => curr + acc, '');
}

// Test cases
console.log("hello -> " ,reverseStringBuiltIn("hello"));   // Output: "olleh"
console.log("JavaScript -> " ,reverseStringLoop("JavaScript")); // Output: "tpircSavaJ"
console.log("world -> ",reverseStringReduce("world"));    // Output: "dlrow"
