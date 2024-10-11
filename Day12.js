// ! Write a JavaScript function that returns a string that has letters in alphabetical order.

const alphabeticalOrder = (str) => {
    const strToArr = str.split('');
    return strToArr.sort().join('');
}

console.log(alphabeticalOrder('webmaster'))

// Example string : 'webmaster'
// Expected Output : 'abeemrstw'


