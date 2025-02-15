// ! Write a function customPromiseAll(promises) that mimics Promise.all(). The function should take an array of promises and return a new promise that resolves when all input promises resolve or rejects if any promise fails.

function customPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve([]); // If no promises, return empty array
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise) // Ensure it's a promise
                .then(value => {
                    results[index] = value;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results); // Resolve only when all promises complete
                    }
                })
                .catch(reject); // Reject immediately if any promise fails
        });
    });
}
// Example usage
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
customPromiseAll([p1, p2, p3]).then(console.log); // Output: [1, 2, 3]
const p4 = Promise.reject("Error!");
customPromiseAll([p1, p4, p3]).catch(console.log); // Output: "Error!"
