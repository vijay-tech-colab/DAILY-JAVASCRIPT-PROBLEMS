/*
    Write a promise that resolves after 2 seconds with the message "Success!" and rejects with the message "Error!" if something goes wrong.

*/

const promise = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            // resolve('Success !');
            reject('Error !')
        },2000);
    })
}

promise().then((res) => console.log(res)).catch((err) => console.log(err));