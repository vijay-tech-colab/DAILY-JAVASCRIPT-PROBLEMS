// // ! question 1 
// // 1 Create a new Date object for your birthday.
// // Example: How would you create a Date object for July 20, 1995?

// const year = '2003';
// const month = '0'; // month start from 0 -January and end 11 - December
// const day = '7';
// const my_birthday = new Date(year,month,day);
// console.log(my_birthday);

// // ! question 2 
// // 2 Get the current date and time.
// //Write a script to print the current date and time using the Date object.
// const date = new Date();
// const date_time = date.toLocaleString();
// console.log(date_time);

// // ! question 3
// // 3 Extract the day, month, and year from a Date object.
// // Create a Date object and write code to extract and print the day, month, and year separately.
// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// console.log(year);
// console.log(month);
// console.log(day);

// // ! question 4
// // 4 Compare two Date objects.
// // Write a function that compares two dates and determines which one is earlier.
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


// // 5 Find the difference between two dates.
// // Write a function to calculate how many days have passed between January 1, 2020, and today’s date.

// function calculate(before_date, today){
//     const date1 = before_date.getTime();
//     const date2 = today.getTime();
//     const differenceInMilliseconds = Math.abs(date1 - date2);
//     // Convert milliseconds to days
//     const millisecondPerDay = 1000 * 60 * 60 *24 ;
//     const daysDifference = Math.floor(differenceInMilliseconds / millisecondPerDay);
//     console.log(daysDifference);
// }
// const date1 = new Date("2020-1-01");
// const date2 = new Date('2024-10-25');
// calculate(date1,date2);
