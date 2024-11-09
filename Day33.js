// Question:
// Write a function groupBy that takes an array of objects and a key, and returns an object that groups the objects by the specified key.

function groupBy(arr, key) {
    return arr.reduce((result, item) => {
      const keyValue = item[key];
      if (!result[keyValue]) {
        result[keyValue] = [];
      }
      result[keyValue].push(item);
      return result;
    }, {});
  }
  
  const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 30 },
    { name: "Eve", age: 35 }
  ];
  
  console.log(groupBy(data, "age"));
  
  