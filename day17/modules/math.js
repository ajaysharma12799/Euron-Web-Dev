// export const add = (num1, num2) => num1 + num2;
// export const subtract = (num1, num2) => num1 - num2;
// export const multiply = (num1, num2) => num1 * num2;
// export const divide = (num1, num2) => {
//   if (num2 === 0) {
//     throw new Error("Cannot divide by zero");
//   }
//   return num1 / num2;
// };

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return num1 / num2;
};

const PI = 3.14;

export { add, subtract, multiply, divide };

export default PI;

// General Export
// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide,
// };
