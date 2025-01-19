// Write a JavaScript function removeDuplicates(arr) that takes an array of numbers as input and returns a new array with all the duplicates removed, preserving the original order of elements.

//Example Input:
const removeDuplicates = (arr) => {
    return [...new Set(arr)];
}


console.log(removeDuplicates([1, 2, 3, 2, 4, 3, 5, 6, 1]));

//Expected Output:
[1, 2, 3, 4, 5, 6]

// Solution 2: Using a traditional loop
const removeDuplicates = (arr) => {
    const uniqueArray = [];
    for(let i = 0; i < arr.length; i++){
        if(!uniqueArray.includes(arr[i])){
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 3, 5, 6, 1]));