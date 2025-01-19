// ! Check for Palindromes:

// Write a function isPalindrome that takes a string and returns true if it's a palindrome 
// (the same forwards and backwards) and false otherwise.

// 1st way using core javascript concept
function isPalindrome (str) {
    let reverse = ''
    for(let i = str.length - 1; i >= 0; i--){
        reverse = reverse + str[i];
    }
    return reverse === str ? true : false
}
console.log(isPalindrome('radar')); // output : true
console.log(isPalindrome('javascript')); // output : false

// 2nd way using reduce method 
function isPalindrome(str) {
    const reversedStr = str
      .split('')
      .reduce((reversed, char) => char + reversed, '');
  
    return str === reversedStr;
  }
  
  // Test cases
  console.log(isPalindrome("madam")); // true
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false
  

