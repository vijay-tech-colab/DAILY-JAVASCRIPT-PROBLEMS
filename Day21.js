// Write a function that generates a random integer between 1 and 10.
function randomNumber () {
    return Math.floor(Math.random() * 11)
}
console.log(randomNumber());
// Using Math.floor() and Math.random(), generate a random integer between two values (e.g., 5 and 15).

function randomNumberBetween (min,max){
    // Exclusive upper bound: Math.floor(Math.random() * (max - min)) + min
    // Inclusive upper bound: Math.floor(Math.random() * (max - min + 1)) + min
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumberBetween(10,20));

// Create a function that rounds a floating-point number to 2 decimal places.
function roundsFlotingPoint (floatingNum) {
    return floatingNum.toFixed(2);
}
console.log(roundsFlotingPoint(100.2763656));

// Write a function that returns the square root of a given number.
function findSquireRoot (num) {
    return Math.sqrt(num);
}
console.log(findSquireRoot(25))

// Find the maximum and minimum values in an array using Math.max() and Math.min().
function findMaxAndMinValue (list){
    const minimum = Math.min(...list);
    const maximum = Math.max(...list);
    return `minimum value : ${minimum} and maximum value : ${maximum}`;
}
console.log(findMaxAndMinValue([26,3,4,57,6,7,8,99]));
// Write a function to calculate the area of a circle using Math.PI.
function areaOfCircle (radians) {
    const PI = Math.PI.toFixed(3);
    const area = PI* radians ** 2; 
    return area
}
console.log(areaOfCircle(5));
