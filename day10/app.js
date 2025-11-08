/**
 * ======================================================
 * 🔥 Day 10 - JavaScript Core Concepts 🔥
 * ======================================================
 * 📘 Today’s Agenda:
 * 1️⃣ Functions - Normal & Arrow
 * 2️⃣ Strings & String Methods
 * 3️⃣ Arrays & Array Methods
 * 4️⃣ Objects
 * ======================================================
 */

console.log("Hello from Day 10");

/* ======================================================
   🧩 1. FUNCTIONS
   ======================================================
   👉 Functions are reusable blocks of code that perform
      a specific task. They help avoid repetition.
   ------------------------------------------------------
   💡 Two common types:
      1. Normal (Function Declaration)
      2. Arrow Function (ES6 Feature)
   ====================================================== */

// --- Function Declaration ---
function greet() {
  console.log("Hello, I am greeting you!");
}
greet(); // Function Invocation

// --- Function with Parameters and Arguments ---
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Number is Even");
  } else {
    console.log("Number is Odd");
  }
}
isEvenOrOdd(10);

// --- Example: Checking if user exists ---
function checkValidUser(email) {
  const emails = [
    "ajay@gmail.com",
    "imran@gmail.com",
    "ujjawal@outlook.com",
    "test@test.com",
  ];

  if (emails.includes(email)) {
    console.log("✅ User Present hai");
    return true;
  } else {
    console.log("❌ User does not exist");
    return false;
  }
}

const userExistOrNot = checkValidUser("abc@gmail.com");
console.log("userExistOrNot:", userExistOrNot);

// --- Arrow Function ---
const checkEvenOrOddArrow = (number) => {
  return number % 2 === 0 ? "Even" : "Odd";
};

const calculateSquare = (num) => num * num;

console.log("checkEvenOrOddArrow:", checkEvenOrOddArrow(11));
console.log("calculateSquare:", calculateSquare(5));

/**
 * 📘 Difference:
 * - Normal functions have their own 'this' context.
 * - Arrow functions do not have their own 'this';
 *   they inherit from the parent scope.
 */

// --- Function vs Block Scope Example ---
function testScope() {
  var x = 5; // Function-scoped
  if (true) {
    var y = 10; // Function-scoped
    let z = 20; // Block-scoped

    console.log("----- Inside Block Scope -----");
    console.log("Value of X:", x);
    console.log("Value of Y:", y);
    console.log("Value of Z:", z);
    console.log("-------------------------------");
  }

  console.log("----- Inside Function Scope -----");
  console.log("Value of X:", x);
  console.log("Value of Y:", y);
  // console.log("Value of Z:", z); ❌ Error - z is block-scoped
  console.log("---------------------------------");
}

testScope();

/* ======================================================
   🧵 2. STRINGS
   ======================================================
   👉 Strings are sequences of characters.
   👉 Strings in JS are immutable.
   👉 Can be created using '', "", or `` (Template Literals)
   ====================================================== */

let nameInitial = "a";
let str = "Hello World";
let templateLiteralString = `Hello My Name is Ajay Sharma`;

// --- String Interpolation Example ---
const name = "Imran";
const age = 24;
const email = "imran.ali@gmail.com";
const workDesignation = "SWE Intern";
const bootcampName = "Euron Full Stack Course";

const imranFullDetails =
  "Hi My name is " +
  name +
  " and my age is " +
  age +
  " and my email is " +
  email +
  ". I work as " +
  workDesignation +
  " and I have done my full stack course from " +
  bootcampName;

const imranFullDetailsViaTemplateLiterals = `
Hi My name is ${name}, my age is ${age} and my email is ${email}.
I work as ${workDesignation} and I have done my full stack course from ${bootcampName}.
`;

console.log(imranFullDetailsViaTemplateLiterals);

// --- String Helper Methods ---
console.log("Length:", imranFullDetailsViaTemplateLiterals.length);
console.log("Uppercase:", imranFullDetailsViaTemplateLiterals.toUpperCase());
console.log("Lowercase:", imranFullDetailsViaTemplateLiterals.toLowerCase());
console.log("Trim:", imranFullDetailsViaTemplateLiterals.trim());
console.log(
  "Replace:",
  imranFullDetailsViaTemplateLiterals.replace("Imran", "Imran Ali")
);
console.log("Split:", imranFullDetailsViaTemplateLiterals.split(" "));

/**
 * 💡 Note:
 * Even though string behaves like an object (having methods),
 * it's actually a **primitive type**.
 * JS automatically wraps it using `String` object temporarily.
 */

let testString = "Ajay Sharma";
let testStringObject = new String(testString);

console.log("testString:", testString, typeof testString); // string
console.log("testStringObject:", testStringObject, typeof testStringObject); // object

/* ======================================================
   🧮 3. ARRAYS
   ======================================================
   👉 Arrays store multiple values in a single variable.
   👉 Can hold mixed data types.
   👉 Commonly used methods:
      - push(), pop(), shift(), unshift()
      - concat(), forEach(), map(), filter(), reduce()
      - find(), findIndex()
   ====================================================== */

let fruits = ["mango", "orange", "banana", "pine"];
let randomNumbers = [1, 6, 3, 5, 8, 5, 3];

// --- Modifying Arrays ---
fruits.push("Chikku"); // add at end
fruits.unshift("Tomato"); // add at start
fruits.pop(); // remove last
fruits.shift(); // remove first

const concatedArray = fruits.concat(randomNumbers);
console.log("Concated Array:", concatedArray);

// --- find() & findIndex() Example ---
const todos = [
  { id: 1, title: "delectus aut autem", completed: false },
  { id: 2, title: "quis ut nam facilis et officia qui", completed: false },
  { id: 3, title: "fugiat veniam minus", completed: false },
  { id: 4, title: "et porro tempora", completed: true },
];

const foundElement = todos.find((todo) => todo.id === 4);
const foundElementIndex = todos.findIndex((todo) => todo.id === 4);

console.log("Found Element:", foundElement);
console.log("Found Element Index:", foundElementIndex);

// --- Reverse String Example ---
const nonReversedString = "hello my name is bugs bunny";
const reversedString = nonReversedString.split(" ").reverse().join(" ");
console.log("Reversed String:", reversedString);

/* ======================================================
   🔍 3.1. Array Higher Order Functions
   ======================================================
   - filter()
   - map()
   - reduce()
   ====================================================== */

const users = [
  { id: 1, name: "Ajay", age: 25, city: "Delhi" },
  { id: 2, name: "Neha", age: 30, city: "Mumbai" },
  { id: 3, name: "Rohan", age: 22, city: "Pune" },
  { id: 4, name: "Priya", age: 28, city: "Bangalore" },
  { id: 5, name: "Amit", age: 35, city: "Delhi" },
];

// --- filter() Example ---
const delhiUsers = users.filter((user) => user.city === "Delhi");
console.log("Users from Delhi:", delhiUsers);

// --- map() Example ---
const mappedUser = users.map((user) => ({
  ...user,
  isVerifiedOrNot: false,
}));
console.log("Mapped Users:", mappedUser);

// --- reduce() Example ---
const products = [
  { id: 1, name: "Laptop", price: 65000 },
  { id: 2, name: "Mouse", price: 1200 },
  { id: 3, name: "Keyboard", price: 2500 },
  { id: 4, name: "Monitor", price: 15000 },
];

const cartTotal = products.reduce(
  (accumulator, currentProduct) => accumulator + currentProduct.price,
  0
);
console.log("Cart Total:", cartTotal);

/* ======================================================
   🧱 4. OBJECTS
   ======================================================
   👉 Objects store data in key-value pairs.
   👉 Each key is a property, and value can be any type.
   👉 Can access values using:
       - Dot notation (obj.key)
       - Bracket notation (obj["key"])
   ====================================================== */

const euronStudent = {
  id: 1,
  name: "Imran",
  age: 24,
  courseName: "Full Stack Web Development",
  orgLocation: "Indra Nagar, Bangalore",
};

// --- Accessing Values ---
console.log("euronStudent.name:", euronStudent.name); // Dot notation
console.log("euronStudent.courseName:", euronStudent.courseName);
console.log("euronStudent.id:", euronStudent["id"]); // Bracket notation
console.log("euronStudent.age:", euronStudent["age"]);

// --- Looping through Object Keys ---
const euronStudentKeys = Object.keys(euronStudent);
console.log("euronStudentKeys:", euronStudentKeys);

euronStudentKeys.forEach((key) => {
  console.log(`Key: ${key}, Value: ${euronStudent[key]}`);
});

/**
 * ======================================================
 * 🏁 Summary:
 * ------------------------------------------------------
 * ✅ Functions help in code reuse.
 * ✅ Strings offer many helper methods.
 * ✅ Arrays are powerful with map(), filter(), reduce().
 * ✅ Objects store structured data in key-value form.
 * ======================================================
 */
