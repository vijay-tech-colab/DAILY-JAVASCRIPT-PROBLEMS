const person = {
    name: "Vijay Kumar",
    age: 24,
    address: {
        street: "123 Main St",
        city: "Delhi",
        country: "India",
    },
    contact: {
        email: "vijay@example.com",
        phone: {
            mobile: "+91 9876543210",
            landline: "011-12345678",
        },
    },
    skills: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
        backend: ["Node.js", "Express", "MongoDB","Next.js"],
    }
};
const makeDeepCopy = (obj) => {
    if(typeof obj !== 'object' || typeof obj === null){
        return obj
    }
    const codiedValue = Array.isArray(obj) ? [] : {};
    const key = Object.keys(obj)
    for(let i = 0; i <key.length; i++ ){
        codiedValue[key[i]] = makeDeepCopy(obj[key[i]]);
    }
    return codiedValue
}
const person2 = makeDeepCopy(person);
person2.contact.phone.mobile = "+91 6782093989";
console.log(person);
console.log(person2);