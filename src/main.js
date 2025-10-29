// Variables - same as console JavaScript
let clickCount = 0;
const defaultMsg = "Hello, Console JavaScript!";
const defaultUpdateMsg = "Hello, Browser JavaScript!";

// Get references to HTML elements
const greetingElement = document.getElementById("greeting");
const counterButton = document.getElementById("change-greeting");
const resetButton = document.getElementById("reset-form");
const countElement = document.getElementById("click-count");
const customGreetingMsg = document.getElementById("greeting-msg");

// Function - same logic as console JavaScript
function updateGreeting() {
  clickCount++;
  greetingElement.textContent = defaultUpdateMsg;
  countElement.textContent = `Button clicks: ${clickCount}`;
  if (clickCount === 5) {
    greetingElement.style.color = "blue";
  }
  if (customGreetingMsg.value !== "") {
    greetingElement.textContent = customGreetingMsg.value;
  }
}

const resetForm = () => {
  // Reset Click Counter
  clickCount = 0;
  countElement.textContent = `Button clicks: ${clickCount}`;
  // Reset Greeting
  greetingElement.style.color = "black";
  greetingElement.textContent = defaultMsg;
  // Reset Text Input
  customGreetingMsg.value = "";
};

// const changeHeadingColor = () => {
//   if (clickCount === 5) {
//     greetingElement.color = "blue";
//   }
// if clickCount = 5
// then changeHeadingColor to blue
// };

// Event listener - this is new! Responds to user interaction
counterButton.addEventListener("click", updateGreeting);
resetButton.addEventListener("click", resetForm);
