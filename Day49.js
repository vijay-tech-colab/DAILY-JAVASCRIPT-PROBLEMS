
//! Write a function that takes two arrays and returns an array of their intersection (common elements).
//! Input: [1, 2, 3, 4], [3, 4, 5, 6]  
//! Output: [3, 4]

function intersection(arr1,arr2){
    const commonElm = [];
    const copyArr2 = arr2;
    for(let elm of arr1){
        if(copyArr2.includes(elm)){
            commonElm.push(elm);
        }
    }
    return commonElm;
}

console.log(intersection([1, 2, 3, 4,9], [3, 4, 5, 6,9])); // Output: [3, 4, 9]


// 2nd way solve

function intersection(arr1, arr2) {
    const set2 = new Set(arr2); // Convert arr2 into a Set
    return arr1.filter(elm => set2.has(elm)); // Filter arr1 based on elements in set2
}

console.log(intersection([1, 2, 3, 4, 9], [3, 4, 5, 6, 9])); // Output: [3, 4, 9]

