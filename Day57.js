//! Question:
//* What will be the output of the following code, and why?

console.log(1 + "1"); // output : 11 because if number and str will add  operation then result will be str and js will do implicit conversion 
console.log(1 - "1"); // output : 0 because if number and str will minus  operation then result will be number and js will do implicit conversion 
console.log(1 + true); // output : 2 because if number and boolean  will add  operation then result will be number true means 1 and js will do implicit conversion 
console.log("10" * 2);
// output : 20 because if str and number  will multiply  operation then result will be number and js will do implicit conversion 
console.log("10" + 2); // output : 102 because if number and str will add  operation then result will be str and js will do implicit conversion 