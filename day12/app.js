console.log("Hello World from Day 12");

const element = document.getElementById("test-element");

// Setter
// element.style.color = "red";
// element.style.border = "2px solid green";

// getter
// console.log(element.style.color);

// using className
// element.className = "active test-class";
// console.log(element.className);

// using classlist
element.classList.add("active");
element.classList.add("test-class");
element.classList.remove("active");
console.log(element.classList.contains("active"));
element.classList.toggle("active");

console.log(element.classList);

// element.addEventListener("click", function () {
//   element.classList.toggle("active");
// });

// console.log(element);

// element.innerText = "<small>Hi I am small tag</small>";
// element.innerHTML = "<small>Hi I am small tag</small>";

// console.log("h1 textContent: ", element.textContent);
// console.log("h1 innerText: ", element.innerText);
// console.log("h1 innerHTML: ", element.innerHTML);

// const elements = document.querySelectorAll("h1");
// console.log(elements);

// const linkElement = document.querySelector("p");
// linkElement.setAttribute("target", "_blank");
// linkElement.setAttribute("href", "https://www.google.com/");
// linkElement.style.border = "2px solid green";

// linkElement.addEventListener("click", function () {
//   linkElement.removeAttribute("href");
// });

// console.log(linkElement.attributes);

const eyeToggleButton = document.querySelector(".password-toggle-button");

eyeToggleButton.addEventListener("click", function () {
  const passwordInput = document.getElementById("password-input");
  console.log(passwordInput.type);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
    eyeToggleButton.style.textDecoration = "line-through";
  }
});
