const button = document.getElementById("color-generator-button");

button.addEventListener("click", function () {
  // Random Numbers for Random Color generation
  const random_number_1 = Math.floor(Math.random() * 256);
  const random_number_2 = Math.floor(Math.random() * 256);
  const random_number_3 = Math.floor(Math.random() * 256);

  // Generate random color combination using above numbers
  const random_color = `rgb(${random_number_1}, ${random_number_2}, ${random_number_3})`;

  const targetElement = document.getElementById("color-background");
  targetElement.style.backgroundColor = random_color;

  // Update Random Color in UI
  const rbgElement = document.querySelector(".rgb");
  rbgElement.textContent = random_color;

  console.log("Random Color: ", random_color);
});
