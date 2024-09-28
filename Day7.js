/*
1. Write a JavaScript program to create a class called "Person" with properties for name, 
age and country. Include a method to display the person's details. Create two instances of the
'Person' class and display their details.
*/

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  personDetails() {
    return `Your name is ${this.name} and age is ${this.age} and You belong to ${this.country}`;
  }
}

// create instance
const person1 = new Person("vijay", 20, "India");
const person2 = new Person("Ajay", 22, "India");
console.log(person1.personDetails());
console.log(person2.personDetails());

/* 
2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.
*/

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area_of_rectangle() {
    return `The perimeter_of_rectangle  = ${this.height * this.width}`;
  }

  perimeter_of_rectangle() {
    return `The perimeter_of_rectangle  = ${2 * (this.height + this.width)}`;
  }
}

const area = new Rectangle("20", "50");
const perimeter = new Rectangle(10, 40);

console.log(area.area_of_rectangle());
console.log(perimeter.perimeter_of_rectangle());

/* 
3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
*/

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

class Car extends Vehicle{
    constructor(make, model, year, door){
        super(make, model, year);
        this.door = door
    }
    displayDetails(){
        super.displayDetails();
        console.log(`Doors: ${this.door}`)
    }
}

const car = new Car('Honda', 'Accord', 2023,4);
car.displayDetails();



