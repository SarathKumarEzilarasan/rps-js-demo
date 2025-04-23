let myMap = new Map();

myMap.set('name','john');
myMap.set('age',30);
myMap.set('name','peter');
myMap.set();

// console.log(myMap.get('age'));

// console.log(myMap.has('age'));

// console.log(myMap.delete('age'));

// console.log(myMap.size);

myMap.forEach((value, key)=> console.log(`${key}: ${value}`));