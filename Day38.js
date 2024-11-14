// ! String Manipulation

//* Write a function capitalizeWords that takes a sentence and returns the sentence with each word capitalized.
function capitalizeWords (sentence) {
    return sentence.split(' ').map((value) => value.at(0).toUpperCase() + value.slice(1)).join(' ');
}
const str = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type';
console.log(capitalizeWords(str));


//* Create a function isPalindrome that takes a string and returns true if it’s a palindrome (same forwards and backwards), false otherwise.
function isPalindrome(str) {
    const copyStr = str;
    let reverse = ''
    for(let i = str.length -1; i >= 0; i--){
        reverse += str.at(i);
    }
    return copyStr === reverse ? true : false
}
console.log(isPalindrome('level'));
