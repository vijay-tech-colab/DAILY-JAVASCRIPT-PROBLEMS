// Question: Find the Longest Word in a Sentence
// Problem: Write a JavaScript function called findLongestWord(sentence) that takes a string as input and returns the longest word in the sentence. If there are multiple words of the same length, return the first one that appears.

// using core concept 
function findLongestWord(sentence){
    const arr = sentence.split(' ');
    let longestWord = '';
    for (let word of arr){
        longestWord.length <  word.length ? longestWord = word : longestWord
    }
    return longestWord
}
console.log(findLongestWord("The quick brown fox jumping over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("JavaScript is fun and challenging")); // Output: "challenging"
console.log(findLongestWord("I love coding")); // Output: "coding"



// using reduce method 
function findLongestWord(sentence){
    const arr = sentence.split(' ');
    return arr.reduce((acc,value) => value.length > acc.length ? value : acc);
}
console.log(findLongestWord("The quick brown fox jumping over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("JavaScript is fun and challenging")); // Output: "challenging"
console.log(findLongestWord("I love coding")); // Output: "coding"
