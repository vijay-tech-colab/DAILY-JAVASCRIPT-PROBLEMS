//!  Basic Promises: 
// Write a function fetchData() that returns a promise. If the promise resolves, log "Data fetched successfully," and if it rejects, log "Error fetching data."

function fetchData () {
    return new Promise((resolve,reject) => {
        const success = true;
        if(success){
            resolve("Fetch Data Successfully.")
        }
        else{
            reject("Error fetching Data.")
        }
    });
}
fetchData()
.then((message) => console.log(message))
.catch((err) => console.log(err))

// Using setTimeout: Create a function delayedMessage that accepts a message and a delay in milliseconds as arguments. The function should log the message after the specified delay using setTimeout.
function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}
delayedMessage("Hello, this message is delayed!", 2000);


//! Intermediate Level
// Chaining Promises: Create two functions, stepOne and stepTwo, that return promises resolving after 1 second each. Chain them so that stepTwo only executes after stepOne is resolved, and log appropriate messages.
function stepOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step One Completed");
            resolve();
        }, 1000);
    });
}

function stepTwo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step Two Completed");
            resolve();
        }, 1000);
    });
}

stepOne().then(() => stepTwo().then());

// Simulating an API Call: Write a function simulateApiCall that accepts a URL (as a string) and returns a promise. Simulate the promise resolving after 2 seconds with a message "Fetched data from [URL]".
function simulateApiCall(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Fetched data from ${url}`);
        }, 2000);
    });
}

simulateApiCall("https://api.example.com")
    .then((data) => console.log(data));
// Handling Multiple Promises: Use Promise.all to execute three promises (promise1, promise2, promise3) that resolve after different time intervals. Log their results together once all of them resolve.

const promise1 = new Promise((resolve) => setTimeout(() => resolve("Result 1"),1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Result 2"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Result 3"), 3000));

Promise.all([promise1, promise2, promise3])
    .then((results) => console.log("All results:", results))
    .catch((error) => console.log("Error:", error));


// Advanced Level
// async/await: Rewrite the fetchData function from Question 1 using async/await. Include error handling using try-catch.


async function fetchData() {
    try {
        const data = await Promise.resolve("Data fetched successfully");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

// Timeout with Async/Await: Write an async function that fetches data using a mock API function mockFetch(url) and logs the data. If the fetch takes more than 3 seconds, log a timeout error.

function mockFetch(url) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Data from ${url}`), 2000);
    });
}

async function fetchWithTimeout(url, timeout) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject("Fetch timed out"), timeout);
    });

    try {
        const data = await Promise.race([mockFetch(url), timeoutPromise]);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchWithTimeout("https://api.example.com", 3000);


// Race Condition: Create two promises with different delays and use Promise.race to log which one resolves first.
const promise01 = new Promise((resolve) => setTimeout(() => resolve("Promise First resolve."),4000));
const promise02 = new Promise((resolve) => setTimeout(() => resolve("Promise Second resolve."),2000));
Promise.race([promise01,promise02])
    .then((results) => console.log(results))
    .catch((err) => console.log(err));


// Bonus
// Event Loop: Create a snippet that demonstrates the order of execution of synchronous code, microtasks (like Promise), and macrotasks (like setTimeout).
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Chained API Calls: Write a function that makes three sequential API calls using async/await (e.g., fetchUser, fetchPosts, and fetchComments), where each depends on the result of the previous one.

async function fetchUser() {
    return new Promise((resolve) => setTimeout(() => resolve("User Data"), 1000));
}

async function fetchPosts(userData) {
    return new Promise((resolve) => setTimeout(() => resolve(`${userData}'s Posts`), 1000));
}

async function fetchComments(postsData) {
    return new Promise((resolve) => setTimeout(() => resolve(`${postsData} with Comments`), 1000));
}

async function fetchChainedData() {
    try {
        const user = await fetchUser();
        console.log("User:", user);

        const posts = await fetchPosts(user);
        console.log("Posts:", posts);

        const comments = await fetchComments(posts);
        console.log("Comments:", comments);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchChainedData();


