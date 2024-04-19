console.log("hi agam");

// this.agam = 5;
// console.log(this);
// // function getParam(){
// //     console.log(this.agam);
// // }

// // const getParam = () => {
// //   console.log(this.agam);
// // };

// // getParam();

// let user = {
//   name: "Piyush",
//   age: 24,
//   getDetails() {
//     console.log(this); //Piyush
//   },
// };
// user.getDetails();

// let userTwo = {
//   name: "Piyush",
//   age: 24,
//   childObj: {
//     newName: "Roadside Coder",
//     getDetails() {
//       console.log(this.newName, "and", this.name);
//     },
//   },
// };
// userTwo.childObj.getDetails();

// let userThree = {
//   name: "Piyush",
//   age: 24,
//   getDetails: () => {
//     console.log(this.name);
//   },
// };
// userThree.getDetails();

// let userFour = {
//   name: "Piyush",
//   age: 24,
//   getDetails() {
//     const nestedArrow = () => console.log(this.name); //Piyush
//     nestedArrow();
//   },
// };
// userFour.getDetails();

// /////////////

// class userFive {
//   constructor(n) {
//     this.name = n;
//   }
//   getName() {
//     console.log(this.name);
//   }
// }

// const User = new userFive("Agam Sahu 22"); // => This will generate a user object from the above class
// User.getName();
///////////////////////

// const userSix = {
//   firstName: "Piyush!",
//   getName() {
//     const firstName = "Jen!";
//     return this.firstName;
//   },
// };
// console.log(userSix.getName()); // What is logged?

// ///////////////////////////

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     },
//   };
// }

// let userSeven = makeUser();

// console.log(userSeven.ref().name); // What's the result?

//

// const userEight = {
//   name: "Sanjay",
//   logMessage() {
//     console.log(this.name);
//   },
// };
// setTimeout(function () {
//   userEight.logMessage();
// }, 1000);

///////////

// const userNine = {
//   name: "Piyush",
//   greet() {
//     return `Hello, ${this.name}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.name}!`;
//   },
// };

// console.log(userNine.greet());
// console.log(userNine.farewell());

////////////////////

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

//Promises

// console.log("start");

// setTimeout(() => {
//   console.log("inside timeout");
// }, 0);

// console.log("end");

// console.log("start");

// function impAction(username, cb) {
//   setTimeout(() => {
//     cb(`Subscribe to ${username}`);
//   }, 3000);
// }

// function likeTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Like the ${video} videos`);
//   }, 0);
// }

// function shareTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`share the ${video} videos`);
//   }, 0);
// }

//  impAction("Aga Sahhu", function (message) {
//   console.log(message);
//   likeTheVideo("My home tour", function (action) {
//     console.log(action);
//   });
//   shareTheVideo("share home tour", function (action) {
//     console.log(action);
//   });

// });

// console.log("end");

console.log("start");

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = false;
//     if (result) resolve("i am subscribed");
//     else {
//       reject(new Error("Error: i am error"));
//     }
//   }, 0);
// });

// console.log(sub);

// sub
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// const sub2 = Promise.resolve("hi i am good");
// const sub3 = Promise.reject("something wrong");
// console.log(sub3);

// sub3.then((res) => console.log(res)).catch(err => console.log(err))
// // sub2.then((res)=> console.log(res))

console.log("start");

function impAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Subscribe to ${username}`);
    }, 300);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} videos`);
    }, 1500);
  });
}

function shareTheVideo(video, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${video} videos`);
    }, 1000);
  });
}
// impAction("Nimra")
//   .then((res) => {
//     console.log(res);
//     likeTheVideo("Lucknow-agra").then((res) => {
//       console.log(res);
//       shareTheVideo("video shared").then((res) => {
//         console.log(res);
//       });
//     });
//   })
//   .catch((err) => console.log("error ", err));

//Promise chaining

console.log("promise chaining");

// impAction("Nimra")
//   .then((res) => {
//     console.log(res);
//     return likeTheVideo("Lucknow-agra");
//   })
//   .then((res) => {
//     console.log(res);
//     return shareTheVideo("video shared");
//   })
//   .then((res) => {
//     console.log(res);
//   })

//   .catch((err) => console.log("error ", err));

// Promise Combinators

//P all ->fulfilled promises if any fail then complete fail

// console.log(
//   Promise.all([
//     impAction("Nimra"),
//     likeTheVideo("Lucknow-agra"),
//     shareTheVideo("video shared"),
//   ])
// );

// Promise.all([
//   impAction("Nimra"),
//   likeTheVideo("Lucknow-agra"),
//   shareTheVideo("video shared"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error: Promises failed ",err));

//Promise.race -> gives the first promise either fulfilled or rejected

// Promise.race([
//   impAction("Nimra"),
//   likeTheVideo("Lucknow-agra"),
//   shareTheVideo("video shared"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error: Promises failed ",err));

//Promise.allSettled -> it gives all array of fullfilledand rejected

// Promise.allSettled([
//   impAction("Nimra"),
//   likeTheVideo("Lucknow-agra"),
//   shareTheVideo("video shared"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error: Promises failed ",err));

// Promise.any([
//   impAction("Nimra"),
//   likeTheVideo("Lucknow-agra"),
//   shareTheVideo("video shared"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error: Promises failed ",err));

const result = async () => {
  try {
    const message1 = await impAction("Nimra");
    const message2 = await likeTheVideo("Lucknow-agra");
    const message3 = await shareTheVideo("video shared");

    console.log({ message1, message2, message3 });
  } catch (error) {
    console.log("Promise failed ERROR: ", error);
  }
};
result();
console.log("end");
