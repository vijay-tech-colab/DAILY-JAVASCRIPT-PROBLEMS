// // ! write a function  generateHash that generate a hash tag from given input string


// // first way using map array method
// const generateHash = (str) => {
//     if (str.length > 280 || str.trim().length === 0)
//         return false
//     const items = str.split(' ');
//     const capitalize = items.map((value) => value.at(0).toUpperCase()+value.slice(1)).join('');
//     const hashStr = `#${capitalize}`;
//     return hashStr
// }
// console.log(generateHash('Welcome to the Github ?'));



// // second way using core concept 
// const generateHash = (str) => {
//     const items = str.split(' ');
//     let hashStr = '#';
//     for(let i = 0; i < items.length; i++){
//         hashStr += items[i].charAt(0).toUpperCase().concat(items[i].slice(1)); 
//     }
//     return hashStr
// }
// console.log(generateHash('Welcome to the Github ?'));


