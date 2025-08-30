// 🔹 Practice Questions (HOF)

// Write a higher-order function repeat(fn, n) that calls a given function fn exactly n times.
const repeat = (fn, n) => {
  for (let i = 1; i <= n; i++) {
    fn();
  }
};

repeat(function () {
  console.log("hello world");
}, 5);

// Create a function filterEven(numbers, fn) that uses a callback function to filter even numbers from an array.

function even(nums) {
  const newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      newArr.push(i);
    }
  }
  return newArr;
}

function filterEven(numbers, fn) {
  return fn(numbers);
}

console.log(filterEven([, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], even));

// Write a higher-order function transformArray(arr, fn) that takes an array and a function, and returns a new array with the function applied to each element.
// Higher-Order Function
function transformArray(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

// Example callback functions
const double = (x) => x * 2;
const square = (x) => x * x;

// Usage
console.log(transformArray([1, 2, 3, 4], double)); // [2, 4, 6, 8]
console.log(transformArray([1, 2, 3, 4], square)); // [1, 4, 9, 16]
