
// ! Intermediate Level

//*  Write a function to check if a string is a palindrome.

    function palindromeCheck(str){
        let reverseStr = '';
        for(let i = str.length-1; i >= 0 ; i--){
            reverseStr += str[i];
        }
        console.log(reverseStr);
        return str === reverseStr ? true : false
    };
    console.log(palindromeCheck("mam"));

// Create a function that removes duplicates from an array.

    function removesDublicate (arr) {
        return arr.filter((curr,index) => arr.indexOf(curr) === index);
    }

    console.log(removesDublicate([2,4,5,6,7,8,7,7]));

// Write a program that counts the number of vowels in a string.

    function countsVowels (str) {
        const vowels = 'aeiou';
        let counts = 0;
        for(let i = 0; i < str.length; i++){
            if(vowels.includes(str[i])){
                counts++
            }
        }
        return counts
    }
    console.log("Total vowels " ,countsVowels("hello world"));

// Implement a function that flattens a nested array. (e.g., [1, [2, 3], [4, [5]]] → [1, 2, 3, 4, 5]);
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}


console.log(flattenArray([1, [2, 3], [4, [5]]])); // [1, 2, 3, 4, 5]
// Build a function that sorts an array of objects by a given property. (e.g., sort by age)
function sortByProperty(arr, property) {
    return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}

const people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Alice', age: 28 }
];

console.log(sortByProperty(people, 'age')); // [{ name: 'Jane', age: 25 }, { name: 'Alice', age: 28 }, { name: 'John', age: 30 }]