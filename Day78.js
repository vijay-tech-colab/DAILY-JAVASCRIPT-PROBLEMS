const person = {
    name: "Alice",
    age: 25,
    contact: {
        email: "alice@example.com",
        phone: {
            home: "123-456-7890",
            work: "987-654-3210"
        }
    },
    hobbies: ["reading", "gaming", { sport: "tennis" }]
};


const person2 = structuredClone(person);

person2.contact.email = "alice123@gmail.com"

console.log(person);
console.log(person2);

