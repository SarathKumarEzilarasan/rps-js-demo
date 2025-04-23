// setTimeout(()=> console.log("hello world") , 2000);
// setTimeout(()=> console.log("hello") , 2000);

// console.log(10);

const fs = require('fs');

fs.readFile('demo.txt','utf-8', (err,data) =>{
    if(err){
        console.error(err);
    }else{
        fs.readFile('demo1.txt','utf-8', (err,data1) =>{
            if(err){
                console.error(err);
            }else{
                fs.readFile('demo2.txt','utf-8', (err,data2) =>{
                    if(err){
                        console.error(err);
                    }else{
                        console.log(data);
                        console.log(data1);
                        console.log(data2);
                    }    
                });    
            }
        });    
    }
})

// callback hell
