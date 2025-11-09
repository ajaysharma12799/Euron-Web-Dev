/**
 * DOM (Document Object Model) Introduction
 *
 * The DOM is a programming interface for HTML documents.
 * It represents the page structure as a tree of objects that can be manipulated with JavaScript.
 *
 * Topics covered:
 * - Selecting HTML elements using various methods
 * - Modifying element content
 * - Changing element styles dynamically
 */

// =============================================================================
// 1. SELECTING ELEMENTS BY ID
// =============================================================================

/**
 * getElementById() - Selects a single element by its ID attribute
 * Returns: Single HTMLElement or null if not found
 * Note: IDs should be unique in a document
 */
// const h2ElementViaID = document.getElementById("test-h2-id");
// console.log(h2ElementViaID);

// =============================================================================
// 2. SELECTING ELEMENTS BY CLASS NAME
// =============================================================================

/**
 * getElementsByClassName() - Selects all elements with a specific class
 * Returns: HTMLCollection (array-like object, live collection)
 * Updates automatically when DOM changes
 */
// const allListItems = document.getElementsByClassName("t");
// console.log(allListItems);

// =============================================================================
// 3. SELECTING ELEMENTS BY TAG NAME
// =============================================================================

/**
 * getElementsByTagName() - Selects all elements with a specific tag name
 * Returns: HTMLCollection (array-like object, live collection)
 * Example: select all <li>, <div>, <p> elements
 */
// const allListItemsViaTagName = document.getElementsByTagName("li");
// console.log(allListItemsViaTagName);

// =============================================================================
// 4. QUERY SELECTOR (MODERN APPROACH)
// =============================================================================

/**
 * querySelector() - Selects the FIRST element matching a CSS selector
 * Returns: Single HTMLElement or null
 * Supports all CSS selectors (class, ID, tag, attributes, pseudo-classes, etc.)
 */
// const querySelectorElement = document.querySelector(".test-h2-class"); // By class
// const querySelectorElement = document.querySelector("#test-h2-id"); // By ID
// const querySelectorElement = document.querySelector("button"); // By tag
// console.log(querySelectorElement);

// =============================================================================
// 5. QUERY SELECTOR ALL
// =============================================================================

/**
 * querySelectorAll() - Selects ALL elements matching a CSS selector
 * Returns: NodeList (array-like object, static collection)
 * Does NOT update automatically when DOM changes
 */
// const querySelectorAllElement = document.querySelectorAll("li");
// console.log(querySelectorAllElement);

// =============================================================================
// 6. MODIFYING ELEMENT CONTENT
// =============================================================================

/**
 * textContent property - Gets or sets the text content of an element
 * Strips out all HTML tags
 */
// const liElement = document.querySelector(".t");
// liElement.textContent = "Anil"; // Changes the text
// liElement.style.color = "red"; // Changes the text color

// =============================================================================
// 7. MODIFYING ELEMENT STYLES
// =============================================================================

/**
 * style property - Allows direct manipulation of inline CSS styles
 * Note: CSS properties are written in camelCase (e.g., fontSize instead of font-size)
 */
const h2Element = document.querySelector(".test-h2-class");
console.log(h2Element);

// Apply inline styles
h2Element.style.color = "red"; // Changes text color to red
h2Element.style.fontSize = "3rem"; // Changes font size to 3rem
