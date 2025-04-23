// const john = {
//     name : "john",
//     age: 25
// }

// const peter = {
//     name : "peter",
//     age: 30
// }

// function Person(name){
//     this.name = name;
//     function add(){

//     }
// }

// const john = new Person("john");

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    currentAge(x){
        return x - this.age; 
    }

    set _name(name){
        this.name = name;
    }

    get _age(){
        return this.age;
    }

    static hello(){
        console.log("hello");
    }

}

// const john = new Person("john",25);
// console.log(john.age);
// console.log(john.currentAge(20));
// john._name = 'peter';
// console.log(john.name);
// console.log(john._age);

// Person.hello();

/////////////////////////////////////////// OOPS
// inheritance

class Employee extends Person{
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary;
    }

    // overriding
    currentAge(x){
        return x; 
    }

}

const emp = new Employee("zack",28,50000);

console.log(emp._age);
console.log(emp.currentAge(30));