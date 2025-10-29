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

// Change background color
const changeBGcolor = () => {
  if (clickCount >= 10) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "white";
  }
};

// Increase function
const increaseCount = () => {
  clickCount++;
  displayCounter();
  changeBGcolor();
};
// Decrease function
const decreaseCount = () => {
  clickCount--;
  displayCounter();
  changeBGcolor();
};
// Reset function
const resetCount = () => {
  clickCount = 0;
  displayCounter();
  changeBGcolor();
};

// Event listeners
increaseButton.addEventListener("click", increaseCount);
decreaseButton.addEventListener("click", decreaseCount);
resetButton.addEventListener("click", resetCount);
