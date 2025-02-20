    // Write a function deepClone(obj) that creates a deep copy of a JavaScript object, ensuring that nested objects are also copied instead of referenced.



    const deepClone = (obj) => {
        if(typeof obj !== 'object' || typeof obj === null){
            return obj
        }
        const codiedValue = Array.isArray(obj) ? [] : {};
        const key = Object.keys(obj);
        for(let i = 0; i< key.length; i++){
            codiedValue[key[i]] = deepClone(obj[key[i]]);
        }
        return codiedValue
    }
    const obj = {
        name: "Vijay",
        details: {
            age: 25,
            address: {
                city: "Delhi",
                country: "India"
            }
        }
    };  

    const clone = deepClone(obj);
    clone.details.address.city = "Mumbai";

    console.log(obj.details.address.city); // "Delhi" (should remain unchanged)
    console.log(clone.details.address.city); // "Mumbai" (updated in clone)
