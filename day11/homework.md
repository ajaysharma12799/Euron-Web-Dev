# Day 11 Homework - DOM Manipulation

## Overview

Practice DOM (Document Object Model) manipulation by selecting, modifying, and styling HTML elements using JavaScript.

---

## Part 1: Element Selection Practice

### Task 1.1: Select Elements by ID

Create an HTML page with the following elements:

- An `<h1>` with id `"main-title"`
- A `<p>` with id `"intro-text"`
- A `<button>` with id `"submit-btn"`

**Instructions:**

- Use `getElementById()` to select each element
- Log each element to the console
- Verify that selecting a non-existent ID returns `null`

---

### Task 1.2: Select Elements by Class Name

Add the following to your HTML:

- 3 `<div>` elements with class `"card"`
- 2 `<span>` elements with class `"highlight"`

**Instructions:**

- Use `getElementsByClassName()` to select all elements with class `"card"`
- Log the HTMLCollection to console
- Loop through the collection and log each element's text content
- Try accessing elements using index notation (e.g., `[0]`, `[1]`)

---

### Task 1.3: Select Elements by Tag Name

**Instructions:**

- Use `getElementsByTagName()` to select all `<li>` elements in a list
- Count how many list items exist
- Log the tag name of each element

---

### Task 1.4: Query Selector Practice

Create elements and practice selecting them using `querySelector()`:

**Instructions:**

- Select the first element with class `"card"` using `.card`
- Select an element by ID using `#main-title`
- Select the first `<button>` element using tag selector
- Select a nested element using descendant selector (e.g., `.container p`)
- Select an element with a specific attribute (e.g., `[type="text"]`)

---

### Task 1.5: Query Selector All

**Instructions:**

- Use `querySelectorAll()` to select all elements with class `"highlight"`
- Convert the NodeList to an array using `Array.from()` or spread operator `[...]`
- Use `forEach()` to iterate through all selected elements
- Add a border to each element

---

## Part 2: Content Modification

### Task 2.1: Change Text Content

Create an HTML page with:

- An `<h2>` with text "Original Heading"
- A `<p>` with text "Original paragraph text"
- A `<button>` with text "Click Me"

**Instructions:**

- Use JavaScript to change the `<h2>` text to "Updated Heading"
- Change the paragraph text to something new
- Change the button text to "Submit"

---

### Task 2.2: innerHTML vs textContent

Create a `<div>` with some HTML content inside.

**Instructions:**

- Log the difference between `innerHTML` and `textContent`
- Use `innerHTML` to add HTML tags (e.g., `<strong>Bold Text</strong>`)
- Use `textContent` to set plain text and observe how HTML tags are treated

---

## Part 3: Style Manipulation

### Task 3.1: Basic Styling

Select an element and apply the following styles using JavaScript:

**Instructions:**

- Change `color` to `"blue"`
- Change `fontSize` to `"2rem"`
- Change `backgroundColor` to `"lightgray"`
- Change `padding` to `"20px"`
- Change `border` to `"2px solid red"`
- Change `borderRadius` to `"10px"`

---

### Task 3.2: Multiple Style Changes

Create a function that accepts an element and a styles object, then applies all styles.

**Example:**

```javascript
function applyStyles(element, stylesObject) {
  // Your code here
}

const box = document.querySelector(".box");
applyStyles(box, {
  color: "white",
  backgroundColor: "navy",
  fontSize: "1.5rem",
  padding: "15px",
});
```

---

### Task 3.3: Toggle Visibility

**Instructions:**

- Create a button and a `<div>` element
- Add a click event listener to the button
- Toggle the `<div>` visibility by changing `display` between `"none"` and `"block"`

---

## Part 4: Practical Exercises

### Exercise 4.1: Color Picker

Create a simple color picker:

- Add 5 buttons, each with a different color name
- Add a `<div>` box below the buttons
- When a button is clicked, change the `<div>` background color to match

**Bonus:** Add a reset button to restore original color

---

### Exercise 4.2: List Item Counter

**Instructions:**

- Create an unordered list with multiple `<li>` items
- Add a paragraph element to display the count
- Use JavaScript to count the list items and display "Total items: X"
- Add a button that adds a new list item when clicked
- Update the count automatically

---

### Exercise 4.3: Text Formatter

Create a text formatter with the following features:

- An input text area
- Three buttons: "Bold", "Italic", "Underline"
- A preview `<div>` that shows the formatted text
- Clicking buttons should apply respective styles to the preview

---

### Exercise 4.4: Theme Switcher

**Instructions:**

- Create a page with some content (heading, paragraphs, buttons)
- Add a "Toggle Dark Mode" button
- When clicked, change:
  - Background color of the page
  - Text color of all elements
  - Button styles
- Use `querySelectorAll()` to select multiple elements

---

## Part 5: Challenge Problems

### Challenge 5.1: Dynamic Card Creator

Create a system that generates cards dynamically:

- Add an input field for card title
- Add a textarea for card description
- Add a button "Create Card"
- When clicked, create a new card with:
  - A title (using the input value)
  - Description (using textarea value)
  - A delete button
  - Proper styling
- Each card's delete button should remove that specific card

---

### Challenge 5.2: Interactive Navigation Menu

**Instructions:**

- Create a navigation menu with multiple links
- Add a `.active` class style in CSS
- When a link is clicked:
  - Remove `.active` class from all links
  - Add `.active` class to the clicked link
  - Change the background color of the active link

---

### Challenge 5.3: Image Gallery Filter

Create an image gallery with filters:

- Create 9 image placeholders with different categories (e.g., "nature", "city", "people")
- Add filter buttons for each category + "All"
- When a filter is clicked, show only images from that category
- Use `style.display` to show/hide images

---

## Bonus Questions

1. **What's the difference between `HTMLCollection` and `NodeList`?**

   - Research and explain in your own words
   - Which one is "live" and which is "static"?

2. **Why use `querySelector()` over `getElementById()`?**

   - List pros and cons of each method

3. **What happens if you try to change styles on a null element?**

   - Try it and explain the error

4. **Can you use `querySelector()` to select pseudo-elements like `::before`?**
   - Research and test this

---

## Submission Guidelines

1. Create an HTML file with all exercises
2. Create a separate JavaScript file (`homework.js`)
3. Add comments explaining your code
4. Test all functionality in the browser
5. Take screenshots of the console output for selection exercises

---

## Resources

- [MDN: Document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [MDN: Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN: HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
- [MDN: DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

---

**Good luck with your homework! 🚀**
