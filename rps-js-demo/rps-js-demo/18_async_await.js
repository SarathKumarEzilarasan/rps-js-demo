const fs = require('fs').promises;

async function display(){
    try {
        console.log(await fs.readFile('demo.txt','utf-8'));
        console.log(await fs.readFile('demo1.txt','utf-8'));
        console.log(await fs.readFile('demo2.txt','utf-8'));
    } catch (error) {
        console.error(error);
    }
}

display();
console.log("after");