// 1. Basic Constructor Function
// Question: Create a constructor function Car that has properties make, model, and year. Add a method getCarInfo that returns a string with the car's details. Create a few instances of Car and call getCarInfo on each one.

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getCarInfo = function() {
        return `${this.year} ${this.make} ${this.model}`;
    };
}

// Create instances
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2022);

console.log(car1.getCarInfo()); // "2020 Toyota Corolla"
console.log(car2.getCarInfo()); // "2022 Honda Civic"

// 2. Constructor with Default Values
// Question: Modify the Car constructor so that if year is not provided, it defaults to 2023. Create an instance of Car without passing the year parameter and call the getCarInfo method.

function Car(make, model, year=2023) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getCarInfo = function() {
        return `${this.year} ${this.make} ${this.model}`;
    };
}

const car1 = new Car("Toyota", "Corolla"); // we are not passing year argsuments

console.log(car1.getCarInfo()); // "2023 Toyota Corolla"


// 3. Constructor with Conditional Logic
// Question: Create a Person constructor function with name and age properties. Inside the constructor, check if age is less than 0. If it is, set it to 0 by default. Create instances to test this logic.

function Person(name, age) {
    this.name = name;
    this.age = age < 0 ? 0 : age;
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", -5);

console.log(person1.age); // 25
console.log(person2.age); // 0 (age was set to 0 because it was negative)

// 4. Adding Methods to the Prototype
// Question: Using the Car constructor from Question 1, add a new method called startEngine to its prototype that logs 
// "Engine started for [make] [model]". Call startEngine on different Car instances to see if it works.

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.startEngine = function() {
    console.log(`Engine started for ${this.make} ${this.model}`);
};

const car4 = new Car("Tesla", "Model 3", 2021);
car4.startEngine(); // "Engine started for Tesla Model 3"
