//! 3. Prototypes & OOP
//* Q5: Create a Person constructor function with name and age properties. Add a method greet that logs "Hello, my name is {name}".

function Person(name, age) {
    this.name = name;
    this.age = age
}
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}
const john = new Person("John", 25);
john.greet(); // "Hello, my name is John"

//! Q6: Convert the Person function to an ES6 class.

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    greet () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const john2 = new Person2("John", 25);
john2.greet(); // "Hello, my name is John"
