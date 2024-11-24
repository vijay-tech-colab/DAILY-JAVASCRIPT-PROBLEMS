//! Basic Level
// Create an Object

// Create an object called person with the properties: name, age, and city.
// Log each property using dot notation and bracket notation.
const person = {
    name : "vijay",
    age : 20,
    city : "Jaunpur"
}
console.log(person.name);
console.log(person.age);
console.log(person.city);




//! Add and Delete Properties
// Add a profession property to the person object and assign it a value.
// Delete the city property from the person object.
person.profession = "Engineer";
delete person.city;
console.log(person);

// Check for a Property
// Write a function hasProperty(obj, prop) that checks if a property exists in an object.
// Iterate Over an Object
function hasProperty(obj,prop){
    for (let key in obj){
        if(obj.hasOwnProperty(prop)){
            console.log(true);
            break;
        }
    }
}
hasProperty(person,'name');

// Create an object with at least three properties.
// Use a for...in loop to log all keys and their corresponding values.
const student = {
    name : "vijay",
    email : "vijaykumar@gmail.com",
    cls : "BCA"
}
for(let key in student){
    console.log(`[${key} = ${student[key]}]`);
}
// Intermediate Level
// Object Methods

// Add a method greet() to the person object that logs a greeting using the name property.
person.greet = () => {
    console.log(`welcome ${person.name}`);
}
// Call the method to see the output.
person.greet()

// Merge Objects
// Create two objects, obj1 and obj2, and merge them into a new object using:
const obj1 = {
    id : 1,
    name : "ajay",
    age : 24
}
const obj2 = {
    isAdult : true,
    hasIdCard :false    
}
// Object spread operator { ...obj1, ...obj2 }.
const obj3 = {...obj1,...obj2};
console.log(obj3);
// Object.assign().
const obj4 = Object.assign(obj1,obj2);
console.log(obj4);

// Object.keys(), Object.values(), and Object.entries()

// Create an object and:
// Log all keys using Object.keys().
// Log all values using Object.values().
// Log all entries (key-value pairs) using Object.entries().
const user = {
    userid : '16546',
    userName : "John Doe",
}
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
