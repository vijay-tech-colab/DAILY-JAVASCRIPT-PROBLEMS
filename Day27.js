//Question: Count Vowels in a String
//Problem: Write a JavaScript function called countVowels(str) that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string. 
//The function should be case-insensitive, meaning it should count both uppercase and lowercase vowels.

// 1st way using core concept
const countVowels = function (str) {
    const lowercaseStr = str.toLowerCase();
    let vowelCount = 0;
    for (let i = 0; i < str.length; i++){
        const vowels = 'aeiou';
        if(vowels.includes(lowercaseStr.at(i))){
            vowelCount += 1;
        }
    }
    return vowelCount;
}

console.log(countVowels("hello"));       // Output: 2 (e, o)
console.log(countVowels("JavaScript"));  // Output: 3 (a, a, i)
console.log(countVowels("AEIOU"));       // Output: 5 (all vowels)
console.log(countVowels("xyz"));         // Output: 0 (no vowels)




