let mySet = new Set();

mySet.add(1);
mySet.add(1);
mySet.add(2);
mySet.add(3);

mySet.delete(2);

// console.log(mySet.has(3));
// console.log(mySet.size);
// console.log(mySet);

// mySet.forEach(val => console.log(val));
let values = mySet.values();

console.log(values.next().value); 
console.log(values.next().value); 

let arr = Array.from(mySet);
console.log(arr);