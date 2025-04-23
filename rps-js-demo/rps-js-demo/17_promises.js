// let myPromise = new Promise((resolve,reject)=>{
//     let x = 0;
//     if(x == 0){
//         setTimeout(() => {
//             resolve("OK");
//         }, 2000);
//     }else{
//         reject("Error");
//     }
// });

// console.log(myPromise);


// myPromise
//     .then(val => console.log(val))
//     .catch(val => console.error(val))

const fs = require('fs').promises;

fs.readFile('demo.txt','utf-8')
    .then(data => {
        console.log(data);
        return fs.readFile('demo1.txt','utf-8');
    })
    .then(data1 => {
        console.log(data1);
        return fs.readFile('demo2.txt','utf-8');
    })
    .then(data2 => console.log(data2))
    .catch(err => console.log(err));