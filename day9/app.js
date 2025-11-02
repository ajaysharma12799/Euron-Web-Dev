/**
 *
 * Unary Operator
 * 1. Prefix
 * 2. Postfix
 *
 * 2 type of operator
 * 1. Increment ( ++ )
 * 2. Decrement ( -- )
 *
 */

let x = 5;
let result1 = ++x;

let y = 10;
let result2 = y--;

// console.log("result 1: ", result1);
// console.log("result 2: ", result2);

/**
 *
 * Comparasion Operator
 *
 */

const num1 = 5;
const num2 = "5";

// console.log("== -> ", num1 == num2);
// console.log("=== -> ", num1 === num2);
// console.log("> -> ", num1 > num2);
// console.log(">= -> ", num1 >= num2);
// console.log("< -> ", num1 < num2);
// console.log("<= -> ", num1 <= num2);
// console.log("!= -> ", num1 != num2);

const person = { name: "Sohan", email: "soham@gmail.com" };
const user = { name: "Sohan", email: "soham@gmail.com" };
// re-initilize or mutate

// console.log("Compare b/w User and Person: ", person == user);
// console.log("Compare b/w User and Person: ", person === user);
// console.log("[] == [] -> ", [] == []);
// console.log("null == null -> ", null == null);

/**
 *
 * Logical Operator
 *
 * 1. AND -> (&&)
 * 2. OR -> ( || )
 * 3. NOT -> ( ! )
 *
 */

const num3 = true;
const num4 = false;

// console.log("AND (&&) -> ", num3 && num4);
// console.log("OR (||) -> ", num3 || num4);
// console.log("NOT (!) -> ", !num3, !num4);

/**
 *
 * Conditional Statements
 * 1. if statement
 * 2. if-else statement
 * 3. if-else-if-else statement
 * 4. switch statement
 *
 */

// if statement
const age = 20;
// if (age >= 18) {
//   console.log("You are above 18 so go and give your vote");
// }

// if-else statement
const marks = 45;
// if (marks >= 49.5) {
//   console.log("Congrats, you are above middle");
// } else {
//   console.error("Sorry, Please prepare for next time");
// }

// if-else-if-else statement
const score = 68;
// if (score >= 85) {
//   console.log("Grade A");
// } else if (score >= 65) {
//   console.log("Grade B");
// } else if (score >= 55) {
//   console.log("Grade C");
// } else {
//   console.log("Fail");
// }

// if (score >= 85) {
//   console.log("Grade A");
// } else if (score >= 65 && score <= 84.5) {
//   console.log("Grade Mis");
// } else {
//   console.log("Fail");
// }

// switch statement
// const day = "monday";
// switch (day) {
//   case "monday":
//     console.log("Monday");
//     break;
//   case "tuesday":
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("You missed something");
// }

// const day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("You missed something");
// }

/**
 *
 * Loops
 * 1. for
 * 2. while
 * 3. do-while
 *
 */

// for loops
// for (let i = 1; i <= 5; i++) {
//   console.log("Value of i : ", i);
// }

// while loop
// let j = 1;
// while (j <= 5) {
//   console.log("Value of j : ", j);
//   j++;
// }

// do-while loop
// let k = 1;
// do {
//   console.log("Value of k : ", k);
//   k++;
// } while (k >= 5);

/**
 *
 * Type conversion and choersion
 *
 */

// Type conversion
// let numberValue = 12345;
// let numberString = String(numberValue);

// console.log(
//   "Result: ",
//   numberValue,
//   typeof numberValue,
//   numberString,
//   typeof numberString
// );

// let numberString = "12345";
// let numberValue = Number(numberString);

// console.log(
//   "Result: ",
//   numberValue,
//   typeof numberValue,
//   numberString,
//   typeof numberString
// );

// let booleanStringValue = "false";
// let booleanValue = Boolean(booleanStringValue);

// console.log(
//   "Result: ",
//   booleanStringValue,
//   typeof booleanStringValue,
//   booleanValue,
//   typeof booleanValue
// );

// Cohersion
let number1 = 5;
let number2 = "10";

console.log("Addition Result: ", number1 + number2);
console.log("Subtract Result: ", number1 - number2);
console.log("Multiply Result: ", number1 * number2);
console.log("Divide Result: ", number1 / number2);

console.log("true + 1 -> ", true + 1);
console.log("false + 1 -> ", false + 1);
console.log("null + 1 -> ", null + 1);
console.log("undefined + 1 -> ", undefined + 1); // -> NaN (Not a Number)
