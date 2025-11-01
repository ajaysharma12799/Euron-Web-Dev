// console.log("Hello World!");
// console.log(12345);
// console.log(["Ajay", "Sharma", 29]);
// console.log(null);

// Variables and Data Types

/**
 *
 * Variable - Container to hold value
 * 1. var (Keyword)
 * 2. let (Keyword)
 * 3. const (Keyword)
 */

// LHS = RHS
// LHS -> variable ka name
// RHS -> Value your variable will hold
// var age = 29.5;
// var age = "Ajay Sharma";

// {
//   var age = "Ajay Sharma";
// }

// let name = "ujjawal";
// name = "ajaysharma12";

// {
//   let name1 = "Imran";
//   console.log("name1 inside block scope: ", name1);
// }

// console.log("name1: ", name1);

// const PI = 3.14;

// console.log("Age: ", age);
// console.info("Name: ", name);
// console.error("PI Value: ", pi);
// console.warn("I am console.warning");

// Scope -> Area in which variable can be accessed
// 3 type of scopes

// 1. Global Scope - var
// 2. Block Scope - const and let
// 3. Function Scope

/**
 *
 * Data Types - Type associated with value present inside variable
 *
 * 1. Primitive -> That holds value
 * 2. Non-Primitive -> Which hold references/address
 *
 *
 * string -> '' or ""
 * boolean -> true or false
 * number -> integer or decimal/floating points
 * null -> variable ka value exist hi nahi karta hai
 * undefined -> variable ka value exist karta hai but vo empty hai
 * object -> collection of information of a known entity
 * array -> list of documents/value of different type
 *
 */

// let age = 25;
// let fullname = "Ajay Sharma";
// let nameInitial = "A";
// let isabove18 = false;
// let nullTesting = null;
// let undefinedTesting = undefined;
// let person = { username: "ajaysharma12", age: 29, designation: "SWE" };
// let randomNumbers = [3, 6, 1, 2, 9, 8, 0, fullname, nameInitial, person];

// console.log(age, typeof age);
// console.log(fullname, typeof fullname);
// console.log(nameInitial, typeof nameInitial);
// console.log(isabove18, typeof isabove18);
// console.log(nullTesting, typeof nullTesting);
// console.log(undefinedTesting, typeof undefinedTesting);
// console.log(person, typeof person);
// console.log(randomNumbers, typeof randomNumbers, typeof typeof randomNumbers);

// Operators
/**
 *
 * There are 2 type of operators
 * a. Which deals with 2 operands ()
 * b. Which deals with single value (Unary Operator) -> Unary operator can be used in 2 different types/position [Pre-fix and Post-fix]
 * 1. Arthimatic Operator
 * 2. Comparasion Operator
 * 3. Logical Operator
 *
 */

// 1. Arithematic Operator
console.log(1 + 1);
console.log(0 - 1);
console.log(15 * 6);
console.log(30 / 5);
console.log(5 ** 5);

// Unary Operator
let x = 5;
let result = x++;
console.log("result: ", result, x);
