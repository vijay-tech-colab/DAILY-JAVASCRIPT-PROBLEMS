//! 3. Flatten an Array
//!  Write a function that flattens a nested array to a single level.
// Example:
// Input: [1, [2, 3], [4, [5, 6]]]  
// Output: [1, 2, 3, 4, 5, 6] 

function flattenArray(arr) {
    const result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item)); // Recursively flatten nested arrays
        } else {
            result.push(item); // Push non-array elements directly
        }
    }
    return result;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6,[1,2,34,5]]]])); // Output: [1, 2, 3, 4, 5, 6]
