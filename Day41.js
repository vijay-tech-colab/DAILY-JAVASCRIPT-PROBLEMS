// Closures

// Question: Create a function counter that returns another function. The returned function should increment a count each time it’s called.
let count = 0
function counter () {
    return function (){
        count++;
        console.log(count);
    }
}

const increment = counter();
increment(); // 1
increment(); // 2
increment(); // 3
increment(); // 4
increment(); // 5


// Question: Write a function that takes an array of numbers and returns a new array with each number squared, but only if the number is even.

function squaredNum (arr) {
    return arr.filter((value,index) => value % 2 === 0).map(value => value ** 2);
}
console.log(squaredNum([1, 2, 3, 4, 5]));
// Input: [1, 2, 3, 4, 5]  
// Output: [4, 16]


// Question: Write a function that calculates the number of days between two dates
function calculateDaysBetween(date1, date2) {
    // Convert both dates to Date objects
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = endDate - startDate;

    // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
    const differenceInDays = differenceInMilliseconds / (24 * 60 * 60 * 1000);

    return differenceInDays;
}

// Example input
const date1 = "2024-11-19";
const date2 = "2024-12-25";
console.log(calculateDaysBetween(date1, date2)); // Output: 36

