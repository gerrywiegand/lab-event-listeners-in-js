// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = "rgba(237, 4, 4, 1)";
  // Implement the function to change background color
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
  // Implement the function to reset background color
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const updatedP = document.querySelector("#keyPressDisplay");
  updatedP.textContent = "Key pressed:" + ` ${event.key}`;
  // Implement the function to display key pressed
}

// Process Text Input

// Function to display user input in real-timeSS
function displayUserInput(arg) {
  const input = document.getElementById("textInput");
  const output = document.getElementById("textInputDisplay");
  let value = "";

  if (typeof arg === "string") {
    value = arg;
  } else if (arg && arg.target && typeof arg.target.value === "string") {
    value = arg.target.value;
  } else if (input) {
    value = input.value;
  }

  output.textContent = "You typed: " + value;
}
// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  document
    .getElementById("changeColorButton")
    .addEventListener("click", changeBackgroundColor);

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById("resetColorButton")
    .addEventListener("dblclick", resetBackgroundColor);

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener("keydown", displayKeyPress);

  // Attach event listener to display user input in real-time as they type
  document
    .getElementById("textInput")
    .addEventListener("input", displayUserInput);
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};
