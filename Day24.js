const products = [
    { product: "Laptop", quantity: 5, price: 1000 },
    { product: "Phone", quantity: 10, price: 500 },
    { product: "Tablet", quantity: 7, price: 300 },
    { product: "Monitor", quantity: 15, price: 200 },
    { product: "Keyboard", quantity: 20, price: 50 },
    { product: "Mouse", quantity: 25, price: 30 },
    { product: "Headphones", quantity: 8, price: 80 },
    { product: "Smartwatch", quantity: 12, price: 150 },
    { product: "Printer", quantity: 4, price: 250 },
    { product: "Router", quantity: 18, price: 60 },
    { product: "Speaker", quantity: 9, price: 120 },
    { product: "Camera", quantity: 6, price: 600 },
    { product: "Tripod", quantity: 14, price: 70 },
    { product: "SSD", quantity: 20, price: 90 },
    { product: "RAM", quantity: 30, price: 40 },
    { product: "Graphics Card", quantity: 3, price: 400 },
    { product: "USB Drive", quantity: 40, price: 20 },
    { product: "Power Bank", quantity: 22, price: 30 },
    { product: "Projector", quantity: 2, price: 700 },
    { product: "Microphone", quantity: 11, price: 100 },
];

// ! create a function that takes a array of an object which calculates the total price and returns its as a number

// 1st way to using the reduce function
// function getTotalPrice(arr){
//     return arr.reduce((acc,curr) => curr.price +acc, 0);
// }
// console.log(getTotalPrice(products)); // should return the total price of all products in the array

// 2nd way to using for of loop

// function getTotalPrice(arr){
//     let totalPrice = 0;
//     for(let product of arr){
//         totalPrice += product.price;
//     }
//     return totalPrice;
// }
// console.log(getTotalPrice(products)); // should return the total price of all products in the array

// 3rd way using core concept in js

function getTotalPrice(arr){
    let totalPrice = 0;
    for(let i = 0; i< arr.length; i++){
        totalPrice += arr[i].price;
    }
    return totalPrice;
}

console.log(getTotalPrice(products)); // should return the total price of all products in the array