const inputElement = document.querySelector(".input-section input");
const buttonElement = document.querySelector(".input-section button");

buttonElement.addEventListener("click", function () {
  const inputValue = inputElement.value;

  // Check and Validate
  if (inputValue === "") {
    alert("Input Can't be Empty, Please try adding some value...");
  }

  const listElement = document.createElement("li");
  listElement.setAttribute("class", "todo-item");

  const inputElementChild = document.createElement("input");
  inputElementChild.type = "checkbox";

  const spanElement = document.createElement("span");
  spanElement.setAttribute("class", "todo-text");
  // spanElement.textContent = inputValue;
  const spanElementTextNode = document.createTextNode(inputValue);
  spanElement.appendChild(spanElementTextNode);

  const deleteButtonElement = document.createElement("button");
  deleteButtonElement.setAttribute("class", "delete-btn");
  deleteButtonElement.textContent = "Delete";

  // Add all newly created element into listElement

  listElement.appendChild(inputElementChild);
  listElement.appendChild(spanElement);
  listElement.appendChild(deleteButtonElement);

  //   Append new list item into parent element for visibility
  document.querySelector(".todo-list").appendChild(listElement);

  console.log(listElement);
});

/**
 * 1. Delete Implement karna hai
 * 2. Checkbox - mark as completed
 * 3. Clear input value after adding
 */
