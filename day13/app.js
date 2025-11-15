console.log("Hello World from Day 13");

// Create Element Node
const buttonElement = document.createElement("button");
// buttonElement.textContent = "Click Me";

// Create Text Node
const buttonTextElement = document.createTextNode("Click Me");
buttonElement.appendChild(buttonTextElement);

const parentElement = document.getElementById("test-div");
parentElement.append(buttonElement);

console.log("button Element: ", buttonElement);

// Comment Node
const commentElement = document.createComment("I am comment node");
// parentElement.appendChild(commentElement);

// Attribute Node
const buttonClassAttribute = document.createAttribute("class");
buttonClassAttribute.value = "active";
buttonElement.setAttributeNode(buttonClassAttribute);
console.log(buttonClassAttribute);

// const students = [
//     {
//         id: 1,
//         name: "",
//         marks: "",
//         rollNumber: ""
//     }
// ]

// students.forEach(() => {

// })

// Remove element
// const olParent = document.querySelector(".ol-parent");
// const i3 = document.querySelector(".i-2");
// olParent.removeChild(i3);

const e1 = document.createElement("span");
e1.textContent = "E1";

const e2 = document.createElement("span");
e2.textContent = "E2";

const e3 = document.createElement("span");
e3.textContent = "E3";

const e4 = document.createElement("span");
e4.textContent = "E4";

parentElement.insertAdjacentElement("beforebegin", e1);
parentElement.insertAdjacentElement("beforeend", e2);
parentElement.insertAdjacentElement("afterbegin", e3);
parentElement.insertAdjacentElement("afterend", e4);

buttonElement.addEventListener("click", function () {
  //   buttonElement.textContent = "Bhai Click ho gaya hai";

  //   alert("Bhai Click ho gaya hai");
  //   const promptValue = prompt("Bhai apna name batao?????");

  //   buttonElement.textContent = `${promptValue} iss bhai ne click kiya hai`;

  const confirmValue = confirm("Are you sure??");

  if (confirmValue) {
    alert("Pata hai na ki deleete karne se kya hoga???");
  } else {
    alert("darr gaya tu???");
  }
});

// click, dblclick, keypress, keydown, keyup, mouseenter, mouseleave, submit and change
