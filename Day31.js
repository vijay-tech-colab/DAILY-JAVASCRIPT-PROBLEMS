// Question: Find the Most Frequent Element in an Array
// Description:
// Write a JavaScript function findMostFrequent that takes an array as an argument and returns the element that appears most frequently in the array. If there is a tie (multiple elements with the same frequency), 
// return any one of the most frequent elements.
// The function should work with an array of any type (numbers, strings, etc.).
// If the array is empty, return null.

const findMostFrequent = (arr) => {
    if (!arr.length || !arr) {
        return null
    } // Handle the empty array case

    const frequencyMap = {}; // Object to store frequency of each element

    // Populate frequency map
    for (let item of arr) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    }

    // Find the element with the highest frequency
    let mostFrequent = arr[0];
    let maxCount = 0;

    for (let item in frequencyMap) {
        if (frequencyMap[item] > maxCount) {
            mostFrequent = item;
            maxCount = frequencyMap[item];
        }
    }
    return mostFrequent;
}


console.log(findMostFrequent([1, 3, 2, 3, 4, 3, 2, 2]));
// Output: 3
console.log(findMostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]));
// Output: "apple"
console.log(findMostFrequent([]));
// Output: null