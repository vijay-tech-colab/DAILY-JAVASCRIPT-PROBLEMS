// write a function that calculate the factorial of given number

function factorial (num) {
    let fact = 1;
    for (let i = 1; i <= num; i++){
        fact = fact * i
    }
    return fact
}

console.log(factorial(6));

// 2nd way using recursion

function factorialRecursive (num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorialRecursive(num - 1);
    }
}

console.log(factorialRecursive(6));