function maxNum(arr) {
    let maxNumber = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maxNumber){
            maxNumber = arr[i];
        }
    }
    return maxNumber
}

console.log(maxNum([10, 45, 2, 67, 33,99]));
