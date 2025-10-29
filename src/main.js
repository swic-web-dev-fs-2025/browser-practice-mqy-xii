// Variables
let clickCount = 0;

// Get HTML elements
const counterElement = document.getElementById("counter");
const increaseButton = document.getElementById("increase-btn");

// Functions
// Increase function
const increaseCount = () => {
  clickCount++;
  counterElement.textContent = `Counter: ${clickCount}`;
};
// Decrease function
// Reset function

// Event listeners
increaseButton.addEventListener("click", increaseCount);
