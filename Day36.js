// 2. Arrays and Loops
// Write a function findMax that takes an array of numbers and returns the largest number in the array.
function findMax(arr){
    return Math.max(...arr);
}
console.log(findMax([3,5,7,9,0,2]));

// Create a function filterOddNumbers that accepts an array of numbers and returns a new array with only the odd numbers.
function filterOddNumbers(arr){
    return arr.filter((value) => {
        if(value % 2 === 0){
            return false
        }else{
            return true
        }
    })
}
console.log(filterOddNumbers([2,3,4,5,6,7,8,9]));

// Write a function reverseArray that takes an array and returns it in reverse order without using the built-in reverse method.
function reverseArray(arr){
    const reverse = []
    for(let i = arr.length -1; i >= 0; i--){
        reverse.push(arr[i]);
    }
    return reverse
}
console.log(reverseArray([2,3,4,5,6,7,8]));