/**
 * Day 11: JavaScript Objects and Advanced Concepts
 * Topics covered:
 * - Objects and their properties
 * - Object methods (normal vs arrow functions)
 * - The 'this' keyword behavior
 * - Object manipulation (add, update, delete)
 * - Built-in Math object and methods
 * - Destructuring (arrays and objects)
 * - Default parameters
 * - Rest and Spread operators
 */

console.log("Hello World from Day 11");

// =============================================================================
// 1. OBJECT CREATION AND METHODS
// =============================================================================

/**
 * Sample student object demonstrating:
 * - Object properties
 * - Normal function method (has access to 'this')
 * - Arrow function method (does NOT have access to 'this')
 */
const euronStudent = {
  id: 1,
  name: "Imran",
  age: 24,
  courseName: "Full Stack Web Development",
  orgLocation: "Indra Nagar, Bangalore",

  /**
   * Normal function - 'this' refers to the euronStudent object
   */
  getUserInformationInNormalFunction: function () {
    console.log("this keyword inside euronStudent Object: ", this);
    console.log(
      `[Normal Function] - My name is ${this.name} and I am studying ${this.courseName}`
    );
  },

  /**
   * Arrow function - 'this' refers to the global/window object
   * Arrow functions don't have their own 'this' context
   */
  getUserInformationInArrowFunction: () => {
    console.log(
      `[Arrow Function] - My name is ${this.name} and I am studying ${this.courseName}`
    );
  },
};

// =============================================================================
// 2. ACCESSING OBJECT PROPERTIES
// =============================================================================

/**
 * Two ways to access object properties:
 * 1. Dot notation: object.property
 * 2. Bracket notation: object["property"]
 */
// console.log("euronStudent.name:", euronStudent.name); // Dot notation
// console.log("euronStudent.courseName:", euronStudent.courseName);
// console.log("euronStudent.id:", euronStudent["id"]); // Bracket notation
// console.log("euronStudent.age:", euronStudent["age"]);

// =============================================================================
// 3. LOOPING THROUGH OBJECTS
// =============================================================================

/**
 * Object.keys() returns an array of object's keys
 */
// const euronStudentKeys = Object.keys(euronStudent);
// console.log("euronStudentKeys:", euronStudentKeys);

/**
 * Iterate through object keys using forEach
 */
// euronStudentKeys.forEach((key) => {
//   console.log(`Key: ${key}, Value: ${euronStudent[key]}`);
// });

// =============================================================================
// 4. OBJECT MANIPULATION (Add, Update, Delete)
// =============================================================================

/**
 * Adding new properties to an object
 */
// euronStudent.courseStartDate = "20th Sept, 2025";
// euronStudent["classDuration"] = "4 classes per week of 2.5 to 3 hours";
// euronStudent.hashedPassword = 12345;

/**
 * Updating existing properties
 */
// euronStudent.name = "Rahul Pandey";
// euronStudent["age"] = 29;

/**
 * Deleting properties from an object
 */
// delete euronStudent.hashedPassword;

// console.log("Euron Student Object: ", euronStudent);

// =============================================================================
// 5. FOR-IN AND FOR-OF LOOPS
// =============================================================================

/**
 * for-in loop: Works on objects
 * Iterates over enumerable properties (keys)
 */
// for (let key in euronStudent) {
//   console.log(`Key: ${key}, Value: ${euronStudent[key]}`);
// }

/**
 * for-of loop: Works on arrays and iterables
 * Iterates over values
 */
// for (let value of euronStudentKeys) {
//   console.log("euronStudentKeys Value: ", value);
// }

/**
 * Call object methods to demonstrate 'this' keyword behavior
 */
// euronStudent.getUserInformationInNormalFunction();
// euronStudent.getUserInformationInArrowFunction();

// =============================================================================
// 6. BUILT-IN MATH OBJECT
// =============================================================================

/**
 * Math object provides mathematical constants and functions
 */
// console.log(Math.PI); // π (pi) constant: 3.141592653589793
// console.log(Math.SQRT2); // Square root of 2: 1.4142135623730951
// console.log(Math.random()); // Random number between 0 and 1
// console.log(Math.floor(4.3)); // Round down: 4
// console.log(Math.round(4.7)); // Round to nearest integer: 5
// console.log(Math.pow(2, 5)); // 2 to the power of 5: 32
// console.log(Math.min(50, 23, 99, 599, 5)); // Minimum value: 5
// console.log(Math.max(50, 23, 99, 599, 5)); // Maximum value: 599

// =============================================================================
// 7. NaN (Not a Number)
// =============================================================================

/**
 * NaN represents a value that is not a legal number
 * Results from invalid mathematical operations
 */
// console.log(NaN);
// console.log("Ujjawal" / 5); // NaN - can't divide string by number
// console.log("Is NaN: ", Number.isNaN("Ujjawal" / 5)); // true
// console.log("Is NaN: ", Number.isNaN("Ujjawal")); // false (it's a string, not NaN)

// =============================================================================
// 8. INFINITY
// =============================================================================

/**
 * Infinity represents positive/negative infinite values
 * Results from division by zero
 */
// console.log(Infinity); // Positive infinity
// console.log(-Infinity); // Negative infinity
// console.log("Positive Infinity: ", 5 / 0); // Infinity
// console.log("Negative Infinity: ", -5 / 0); // -Infinity
// console.log("typeof Infinity: ", typeof Infinity); // "number"

// =============================================================================
// 9. TYPE CONVERSION (parseInt and parseFloat)
// =============================================================================

/**
 * Convert strings to numbers
 * parseInt: Converts to integer
 * parseFloat: Converts to floating-point number
 */
const numberInString = "105";
const nameString = "Rahul and Imran";
// console.log(parseInt(numberInString)); // 105
// console.log(parseFloat(numberInString)); // 105.0
// console.log(parseInt(nameString)); // NaN (can't convert non-numeric string)

// =============================================================================
// 10. DESTRUCTURING
// =============================================================================

/**
 * Destructuring allows unpacking values from arrays or properties from objects
 */

/**
 * Array Destructuring
 * Can skip elements using empty commas
 */
const names = ["Ajay", "Tanu", "Rahul", "Priya", "Neha"];
const [a, , c] = names; // Skips second element (Tanu)
// console.log(a, c); // Output: "Ajay" "Rahul"

/**
 * Object Destructuring
 * Can rename variables using colon syntax
 */
const { name: username, courseName } = euronStudent;
// console.log(username, courseName); // "Imran" "Full Stack Web Development"

// =============================================================================
// 11. DEFAULT PARAMETERS
// =============================================================================

/**
 * Default parameters provide fallback values when arguments are not passed
 */
function greet(username = "Default Username") {
  console.log(`Hello ${username}`);
}

greet("Imran Ali"); // Output: "Hello Imran Ali"
greet(); // Output: "Hello Default Username"

// =============================================================================
// 12. SPREAD AND REST OPERATORS (...)
// =============================================================================

/**
 * Spread Operator: Expands an iterable into individual elements
 * Used to copy/merge arrays and objects
 */
// console.log("Names Expanded using Spread Operator: ", ...names);
// Spread operator on arrays expands elements: "Ajay" "Tanu" "Rahul" "Priya" "Neha"

/**
 * Spread on Objects: Creates a shallow copy and adds new properties
 */
const euronStudentOptimized = { ...euronStudent, isEmailVerifiedOrNot: false };
// console.log(euronStudentOptimized);

/**
 * Merging multiple objects using spread
 */
// const obj1 = { username: "abc", hashedPassword: "as12dgd345" };
// const obj2 = { emailVerifiedOrNot: false, phoneVerifiedNorNot: true };
// const userSettingObject = { ...obj1, ...obj2 };
// console.log(userSettingObject);

/**
 * Rest Operator: Collects multiple arguments into an array
 * Must be the last parameter in function definition
 */
// function sum(price, ...sumValues) {
//   console.log(price, sumValues); // First param, then array of rest
//   const res = sumValues.reduce((prev, curr) => prev + curr, 0);
//   console.log(res);
// }
// sum(599, 1, 2, 7, 5, 4, 6); // price=599, sumValues=[1,2,7,5,4,6]
