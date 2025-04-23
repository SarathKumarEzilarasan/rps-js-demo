// function display(){
//     console.log("hi");
// }

// display();

function add(i,j = 20){
    return i+j;
}

// console.log(add(10,20));
// console.log(add(10));
// console.log(add);

// let display = add;

// console.log(display());

// let display = function (i,j = 20){
//     return i+j;
// }

// console.log(display(10,20));

let display = (i,j = 20) => i+j;
