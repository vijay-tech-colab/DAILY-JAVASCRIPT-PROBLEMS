// Write a JavaScript function to display the current date and time in the format:

function displayDateAndTime () {
    return new Date();
}

const date = displayDateAndTime();
console.log(date);


// Create a function to return the day of the week for a given date.
// Example: Input: "2024-11-26", Output: "Tuesday"

function returnDayOfWeek (input) {
    const day =  new Date(input).getDay();
    const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return week[day];
}
console.log(returnDayOfWeek('2024-11-26'));