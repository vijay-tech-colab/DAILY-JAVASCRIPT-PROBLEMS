//! Problem: Find the Longest Word in a Sentence
//! Write a function longestWord(sentence) that takes a string as input and returns the longest word in the
//! sentence. If there are multiple words of the same length, return the first one that appears.

// 1st way 
const longestWord1 = (sentence) => {
    return sentence.split(" ").reduce((acc, word) => word.length > acc.length  ? word : acc, "")
}

// 2nd way
const longestWord2  = (sentence) => {
   return sentence.split(" ").sort((a,b) => b.length - a.length)[0];
}

console.log(longestWord1("I love programming")); // Output: "programming"
console.log(longestWord1("JavaScript is awesome")); // Output: "JavaScript"
console.log(longestWord1("The quick brown fox jumps over the lazy dog")); // Output: "brown"
console.log(longestWord1("helloo world"));

console.log(longestWord2("I love programming")); // Output: "programming"
console.log(longestWord2("JavaScript is awesome")); // Output: "JavaScript"
console.log(longestWord2("The quick brown fox jumps over the lazy dog")); // Output: "brown"
console.log(longestWord2("helloo world"));


