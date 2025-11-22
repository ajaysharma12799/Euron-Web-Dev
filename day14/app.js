/**
 * Day 14: Browser APIs, Storage, and Error Handling
 *
 * Topics covered:
 * - Browser BOM (Browser Object Model) APIs
 * - Window object properties
 * - Navigator API (browser/device information)
 * - History API (navigation control)
 * - Location API (URL manipulation)
 * - Local Storage (persistent data storage)
 * - Session Storage (temporary data storage)
 * - JSON serialization/deserialization
 * - Error handling with try-catch
 * - Custom error throwing
 */

console.log("Hello from Day 14");

// =============================================================================
// 1. WINDOW OBJECT - Global Browser Object
// =============================================================================

/**
 * Window object represents the browser window
 * Contains properties about the viewport and global scope
 *
 * Common Properties:
 * - innerHeight: Height of viewport in pixels
 * - innerWidth: Width of viewport in pixels
 * - outerHeight: Height of entire browser window
 * - outerWidth: Width of entire browser window
 */
// console.log("Windows Object: ", window);
// console.log("Window innerHeight: ", window.innerHeight); // Example: 937
// console.log("Window innerWidth: ", window.innerWidth);   // Example: 1920

// =============================================================================
// 2. NAVIGATOR OBJECT - Browser & Device Information
// =============================================================================

/**
 * Navigator object contains information about the browser and device
 * Useful for:
 * - Detecting user's browser
 * - Checking online/offline status
 * - Getting user's language preferences
 * - Accessing geolocation
 *
 * Common Properties:
 * - userAgent: Browser and OS information string
 * - onLine: Boolean indicating internet connectivity
 * - language: User's preferred language (e.g., "en-US")
 * - geolocation: Access to device location (requires permission)
 */
// console.log("Navigator Object: ", navigator);
// console.log("User Browser: ", navigator.userAgent);
// // Example: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..."
// console.log("User isOnline/Offline: ", navigator.onLine); // true/false
// console.log("User device Language: ", navigator.language); // "en-US"

// =============================================================================
// 3. HISTORY OBJECT - Browser Navigation History
// =============================================================================

/**
 * History object allows navigation through browser history
 * Security: Cannot access URLs, only navigate
 *
 * Methods:
 * - back(): Go to previous page (like back button)
 * - forward(): Go to next page (like forward button)
 * - go(n): Go n pages forward (positive) or backward (negative)
 */
// console.log("History Object: ", history);
// history.back();    // Navigate to previous page
// history.forward(); // Navigate to next page
// history.go(-2);    // Go back 2 pages

// =============================================================================
// 4. LOCATION OBJECT - Current URL Information
// =============================================================================

/**
 * Location object contains information about current URL
 * Can be used to redirect or get URL parts
 *
 * Common Properties:
 * - href: Full URL (can be set to redirect)
 * - host: Hostname + port (e.g., "localhost:5500")
 * - hostname: Just hostname (e.g., "localhost")
 * - pathname: Path after domain (e.g., "/day14/index.html")
 * - search: Query string (e.g., "?id=123")
 * - hash: Fragment identifier (e.g., "#section1")
 *
 * Methods:
 * - replace(url): Navigate to new URL (no history entry)
 * - reload(): Reload current page
 */
// console.log("Location Object: ", location);
// console.log("Location Host: ", location.host);         // "localhost:5500"
// console.log("Location Pathname: ", location.pathname); // "/day14/index.html"
// location.replace("https://www.google.com/"); // Redirect (can't go back)
// location.href = "https://www.google.com/";   // Redirect (can go back)

// location.href = "https://www.google.com/";   // Redirect (can go back)

// =============================================================================
// 5. LOCAL STORAGE - Persistent Browser Storage
// =============================================================================

/**
 * localStorage stores data with NO expiration time
 * Data persists even after browser is closed
 * Storage limit: ~5-10MB (varies by browser)
 *
 * Key Characteristics:
 * - Stores data as key-value pairs (both must be strings)
 * - Data persists until explicitly deleted
 * - Shared across all tabs/windows of same origin
 * - Synchronous API (blocking)
 *
 * Methods:
 * - setItem(key, value): Store data
 * - getItem(key): Retrieve data
 * - removeItem(key): Delete specific item
 * - clear(): Delete all items
 * - key(index): Get key at specific index
 *
 * Use Cases:
 * - User preferences (theme, language)
 * - Shopping cart data
 * - Form data persistence
 * - Authentication tokens
 */

// Basic localStorage operations
// localStorage.setItem("student-name", "Ujjawal");
// const studentName = localStorage.getItem("student-name");
// console.log("Student Name: ", studentName); // "Ujjawal"
// localStorage.removeItem("student-name");    // Delete specific item
// localStorage.clear();                       // Delete all items

// =============================================================================
// 6. STORING OBJECTS IN LOCAL STORAGE (JSON Serialization)
// =============================================================================

/**
 * localStorage only stores STRINGS
 * To store objects/arrays, we need to:
 * 1. Convert to string using JSON.stringify() before storing
 * 2. Convert back to object using JSON.parse() after retrieving
 */

const studentInfo = {
  name: "Imran",
  age: 24,
  course: "MERN Stack Development",
};

const convertedStudentInfo = JSON.stringify(studentInfo);
// Result: '{"name":"Imran","age":24,"course":"MERN Stack Development"}'

const marks = [12, 45, 87, 43, 5];
const convertedMarks = JSON.stringify(marks);
// Result: '[12,45,87,43,5]'

// Store objects in localStorage
// localStorage.setItem("studentInfo", convertedStudentInfo);
// localStorage.setItem("marks", convertedMarks);

// Retrieve and parse data from localStorage
// const studentInfoFromLocalStorage = localStorage.getItem("studentInfo");
// const marksFromLocalStorage = localStorage.getItem("marks");

// console.log("Student Info From Local Storage: ", studentInfoFromLocalStorage);
// // Output: '{"name":"Imran","age":24,"course":"MERN Stack Development"}'
// console.log("Marks From Local Storage: ", marksFromLocalStorage);
// // Output: '[12,45,87,43,5]'

// const parsedStudentInfo = JSON.parse(studentInfoFromLocalStorage);
// const parsedMarks = JSON.parse(marksFromLocalStorage);

// console.log("Parsed Student Info: ", parsedStudentInfo);
// // Output: { name: "Imran", age: 24, course: "MERN Stack Development" }
// console.log("Parsed Marks: ", parsedMarks);
// // Output: [12, 45, 87, 43, 5]

// =============================================================================
// 7. SESSION STORAGE - Temporary Browser Storage
// =============================================================================

/**
 * sessionStorage is similar to localStorage BUT:
 * - Data is CLEARED when page session ends (tab/window closes)
 * - Data is NOT shared between tabs (tab-specific)
 * - Same API as localStorage
 *
 * Use Cases:
 * - Temporary form data
 * - Single-page application state
 * - Wizard/multi-step form progress
 */
// sessionStorage.setItem("session-student-name", "Anil");
// const sessionName = sessionStorage.getItem("session-student-name");
// sessionStorage.removeItem("session-student-name");
// sessionStorage.clear();

// =============================================================================
// 8. PRACTICAL EXAMPLE - Collecting User Device Info
// =============================================================================

/**
 * Real-world example: Collecting analytics data
 * This function gathers device/browser info for analytics
 */
// const getUserDeviceInfo = () => {
//   const userAgent = navigator.userAgent;
//   const isUserOnlineOrOffline = navigator.onLine;
//   const userLanguage = navigator.language;
//
//   // Example: Send this data to your backend API
//   updateUserDeviceInfo({
//     userAgent,
//     isUserOnlineOrOffline,
//     userLanguage,
//   });
// };

/**
 * IMPORTANT localStorage/sessionStorage Rules:
 *
 * ✓ Key: Must be a valid string
 * ✓ Value: Must be a valid string
 *
 * If you try to store non-strings, they'll be converted automatically:
 * - Objects/Arrays become "[object Object]" or "[object Array]" (useless!)
 * - Numbers become strings: 123 → "123"
 *
 * Always use JSON.stringify() for objects/arrays!
 *
 * Always use JSON.stringify() for objects/arrays!
 */

// =============================================================================
// 9. ERROR TYPES IN JAVASCRIPT
// =============================================================================

/**
 * JavaScript has three main types of errors:
 *
 * 1. SYNTAX ERROR
 *    - Code structure is wrong
 *    - Detected before code runs
 *    - Prevents code execution
 *    - Examples: Missing brackets, quotes, semicolons
 *
 * 2. RUNTIME ERROR (Exception)
 *    - Occurs during code execution
 *    - Code is syntactically correct but fails at runtime
 *    - Examples: Accessing undefined properties, network failures
 *
 * 3. LOGICAL ERROR
 *    - Code runs without errors but produces wrong results
 *    - Hardest to debug
 *    - Examples: Wrong formula, incorrect condition
 */

// Example 1: Syntax Error
// console.log("Hi"  // ❌ Missing closing parenthesis
// This won't even run - caught by parser

// Example 2: Runtime Error
// let user;
// console.log(user.name); // ❌ Cannot read property 'name' of undefined
// Code is valid syntax but crashes at runtime

// Example 3: Logical Error
function calculateSum(a, b) {
  return a - b; // ❌ Should be a + b (wrong operator)
}

console.log(calculateSum(3, 5)); // Returns -2 instead of 8 (no error thrown!)

// =============================================================================
// 10. TRY-CATCH BLOCK - Error Handling
// =============================================================================

/**
 * try-catch allows graceful error handling
 * Prevents application crashes by catching runtime errors
 *
 * Structure:
 * try {
 *   // Code that might throw an error
 * } catch (error) {
 *   // Code to handle the error
 * } finally {
 *   // Code that always runs (optional)
 * }
 *
 * Flow:
 * 1. Code in try block executes
 * 2. If error occurs, jump to catch block
 * 3. If no error, skip catch block
 * 4. Finally block always executes (if present)
 */

// Basic try-catch (without error object)
// try {
//   // Risky code that might crash
//   let user = JSON.parse("{ name: John }"); // ❌ Invalid JSON (missing quotes)
//   console.log("User: ", user);
// } catch {
//   // Error handling code
//   console.log("User syntax is incorrect");
// }

// =============================================================================
// 11. TRY-CATCH WITH ERROR OBJECT
// =============================================================================

/**
 * Error object contains detailed information about the error
 *
 * Common Properties:
 * - message: Human-readable error description
 * - name: Type of error (e.g., "SyntaxError", "TypeError")
 * - stack: Stack trace (useful for debugging)
 */

try {
  // Attempting to parse invalid JSON
  let user = JSON.parse("{ name: John }"); // Missing quotes around key
  console.log("User: ", user);
} catch (error) {
  // error is an Error object with useful properties
  console.log("error: ", error.message); // "Unexpected token n in JSON at position 2"
  // console.log("Error name: ", error.name);     // "SyntaxError"
  // console.log("Stack trace: ", error.stack);   // Full stack trace
} finally {
  // This block ALWAYS runs, regardless of error
  console.log("This will always run");
}

// =============================================================================
// 12. THROWING CUSTOM ERRORS
// =============================================================================

/**
 * You can throw your own errors using the 'throw' keyword
 * Useful for input validation and business logic
 *
 * Syntax: throw new Error("Your error message")
 *
 * Common Error Types:
 * - Error: Generic error
 * - TypeError: Wrong type
 * - RangeError: Value out of range
 * - ReferenceError: Invalid reference
 */

/**
 * Example: Division function with validation
 * Throws error if dividing by zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by 0 is not allowed"); // Custom error
  }
  return a / b;
}

// Catching custom errors
try {
  console.log(divide(4, 0)); // Will throw error
} catch (error) {
  console.log("Error: ", error.message); // "Division by 0 is not allowed"
}

// =============================================================================
// 13. PRACTICAL EXAMPLES
// =============================================================================

/**
 * Example 1: Safe JSON parsing with error handling
 */
function safeJSONParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Invalid JSON:", error.message);
    return null; // Return default value on error
  }
}

// const data1 = safeJSONParse('{"name": "John"}');    // ✓ Valid JSON
// const data2 = safeJSONParse('{ name: John }');       // ✗ Invalid JSON
// console.log(data1); // { name: "John" }
// console.log(data2); // null

/**
 * Example 2: localStorage with error handling
 */
function saveToLocalStorage(key, value) {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    console.error("Failed to save to localStorage:", error.message);
    return false;
  }
}

function getFromLocalStorage(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Failed to get from localStorage:", error.message);
    return null;
  }
}

// Usage
// const success = saveToLocalStorage('user', { name: 'Imran', age: 24 });
// const userData = getFromLocalStorage('user');
// console.log(userData);

/**
 * Example 3: Custom validation function
 */
function validateAge(age) {
  if (typeof age !== "number") {
    throw new TypeError("Age must be a number");
  }
  if (age < 0) {
    throw new RangeError("Age cannot be negative");
  }
  if (age > 150) {
    throw new RangeError("Age seems unrealistic");
  }
  return true;
}

// try {
//   validateAge(-5);    // Throws RangeError
//   validateAge("25");  // Throws TypeError
//   validateAge(200);   // Throws RangeError
//   validateAge(25);    // ✓ Valid
// } catch (error) {
//   console.log(error.name + ": " + error.message);
// }
