// Array.prototype.map() की तरह खुद का map function बनाओ।
function customMap(arr,callback) {
    const newArr = []
    arr.forEach(element => {
        newArr.push(callback(element));
    });
    return newArr
}
// ✍ Example:
// console.log(customMap([1, 2, 3], num => num * 2)); // Output: [2, 4, 6]


function findMissingNumber(arr) {
    const totalElmSum = arr.reduce((acc,curr) => curr + acc ,0);
    let missingNumber = Math.abs((arr.length * (arr.length+ 1)) / 2 - totalElmSum);
    return missingNumber
}

console.log(findMissingNumber([1, 2, 4, 5, 6])) 
