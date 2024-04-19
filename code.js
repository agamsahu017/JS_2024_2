// // // console.log("hi agam how are you??");

// // const arr = [3, 5, 6, 7];

// // const total = arr.reduce((acc, curr, i) => {
// //   return acc + curr + i;
// // }, 0);

// // // console.log(total);
// // //3+0 , 3+5+1, 9+6+2, 17+7+3 =27

// // //MapResult

// // const MapResult = arr.map((num) => {
// //   return num * 3;
// // });

// // // const forEachResult= arr.forEach((num)=>{
// // //     return num*3
// // // })

// // const forEachResult = arr.forEach((num, i) => {
// //   arr[i] = num * 5;
// // });

// // console.log(arr);
// // console.log(MapResult);
// // console.log(forEachResult);

// // let students = [
// //   { name: "Alice", rollNo: 1, marks: 85 },
// //   { name: "Bob", rollNo: 2, marks: 76 },
// //   { name: "Charlie", rollNo: 3, marks: 92 },
// //   { name: "David", rollNo: 4, marks: 49 },
// //   { name: "Eve", rollNo: 5, marks: 38 },
// //   { name: "Frank", rollNo: 6, marks: 90 },

// //   { name: "Grace", rollNo: 7, marks: 84 },
// //   { name: "Henry", rollNo: 8, marks: 81 },
// //   { name: "Ivy", rollNo: 9, marks: 89 },
// //   { name: "Jack", rollNo: 10, marks: 79 },
// // ];



// // //Retutn names of students with more than 80

// // const result3 = students
// //   .map((num) => {
// //     if (num.marks < 50) {
// //       num.marks += 20;
// //     }
// //     return num;
// //   })
// //   .filter((n) => n.marks > 70)
// //   .reduce((acc, cur) => {
// //     return acc + cur;
// //   }, 0);

// // console.log("58 ", result3);

// // const filteredNames = students
// //   .filter((stu) => stu.marks > 80)
// //   .map((n) => n.name);

// // console.log("54 ", filteredNames);

// // //Sum of all marks

// // const sumOfNum = students.reduce((acc, curr) => {
// //   return acc + curr.marks;
// // }, 0);

// // console.log(sumOfNum);

// // //Return only names in Capital

// // const result = students.map((stu) => stu.name.toUpperCase());

// // console.log(result);

// // //For Loop

// // let names = [];

// // for (let i = 0; i < students.length; i++) {
// //   names.push(students[i].name.toUpperCase());
// // }
// // console.log(names);

// // //more than 80

// // const highMarks = students.filter((num) => num.marks > 86);

// // console.log(highMarks);

// // const highMarks2 = students.filter((num) => num.marks > 80 && num.rollNo <= 6);

// // console.log(highMarks2);

// function multiply(...x){
// console.log(x);
// }
// let a =[8,9]
// multiply(...a)

// //callbac function

// function greeting(x){
// console.log("i am ", x);
// }
// function processInputUser(cb){
//   var name= prompt("please enter your name")
//   cb(name)
// }

// processInputUser(greeting)

// //
// function fn(){
//   console.log(arguments);
// }
// fn(4,6,7)

// const property="firstname"
// const name="agam"

// const user={
//   [property]:name
// }
// console.log(user.firstname);

///////////////////////

// const object = { a: 1, b: 2, c: 3 };

// for (const key in object) {
//   console.log(object[key])
// }

//
// let nums = {
//   a: 100,
//   b: 200,
//   title: "my name",
// };
// multiplyByTwo(nums);
// function multiplyByTwo(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       // key = obj[key]*2
//       obj[key] *= 2;
//     }
//   }
//    return obj
// }
// console.log(nums);
// //
// const a={}

// const b={ key: "b"};
// const c= { key :"c"};

// a[b]=123;
// a[c]=456
// console.log(a[b]);

// console.log(a);

// ///

// console.log([...'Lydia']);

// //

// const shape = { radius: 10, diameter() { return this.radius * 2; }, perimeter: () => 2 * Math.PI * this.radius, };

// let user = { name: "Piyush", age: 24 };

// for (let key in user) {
//   console.log(user[key]);
// }

// const shape={
//   radius:10,
//   diameter(){
//     return this.radius*2
//   },
//   perimeter: ()=>2 *Math.PI*this.radius
// }
// console.log(shape.diameter());
// console.log(shape.perimeter());

// let userProfile = {
//   name: "Agam",
//   age: 24,
//   fullName: {
//     first: "Agamji",
//     last: "Sahu",
//   },
// };

// // const { name: MyName } = userProfile;
// const {
//   fullName: { first },
// } = userProfile;

// console.log(first);

// let c={
//   greeting:"Hey !"
// }
// let d;
// d=c;
// console.log(d);
//  c.greeting="Hello "
//  console.log(d.greeting)

// //

// console.log({a:1} == {a:1});
// console.log({a:1} === {a:1});

// let person = { name: 'Lydia' };
// const members = [person];
// person.name = null;

// console.log(members);

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

// let user = {
//   name: "Vijay",
//   age: 35,
// };

// // const objClone= Object.assign({}, user)
// // const objClone = JSON.parse(JSON.stringify(user));
// const objClone = { ...user}
// objClone.name="sanjay singh"

// console.log("252 ", objClone);

// console.log("254 ", user);

//

// function changeAgeAndReference(person) {
//   person.age = 25;
//   person = {
//     name: 'John',
//     age: 50
//   };

//   return person;
// }

// const personObj1 = {
//   name: 'Alex',
//   age: 30
// };

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1); // -> ?
// console.log(personObj2); // -> ?

// function createBase(num){
//   return function(innerNum){
// console.log(num+innerNum);
//   }
// }

// var addSix = createBase(6);
// addSix(10);// returns 16
// addSix(21);// returns 27

// 1

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i*i;
//   }

//   console.log(a[index]);
// }

// console.time("6");
// find(6); // this takes 37ms
// console.timeEnd("6");
// console.time("12");
// find(12); // this takes 135ms
// console.timeEnd("12");

// console.log("hiiiiiiiiiiiiii");
// //2

// function find2() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i*i;
//   }

//   return function(index){
//     console.log(a[index]);
//   }
// }

// const closure=find2()

// console.time("6");
// closure(6); // this takes 37ms
// console.timeEnd("6");
// console.time("12");
// closure(12); // this takes 135ms
// console.timeEnd("12");

 


for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
  inner(i)
}
