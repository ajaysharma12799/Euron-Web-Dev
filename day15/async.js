console.log("Welcome to Async JS");

/**
 *
 * What is difference between Synchronous and Asynchronous JavaScript?
 *
 */

// Sync Blocking Code
// console.log("Start");

function wait() {
  for (let i = 0; i < 10000000000000000000000000000; i++) {
    console.log("Value of i: ", i);
  }
}

// wait();

// console.log("End");

// Async JS ka jitna bhi code hai vo background mai execute hoga
// Async Functions will be handles by bowrser/Web API's

// Async Non-Blocking Code

// console.log("First");

// setTimeout(() => {
//   console.log("I completed my work after 5 seconds");
// }, 5000); // 5s

// console.log("Last");

// Timer Related API's which are setTimeout and setInterval
let timeout = setTimeout(() => {
  console.log("setTimeout Timer Related API");
}, 5000);

clearTimeout(timeout);

let interval = setInterval(() => {
  console.log("setInterval Timer Related API");
}, 1000);

clearInterval(interval);

let studentName = "Imran";

// Callbacks
function greet(name, callbackFn) {
  console.log(`Hello ${name}, How are You`);
  callbackFn();
}

greet(studentName, function () {
  document.getElementById("student-name").innerText = studentName;
});

// Callback Hell
// setTimeout(() => {
//   console.log("1st Work Done");
//   setTimeout(() => {
//     console.log("2nd Work Done");
//     setTimeout(() => {
//       console.log("3rd Work Done");
//       setTimeout(() => {
//         console.log("4th Work Done");
//         setTimeout(() => {
//           console.log("5th Work Done");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promises - Ek object hai jo future mai value dega
// Meri sirf 3 states hoti hai - Pending, fullfilled(resolved), rejected
// 2 ways of handling promise - then-catch-finally and async-await

// getDate - jiska purpose hoga to return some data after 5 seconds
// function getData(success) {
//   const futurePromiseObject = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve("Data received successfully");
//       } else {
//         reject("Some error occured while fetching data");
//       }
//     }, 5000);
//   });

//   futurePromiseObject
//     .then((data) => {
//       console.log(data);
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("Finally block will always execute");
//     });
// }

// getData(true);

function getData(success) {
  const futurePromiseObject = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data received successfully");
      } else {
        reject("Some error occured while fetching data");
      }
    }, 5000);
  });

  return futurePromiseObject;
}

async function fetchData() {
  const data = await getData(true);
  console.log(data);
}

fetchData();
