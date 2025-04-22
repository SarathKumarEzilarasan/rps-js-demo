function Person(name){
    this.name = name;
}

// Person.age = 30;
Person.prototype.age = 30;

const john = new Person("john");

console.log(john.name);
console.log(john.age);
