"use strict";

console.log("Akshay");
console.log(this); // refers to global object i.e. window in case of browser
// 💡 global object differs based on runtime environment,
function x() {
    // the below value depends on strict/non-strict mode
    console.log(this);
    // in strict mode - undefined
    // in non-strict mode - refers to global window object
}
x();
// 💡 Notes:

// On the first go feels like `this` keyword in global space and inside function behaves same but in reality it's different.

// The moment you make JS run in strict mode by using: "use strict" at the top, `this` keyword inside function returns `undefined` whereas global space will still refers to global window object

//

// `x` key below is a method as per terminology
const obj = {
    a: 10,
    x: function () {
        console.log(this); // {a: 10, x: f()}
        console.log(this.a); // 10
    }
}
obj.x(); // value of `this` is referring to current object i.e. `obj`

const student = {
    name: 'Alok',
    printName: function () {
        console.log(this.name);
    }
}
student.printName(); // Alok

const student2 = {
    name: 'Kajal',
}
// student2.printName(); // throw error

// ❓ how to re-use printName method from `student` object
student.printName.call(student2); // Kajal
// Above `call` method is taking the value of `this` keyword
// So, Inside `printName` method value of `this` is now `student2` object

// So, call, bind and apply is used to set the value of this keyword.

const objDemo = {
    a: 10,
    x: () => {
        console.log(this); // window object
        // Above the value of `this` won't be obj anymore instead it will be enclosing lexical context i.e. window object in current scenario.
    }
}
objDemo.x();

const obj2 = {
    a: 10,
    x: function () {
        const y = () => {
            console.log(this.a);
            // Above the value of `this` will be obj2 as function y's enclosing lexical context is function `x`.
        };
        y();
    }
}
obj2.x();

//Higher Order Function

function x() {
    console.log("Hi");
};
function y(x) {
    x();
};
y(x); // Hi
// y is a higher order function
// x is a callback function

const radius = [1, 2, 3, 4];
const calculateArea = function(radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    } 
    return output;
}
console.log(calculateArea(radius));

// const radius = [1, 2, 3, 4];
const calculateCircumference = function(radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    } 
    return output;
}
console.log(calculateCircumference(radius));

const radiusArr = [1, 2, 3, 4];

// logic to calculate area
const area = function (radius) {
    return Math.PI * radius * radius;
}

// logic to calculate circumference
const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const calculate = function(radiusArr, operation) {
    const output = [];
    for (let i = 0; i < radiusArr.length; i++) {
        output.push(operation(radiusArr[i]));
    } 
    return output;
}
console.log(calculate(radiusArr, area));
console.log(calculate(radiusArr, circumference));
// Over here calculate is HOF
// Over here we have extracted logic into separate functions. This is the beauty of functional programming.

// Polyfill of map
// // Over here calculate is nothing but polyfill of map function
// // console.log(radiusArr.map(area)) == console.log(calculate(radiusArr, area));

// ***************************************************
// Lets convert above calculate function as map function and try to use. So,

// Array.prototype.calculate = function(operation) {
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//         output.push(operation(this[i]));
//     } 
//     return output;
// }
// console.log(radiusArr.calculate(area))