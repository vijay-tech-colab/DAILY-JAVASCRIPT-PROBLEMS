// 1. Write a JavaScript function to check whether an `input` is an array or not.

const isArray = (input) => {
  return Array.isArray(input);
};

console.log(isArray([]));
console.log(isArray(""));

// 2. Write a JavaScript function to clone an array.

const arr = [45, 5, 6, 6];

const cloneArr = (input) => {
  const copy = input.slice(0);
  copy[1] = 111;
  return copy;
};

console.log(cloneArr(arr));
console.log(arr); // dont manupulate original array




// 1. Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
function validateInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error("Invalid number. Please input an integer.");
  }

  console.log("Number is valid:", number);
}

// Example usage:
try {
  validateInteger(12); // Valid integer
  validateInteger(2.12); // Throws an error
} catch (error) {
  // Catch any errors thrown by the validateInteger function and log the error message
  console.log("Error:", error.message);
  console.log("Error:", error.name);
}
