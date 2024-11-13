// Print the Largest Number:
// Write a function findLargest(a, b, c) that takes three numbers as arguments and returns the largest number.

function findLargest(a,b,c){
    if(a > b && a > c){
        return `${a} is largest value`
    }
    if( b > c){
        return `${b} is largest value `
    }
    return `${c} is largest value`
}

const result = findLargest(2,50,5);
console.log(result);