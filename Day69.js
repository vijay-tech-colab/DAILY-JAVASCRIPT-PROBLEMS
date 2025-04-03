function bubbleSort(arr) {
    // Your code here
    const n = arr.length;

    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
        
    }
    return arr
}

let arr = [3, 0, -2, 8, 7, 1,88];
console.log(bubbleSort(arr));  // Output: [-2, 0, 1, 3, 7, 8]

