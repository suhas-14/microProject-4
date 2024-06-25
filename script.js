
// Get the rules button and rules popup elements
const rulesButton = document.querySelector('.btn-rules');
const rulesPopup = document.querySelector('.rules-popup');
const closeIcon = document.querySelector('.close-icon');

// Add event listener to the rules button
rulesButton.addEventListener('click', () => {
  // Show the rules popup
  rulesPopup.style.opacity = '1';
});

// Add event listener to the close icon
closeIcon.addEventListener('click', () => {
  // Hide the rules popup
  rulesPopup.style.opacity = '0';
});