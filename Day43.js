//! 9. Find the Duplicates in an Array

//? Write a function that returns an array of duplicates in the given array.

function findDuplicates(arr) {
    const duplicates = [];
    // create set 
    const seen = new Set();
    for(let num of arr){
        if(seen.has(num)){
            duplicates.push(num);
        }
        else{
            seen.add(num);
        }
    }
    return duplicates
}

console.log(findDuplicates([1, 2, 3, 4, 5, 1, 2])); // [1, 2]