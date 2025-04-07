


const person = {
    name: "John",
    age: 22,
    city: "Delhi",
};

console.log(person);

// Access the age property of the person object in two different ways
console.log(person.age);
console.log(person["age"]);

// Add a new property 'country' to the person object
person.country = "India";

// Delete the 'city' property from the person object
delete person.city;

console.log(person); // Check the updated object

// Check if the person object has a property called 'name'
console.log(Object.hasOwn(person, "name")); // true














//! Intermediate Object Questions

// Loop through all properties of the person object and log them.
for (let key in person) {
    console.log(person[key]);
}
// Create an array of objects representing students with properties: id, name, and marks. Log the student with the highest marks.

const students = [
    { id: 1, name: "Vijay", marks: 85 },
    { id: 2, name: "Amit", marks: 92 },
    { id: 3, name: "Priya", marks: 88 },
    { id: 4, name: "Rahul", marks: 76 }
];

const topStudent = students.reduce((maxMark, student) => student.marks > maxMark.marks ? student : maxMark, students[0]);
console.log("Student with highest marks:", topStudent);

// Create a function getKeys(obj) that returns an array of all the keys in an object.
function getKeys(obj) {
    return Object.keys(obj);
}
console.log(getKeys({ id: 1, name: "Vijay", marks: 85 }));

// Create a function mergeObjects(obj1, obj2) that merges two objects and returns the result.
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

console.log(mergeObjects({ id: 3, name: "Priya", marks: 88 }, {age: 22,city: "Delhi"}));

// Convert the person object into a JSON string and back to an object.
const jsonObj = JSON.parse(JSON.stringify(person));
console.log(jsonObj);




//! Advanced Object Questions

// Create an object car with properties brand, model, and year. Add a method getDetails() that returns a string containing all details of the car.

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    
    getDetails: function() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }
};

console.log(car);
console.log(car.getDetails()); // Output: Brand: Toyota, Model: Corolla, Year: 2022

// Create a constructor function Person that takes name and age as parameters and creates an object.
function Person(name, age){
    this.name = name;
    this.age = age
}
const personObj = new Person('sohit', 20);
console.log(personObj);


// Use Object.freeze() on an object and try to modify it.
Object.freeze(person);
person.name = "vijay"; // it cannot be changed because of it has been fix
console.log(person);

// Given an object:
// Change the value of c without modifying the original object.

let obj = { a: 10, b: { c: 20 } };

const obj2 = JSON.parse(JSON.stringify(obj));
obj2.b.c = 30;

console.log(obj);
console.log(obj2);


