//! 1. Basic Class Creation
// Question:
// Create a class Person with the following properties:

//* name (string)
//* age (number)
//* Add a method introduce() that logs:
//* Hello, my name is <name> and I am <age> years old.

// Challenge: Extend the Person class to create a Student class with an additional property grade and override the introduce() method to include the grade.
class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person = new Person("Vijay", 20);
person.introduce(); // Corrected: Directly call the method

class Student extends Person {
    grade;

    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    introduce() {
        console.log(
            `Hello, my name is ${this.name} and I am ${this.age} years old, and my grade is ${this.grade}.`
        );
    }
}

const student = new Student("Vijay", 20, "A");
student.introduce(); // Corrected: Directly call the method


//! 2. Encapsulation
// Question:
// Write a class BankAccount with the following features:

//* A private property #balance (initialized to 0).
//* Methods deposit(amount) and withdraw(amount).
//* A method getBalance() to return the current balance.
class BankAccount {
    #balance = 0; // Private property

    constructor(name, amount) {
        if (amount < 0) {
            console.log(`Initial amount cannot be negative.`);
            return;
        }
        this.name = name;
        this.#balance = amount;
    }

    deposit(amount) {
        if (!amount || amount <= 0) {
            console.log(`Please enter an amount greater than 0.`);
            return;
        }
        this.#balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.#balance}.`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log(`Please enter an amount greater than 0.`);
            return;
        }
        if (this.#balance < amount) {
            console.log(`Insufficient balance. Your current balance is ${this.#balance}.`);
            return;
        }
        this.#balance -= amount;
        console.log(`Withdrew ${amount}. New balance is ${this.#balance}.`);
    }

    getBalance() {
        console.log(`Your total balance is ${this.#balance}.`);
    }
}

const accountHolder = new BankAccount("vijay",5000);
console.log(accountHolder);
accountHolder.getBalance()


//! 4. Static Methods
// Question:
// Create a MathUtils class with static methods:

//* add(a, b) - returns the sum of two numbers.
//* multiply(a, b) - returns the product of two numbers.

class MathUtils {
    static add(a, b) {
        return a + b; // Return the sum
    }
    static multiply(a, b) {
        return a * b; // Return the product
    }
}

console.log(`The sum of a and b is ${MathUtils.add(5, 5)}`);
console.log(`The product of two numbers is ${MathUtils.multiply(5, 5)}`);







