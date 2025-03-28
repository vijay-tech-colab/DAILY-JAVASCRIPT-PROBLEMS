//! Question:
//? Write a function fetchData() that returns a Promise. The Promise should:
//? Resolve after 2 seconds with the message "Data fetched successfully!"
//? Reject if an error occurs with the message "Failed to fetch data!"
//? Use Math.random() to randomly decide whether to resolve or reject.
//? Then, handle the Promise using .then(), .catch(), and .finally().

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data!");
            }
        }, 2000);
    });
}

// Handling the promise
fetchData()
    .then(result => console.log("✅ Success:", result))
    .catch(error => console.log("❌ Error:", error))
    .finally(() => console.log("🔄 Promise completed!"));



//! Practice Question:
//? Create a function checkNumber(num) that returns a Promise. The Promise should:
//? Resolve if num is even with the message "Even number: <num>".
//? Reject if num is odd with the message "Odd number: <num>".
//? Handle the Promise using .then(), .catch(), and .finally().

function checkNumber(num) {
    return new Promise((resolve,reject) => {
        if(num % 2 === 0){
            resolve(`Even number : ${num}`)
        }else{
            reject(`Odd number : ${num}`)
        }
    })
}

checkNumber(6)
    .then(result => console.log("✅ Success:", result))
    .catch(error => console.log("❌ Error:", error))
    .finally(() => console.log("🔄 Promise completed!"));