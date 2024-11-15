//! Classes
// Create a class Car with properties make, model, and year. Add a method getCarInfo that returns a string with all the car details.
const Car = class {
    constructor(make, model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarInfo () {
        return `Car make ${this.make} || Car model ${this.model} || Car year ${this.year}`
    }
}
const car = new Car("TATA","toyoto",2020);
console.log(car.getCarInfo())

// Create a Person class with properties name and age. Add a method isAdult that returns true if the person is 18 or older.

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    isAdult () {
        if(this.age >= 18){
            return true
        }
        return false
    }
}

const person = new Person('vijay', 20);
console.log(person.isAdult());