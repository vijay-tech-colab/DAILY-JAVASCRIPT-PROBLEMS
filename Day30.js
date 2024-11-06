// // INVENTIRY MANAGEMENT SYSTEM 

// class InventoryItem {
//   constructor(name, quantity) {
//     this.name = name;
//     this.quantity = quantity;
//   }

//   // Method to update the quantity of the item
//   updateQuantity(newQuantity) {
//     this.quantity = newQuantity;
//   }
// }

// class Inventory {
//   // Static property to hold all items in the inventory
//   static items = [];

//   // Static method to add a new item to the inventory
//   static addItem(name, quantity) {
//     const existingItem = Inventory.items.find(item => item.name === name);
//     if (existingItem) {
//       console.log(`Item ${name} already exists. Use updateItemQuantity to modify it.`);
//     } else {
//       Inventory.items.push(new InventoryItem(name, quantity));
//       console.log(`Item ${name} added with quantity ${quantity}.`);
//     }
//   }

//   // Static method to update the quantity of an existing item
//   static updateItemQuantity(name, newQuantity) {
//     const item = Inventory.items.find(item => item.name === name);
//     if (item) {
//       item.updateQuantity(newQuantity);
//       console.log(`Item ${name} quantity updated to ${newQuantity}.`);
//     } else {
//       console.log(`Item ${name} does not exist.`);
//     }
//   }

//   // Static method to get the total count of all items in the inventory
//   static getTotalItemCount() {
//     return Inventory.items.reduce((total, item) => total + item.quantity, 0);
//   }

//   // Static method to find an item by name
//   static findItem(name) {
//     const item = Inventory.items.find(item => item.name === name);
//     return item ? item : `Item ${name} not found in inventory.`;
//   }

//   // Static method to display the inventory
//   static displayInventory() {
//     if (Inventory.items.length === 0) {
//       console.log("Inventory is empty.");
//     } else {
//       console.log("Inventory:");
//       Inventory.items.forEach(item => {
//         console.log(`- ${item.name}: ${item.quantity}`);
//       });
//     }
//   }
// }

// // Using the Inventory system
// Inventory.addItem("Apple", 100);
// Inventory.addItem("Orange", 80);
// Inventory.addItem("Banana", 50);

// Inventory.displayInventory();

// Inventory.updateItemQuantity("Apple", 120);
// Inventory.updateItemQuantity("Grapes", 30); // Trying to update a non-existent item

// Inventory.displayInventory();

// console.log("Total item count:", Inventory.getTotalItemCount());

// console.log("Searching for 'Banana':", Inventory.findItem("Banana"));
// console.log("Searching for 'Grapes':", Inventory.findItem("Grapes"));

// Question: Find Unique Characters in a String
// Problem: Write a JavaScript function called findUniqueCharacters that takes a string as input and returns a 
// string of unique characters found in the input string, in the order they first appear.

// const findUniqueCharacters = (str) => {
//   let uniqueChar = '';
//   for(let i = 0; i < str.length; i++){
//     if(!uniqueChar.includes(str.at(i))){
//       uniqueChar += str.at(i);
//     }
//   }
//   return uniqueChar
// }

// Test cases
console.log(findUniqueCharacters("Hello World")); // Output: "HeloWrd"
console.log(findUniqueCharacters("JavaScript is fun!")); // Output: "JavScriptn"
console.log(findUniqueCharacters("aabbcc")); // Output: "abc"

function findUniqueCharacters(input) {
  // Convert the input string to an array
  let uniqueChars = [...new Set(input.split(''))];
  // Join the array back into a string
  return uniqueChars.join('');
}

// Test cases
console.log(findUniqueCharacters("Hello World")); // Output: "HeloWrd"
console.log(findUniqueCharacters("JavaScript is fun!")); // Output: "JavScriptn"
console.log(findUniqueCharacters("aabbcc")); // Output: "abc"


