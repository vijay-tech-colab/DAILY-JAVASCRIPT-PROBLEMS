// // write a function that takes array of objects and return the sum of each price ?

// function sumOfTotalPrice(products) {
//     let sum = 0
//     for (let i = 0; i < products.length; i++) {
//         sum = products[i].price + sum
//     }
//     return sum;
// }

// const products = [
//     { category: "Bakery", price: 1500 },
//     { category: "Dairy", price: 2500 },
//     { category: "Bakery", price: 3200 },
//     { category: "Beverages", price: 4500 },
//     { category: "Snacks", price: 1300 },
//     { category: "Frozen Foods", price: 7100 },
//     { category: "Bakery", price: 5400 },
//     { category: "Dairy", price: 6100 },
//     { category: "Produce", price: 2900 },
//     { category: "Bakery", price: 8700 },
//     { category: "Beverages", price: 2100 },
//     { category: "Snacks", price: 3400 },
//     { category: "Frozen Foods", price: 5200 },
//     { category: "Produce", price: 6700 },
//     { category: "Bakery", price: 7600 },
//     { category: "Dairy", price: 4300 },
//     { category: "Beverages", price: 9800 },
//     { category: "Snacks", price: 3000 },
//     { category: "Produce", price: 4100 },
//     { category: "Bakery", price: 6400 }
// ];

// const totalPrice = sumOfTotalPrice(products);
// console.log(totalPrice);





// // second way using reduce method ?
// function sumOfTotalPrice(products) {
//     return products.reduce((acc,curr) => curr.price + acc,0)
// }
// const totalPrice = sumOfTotalPrice(products);
// console.log(totalPrice);