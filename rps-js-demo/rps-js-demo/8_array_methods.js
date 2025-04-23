const fruits = ["banana","apple","orange"];

// console.log(fruits.length);
// console.log(fruits[1]);

// fruits[5] = "pineapple";
// console.log(fruits[4]);

// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
// console.log(fruits.pop());
// console.log(fruits.push("pineapple"));
// console.log(fruits.shift());
// console.log(fruits.unshift("pineapple"));
// const fruits1 = ["pineapple"];
// console.log(fruits.concat(fruits1));
// const arr = [[1,2],[2,2],[5,6]];
// console.log(arr.flat());
// console.log(arr);
// console.log(fruits);
// console.log(fruits.splice(1,2,"mango"));
// console.log(fruits.slice(1,3));
// console.log(fruits.sort());
// console.log(fruits.reverse());
// const arr = [40,100,1,5,25,10];
// console.log(arr.sort((a,b) => b-a));


///////////////////////////////////////////////////////////////////
// const numbers = [45,4,9,16,25];
// const evenArr = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if(element%2 === 0){
//         evenArr.push(numbers[i]);
//     }
// }

// console.log(evenArr);

// const evenArr = numbers.filter(value => value%2 === 0);
// console.log(evenArr);
///////////////////////////////////////////////////////////////////
// const numbers = [45,4,9,16,25];
// const evenArr = [];
// const sqArr = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if(element%2 === 0){
//         evenArr.push(numbers[i]);
//     }
// }

// console.log(evenArr);

// for (let index = 0; index < evenArr.length; index++) {
//     const element = evenArr[index];
//     sqArr.push(element*element);
// }

// console.log(sqArr);
// const evenArr = numbers.filter(value => value%2 === 0);
// const sqArr = evenArr.map(value => value*value);

// const result = numbers
//                 .filter(value => value%2 === 0)
//                 .map(value => value*value);
// console.log(result);
///////////////////////////////////////////////////////////////////
// const numbers = [45,4,9,16,25];

// const sum = numbers.reduce((total,value)=> total + value);
// console.log(sum);
// const sum = numbers.reduce((total,value)=> total + value, 100);
// console.log(sum);
///////////////////////////////////////////////////////////////////
// const numbers = [45,4,9,16,25];

// console.log(numbers.indexOf(4));

// const keys = numbers.keys();
// for(let x of keys){
//     console.log(x);
// }

// const values = numbers.values();
// for(let x of values){
//     console.log(x);
// }

// const entries = numbers.entries();
// for(let x of entries){
//     console.log(x);
// }

// console.log(numbers.includes(4));

// numbers.forEach(value => console.log(value));

// numbers.values().array.forEach(element => {
    
// });

const numbers = [45,4,9];
const numbers1 = [16,25];

const result = [...numbers,...numbers1];

console.log(result);