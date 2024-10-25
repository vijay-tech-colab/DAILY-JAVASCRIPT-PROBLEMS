// ! question 1 
// 1 Create a new Date object for your birthday.
// Example: How would you create a Date object for July 20, 1995?

// const year = '2003';
// const month = '0'; // month start from 0 -January and end 11 - December
// const day = '7';
// const my_birthday = new Date(year,month,day);
// console.log(my_birthday);

// ! question 2 
// 2 Get the current date and time.
// Write a script to print the current date and time using the Date object.
// const date = new Date();
// const date_time = date.toLocaleString();
// console.log(date_time);

// ! question 3
// 3 Extract the day, month, and year from a Date object.
// Create a Date object and write code to extract and print the day, month, and year separately.
// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// console.log(year);
// console.log(month);
// console.log(day);

// ! question 4
// 4 Compare two Date objects.
// Write a function that compares two dates and determines which one is earlier.
// function compareDates(date1, date2) {
//     const time1 = date1.getTime();
//     const time2 = date2.getTime();
//     if(time1 > time2){
//         console.log("Date 2 is earlier.");
//     }else if(time1 < time2){
//         console.log("Date 1 is earlier.");
//     }else{
//         console.log("Both dates are same.");
//     }
// }
// // Create two Date objects
// const date1 = new Date("2024-12-20");
// const date2 = new Date("2024-11-15");
// // Call the function to compare the two dates
// compareDates(date1, date2);


// 5 Find the difference between two dates.
// Write a function to calculate how many days have passed between January 1, 2020, and today’s date.
function calculate(before_date, today){
    const date1 = before_date.getTime();
    const date2 = today.getTime();
    const differenceInMilliseconds = Math.abs(date1 - date2);
    // Convert milliseconds to days
    const millisecondPerDay = 1000 * 60 * 60 *24 ;
    const daysDifference = Math.floor(differenceInMilliseconds / millisecondPerDay);
    console.log(daysDifference);
}
const date1 = new Date("2020-1-01");
const date2 = new Date('2024-10-25');
calculate(date1,date2);
// 6 Format a date to MM/DD/YYYY.
// Create a function that takes a Date object and returns the date formatted as MM/DD/YYYY.

// 7 Set a specific date and time.
// Write code to set the date to December 31, 2023, 10:00 AM.

// 8 Convert a Date object to a string in ISO format.
// Create a Date object and print it in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).

// 9 Add 7 days to the current date.
// Write a function that adds 7 days to the current date and prints the new date.

// 10 Get the current time in hours, minutes, and seconds.
// Write code to print the current time in HH:MM:SS format.

// 11 Retrieve the time zone offset for your system.
// Write a script that prints the time zone offset (in minutes) for your current system.

// 12 Parse a date string into a Date object.
// Use Date.parse() to convert the string "2024-12-25T00:00:00" into a Date object and print it.

// 13 Convert a date to UTC format.
// Write a script to convert the current local time to UTC format and print it.

// 14 Set a custom time for an existing date.
// Create a Date object for today and then set the time to 3:30 PM using JavaScript methods.

// 15 Get the total milliseconds since January 1, 1970.
// Write a script to get the number of milliseconds passed since the Unix epoch (January 1, 1970) for the current time.









