// write  function called countChar that takes to parameter : a string and character to count


// first way using core concept
const countChar = (str,char) => {
    let charSum = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].includes(char.toLowerCase())){
            charSum += 1;
        }
    }
    return charSum
}
const sentence1 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil laborum blanditiis, ducimus nostrum facere suscipit qui nesciunt numquam doloribus eaque, sapiente a dicta corrupti consequuntur non quo! Tempore, cumque unde.'

console.log(countChar(sentence1, 'i'))


2nd way using reduce method
const countChar = (str,char) => {
    const convertStrToArr = Array.from(str);
    const count = convertStrToArr.reduce((acc,curr) => {
        let res = curr === char ? acc += 1 : acc
        return res
    },0); 
    return count
}
const sentence2 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil laborum blanditiis, ducimus nostrum facere suscipit qui nesciunt numquam doloribus eaque, sapiente a dicta corrupti consequuntur non quo! Tempore, cumque unde.'

console.log(countChar(sentence2, 'q'));



3rd way using flter and reduce
const countChar = (str, char) => {
    const convertStrToArr = [...str];
    const countCharacter = convertStrToArr
        .filter((val) => val === char)
        .reduce((acc, curr) => curr.length + acc, 0);
    return countCharacter
}
const sentence3 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil laborum blanditiis, ducimus nostrum facere suscipit qui nesciunt numquam doloribus eaque, sapiente a dicta corrupti consequuntur non quo! Tempore, cumque unde.'

console.log(countChar(sentence3, 's'))
