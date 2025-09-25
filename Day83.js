

const promises = [
  new Promise((resolve) =>
    setTimeout(() => resolve("Promise 1 resolved"), 3000)
  ),
  new Promise((resolve) =>
    setTimeout(() => resolve("Promise 2 resolved"), 2000)
  ),
  new Promise((resolve) =>
    setTimeout(() => resolve("Promise 3 resolved"), 1000)
  ),
];


const handlePromises = async (promises) => {
    try {
        const results = await Promise.all(promises);
        console.log(results);
    } catch (error) {
        console.error("Error:", error);
    }
};
// Call the function to see the results

handlePromises(promises);
// Output after 3 seconds: ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
// Output after 3 seconds: ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
// Output after 3 seconds: ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]   

