let result = (function (num) {
    return (function (x) {
        return num + x;
    })(5);
})(10);

// console.log(result);


for (var i = 1; i <= 3; i++) {
    (function (j) {
        setTimeout(function () {
            console.log("Value:", j);
        }, j * 1000);
    })(i);
}

// practice 
console.log("Using var:");
for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log("var i:", i);
    }, i * 1000);
}

console.log("Using let:");
for (let j = 1; j <= 3; j++) {
    setTimeout(function () {
        console.log("let j:", j);
    }, j * 1000);
}


