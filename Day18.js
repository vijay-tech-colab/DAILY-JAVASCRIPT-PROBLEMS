// Question: Write code inside the try block that intentionally throws an error if the input variable is not a number.
// Catch the error and display a custom error message in the console.


const checkError = (input)=> {
    try {
        if(isNaN(input)){
            console.log(isNaN(input))
            throw Error("Invalid number ?");
        }
        else{
            console.log(`you entered ${input}`);
        }
    } catch (error) {
        console.log(error);
    }
} 

checkError(2);

// console.log(isNaN("5"));