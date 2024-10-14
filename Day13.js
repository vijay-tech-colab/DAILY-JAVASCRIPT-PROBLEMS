// 13. Write a JavaScript program to construct the following pattern, using a nested for loop.

/* 
    *  
    * *  
    * * *  
    * * * *  
    * * * * * 
*/ 

// ? i am using terminal of node enviroments 

for(let i = 0; i < 5; i++){
    let stars = ''
    for(let y = 0; y <= i; y++){
        stars = stars + ' *';
    }
    console.log(stars)
}