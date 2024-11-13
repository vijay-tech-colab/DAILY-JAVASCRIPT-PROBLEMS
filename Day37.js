// 3. Objects
// Create an object person with properties name, age, and job. Write a function printPersonDetails that logs each property in a sentence.
const person = {
    name : "Vijay kumar",
    age : 20,
    job : "Web developer",
    printPersonDetails () {
        console.log('My name is ' + this.name + " and age is " + this.age + "and I am a " + this.job);
    },
    cls :"printPersonDetails"
}
person.printPersonDetails();


// Write a function countProperties that takes an object and returns the number of properties it has.
function countProperties (obj) {
    let counter = 0;
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            counter++;
        }
    }
    return counter;
}
console.log(countProperties(person));