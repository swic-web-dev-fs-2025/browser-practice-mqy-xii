// Variables
let clickCount = 0;

// Get HTML elements
const counterElement = document.getElementById("counter");
const increaseButton = document.getElementById("increase-btn");
const decreaseButton = document.getElementById("decrease-btn");
const resetButton = document.getElementById("reset-btn");

// Functions
// Display function
const displayCounter = () => {
  counterElement.textContent = `Counter: ${clickCount}`;
};

// Increase function
const increaseCount = () => {
  clickCount++;
  displayCounter();
};
// Decrease function
const decreaseCount = () => {
  clickCount--;
  displayCounter();
};
// Reset function

// Event listeners
increaseButton.addEventListener("click", increaseCount);
decreaseButton.addEventListener("click", decreaseCount);
