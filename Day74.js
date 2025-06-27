//! Create a custom error class called ValidationError that extends the built-in Error class. It should accept a message as a parameter and store it.

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError"; // Set the name of the error
    }
}

const err1 = new ValidationError("This is a validation error");
console.log(err1.name);     // "ValidationError"
console.log(err1.message);  // "This is a validation error"


// 2. Error with Additional Properties

//! Enhance your ValidationError class to also accept an error code (e.g., 400 for Bad Request) and store it as a property. Print both the message and code when the error is caught.

class ValidationError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.errorCode = errorCode;
        this.name = "ValidationError"; // Set the name of the error
    }
}

const err = new ValidationError("This is a validation error", 400);
console.log(err.name);     // "ValidationError"
console.log(err.message);  // "This is a validation error"
console.log(err.errorCode) // "this is a validation errorCode"
