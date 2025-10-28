// Variables - same as console JavaScript
let clickCount = 0;

// Get references to HTML elements
const greetingElement = document.getElementById('greeting');
const button = document.getElementById('change-greeting');
const countElement = document.getElementById('click-count');

// Function - same logic as console JavaScript
function updateGreeting() {
  clickCount++;
  greetingElement.textContent = 'Hello, Browser JavaScript!';
  countElement.textContent = \`Button clicks: \${clickCount}\`;
}

// Event listener - this is new! Responds to user interaction
button.addEventListener('click', updateGreeting);