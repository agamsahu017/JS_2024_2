console.log("closure");

let x = "myName";
function local() {
  console.log(x);
}

// local();

//WAP

// var addSix=createBase(6)
// addSix(10)  // 16
// addSix(21)   //27

function createBase(num) {
  return function (innerNum) {
    console.log(num + innerNum);
  };
}

// var addSix = createBase(6);
// addSix(10); // 16
// addSix(21);

//Time optimise

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   // console.log(a);

//   return function () {
//     console.log(a[index]);
//   };
// }

// const closure = find();

// console.time("6");
// closure(6); // this takes 37ms
// console.timeEnd("6");
// console.time("1200");
// closure(1200); // this takes 135ms
// console.timeEnd("1200");

//
// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }

//

// for (let i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }

//

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }
//   inner(i);
// }

//Private Variable

function counter() {
  var _counter = 0;

  function add(inc) {
    _counter += inc;
  }

  function retrieve() {
    return _counter;
  }
  return {
    add,
    retrieve,
  };
}
var c = counter();
c.add(14);
c.add(20);

console.log(c.retrieve());

//Module Pattern

// var Module = (function () {
//   function privateMethod() {
//     //do something
//     console.log("private");
//   }

//   return
//   {
//     publicMethod: function() {
//       //can call private method or private variable
//       console.log("public");
//     }
//   }
// })();

// Module.publicMethod();
// Module.privateMethod();

//////////////


var Module = (function() {
  function privateMethod() {
      // do something
      console.log("private");
  }

  return {
      publicMethod: function() {
          // can call privateMethod();
          console.log("public");
          privateMethod()
      }
  };
})();
Module.publicMethod(); // works
// Module.privateMethod(); // Uncaught ReferenceError: privateMethod is not defined

// let view
// function likeTheVideo(){
//     view="Roadside Coder"
//     console.log( "Subscribe to", view)
// }
// likeTheVideo()
// likeTheVideo()
// likeTheVideo()

//currying

function f(a){
  return function (b){
    return a+b
  }
}

console.log(f(4)(5));

//Convert sum(2,6,1) to sum(2)(6)(1)

// function sum(a){
//   return function(b){
//     return function (c){
//       return a+b+c
//     }
//   }
// }
// console.log(sum(3)(9)(12));

// ///////////////////

// function evaluate(operation){
//   return function(a){
//     return function(b){
//       if(operation === "sum") return a+b
//       else if(operation === "subtration") return a-b
//       else if(operation === "division") return a/b
//       else if(operation === "multiplication") return a*b
//       else return "invalid operation"
//     }
//   }
// }

// console.log(evaluate("sum"));

// const mul= evaluate("multiplication")
// const sub= evaluate("subtration")

// console.log(mul(8)(9));
// console.log(mul(5)(6));

// console.log(sub(5)(6));

//Infinte currying

/*Straightforward and time-taking solution*/
const sum = function(a) {
  return function(b) {
      return function(c) {
          return function(d) {
              // ...
              // ...
              // ...
              return a + b + c + d + "..."+ n;
          }
      }
  }
}

function add(a){
 return function (b){
  if(b) return add(a+b)
  return a
 }
}
console.log(add(3)(7)(15)(8)());