//! Write your own implementation of Array.prototype.map



function customMap(arr, fn) {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i, arr))
    }
    return newArray
}

const x = customMap([1, 2, 3], x => x * 2)// Output: [2, 4, 6]
console.log(x)


// Implement a custom filter function without using Array.prototype.filter
function customFilter(arr, fn) {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i , arr)) {
            newArray.push(arr[i])
        }
    }
    return newArray
}


console.log(customFilter([1, 2, 3, 4], x => x % 2 === 0)); // Output: [2, 4]



// 
function customReduce(arr, fn, init) {
    let value = init;
    for (let i = 0; i < arr.length; i++) {
        value = fn(value, arr[i], i, arr);
    }
    return value;
}

const result = customReduce([1, 2, 3 , 4], (acc, curr) => acc + curr, 0);
console.log(result); // Output: 10



