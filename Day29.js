// Question: Reverse Words in a Sentence
// Problem: Write a JavaScript function called reverseWords(sentence) that takes a sentence (string) as input-
//and returns the sentence with each word's characters reversed, but the word order should remain the same.

// using core concept vanilla js
function reverseWords(sentence){
    let reverse = '';
    const arr = sentence.split(' ');
    for(let i = 0; i  < arr.length;  i++){
        const wordSplit = arr[i].split('');
        for(let y = wordSplit.length - 1; y >= 0; y--){
            reverse += `${wordSplit[y]}`
        }
        reverse += ` `
    }
    return reverse
}

using built in reverse method
function reverseWords(sentence) {
    const arr = sentence.split(' ');
    let reverse = ''
    for(let word of arr){
        const arr2 = word.split('').reverse().join('');
        reverse = `${reverse + arr2} `;
    }
    return reverse
}

// Test cases
console.log(reverseWords("Hello world")); // Output: "olleH dlrow"
console.log(reverseWords("JavaScript is fun")); // Output: "tpircSavaJ si nuf"
console.log(reverseWords("Coding is great!")); // Output: "gnidoC si !taerg"