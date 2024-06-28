// Get the rules button and rules popup elements
const rulesButton = document.querySelector(".btn-rules");
const rulesPopup = document.querySelector(".rules-popup");
const closeIcon = document.querySelector(".close-icon");

// Add event listener to the rules button
rulesButton.addEventListener("click", () => {
  // Show the rules popup
  rulesPopup.style.display === "none"
    ? (rulesPopup.style.display = "block")
    : (rulesPopup.style.display = "none");
});

// Add event listener to the close icon
closeIcon.addEventListener("click", () => {
  // Hide the rules popup
  rulesPopup.style.display = "none";
});

// Get all the necessary elements
const rockButton = document.querySelector('.rock-container.game');
const paperButton = document.querySelector('.paper-container.game');
const scissorButton = document.querySelector('.scissor-container.game');
const lineImg = document.querySelector('.lines')
const computerRock = document.querySelector('.rock-container.computer');
const computerPaper = document.querySelector('.paper-container.computer');
const computerScissor = document.querySelector('.scissor-container.computer');
const userScore = document.getElementById('userCount');
const computerScore = document.getElementById('compCount');
const resultText = document.querySelector('.game-info');
const playAgainButton = document.querySelectorAll('.play-again');
const replayButton = document.querySelector('.replay');
const userTitle = document.querySelector('.user')
const pcTitle = document.querySelector('.pc')
// Initialize scores
let userScoreCount = 0;
let computerScoreCount = 0;

// Function to generate computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissor') ||
    (userChoice === 'scissor' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    return 'user';
  } else {
    return 'computer';
  }
}

function showComputerChoice(computerChoice) {
  switch (computerChoice) {
    case 'rock':
      computerRock.style.display = 'block';
      computerPaper.style.display = 'none';
      computerScissor.style.display = 'none';
      computerRock.classList.add('compShow');
      pcTitle.style.opacity='1';
      break;
    case 'paper':
      computerRock.style.display = 'none';
      computerPaper.style.display = 'block';
      computerScissor.style.display = 'none';
      computerPaper.classList.add('compShow');
      pcTitle.style.opacity='1';
      break;
    case 'scissor':
      computerRock.style.display = 'none';
      computerPaper.style.display = 'none';
      computerScissor.style.display = 'block';
      computerScissor.classList.add('compShow');
      pcTitle.style.opacity='1';
      break;
  }
}

// Event listeners for user's choice
rockButton.addEventListener('click', () => {
  userTitle.style.opacity='1';
  lineImg.style.display='none';
  paperButton.style.display='none';
  scissorButton.style.display='none';
  rockButton.classList.add('userShow');
  const computerChoice = getComputerChoice();
  const winner = determineWinner('rock', computerChoice);
  updateGame(winner, 'rock', computerChoice);
  showComputerChoice(computerChoice);
});

paperButton.addEventListener('click', () => {
  userTitle.style.opacity='1';
  lineImg.style.display='none';
  rockButton.style.display='none';
  scissorButton.style.display='none';
  paperButton.classList.add('userShow');
  const computerChoice = getComputerChoice();
  const winner = determineWinner('paper', computerChoice);
  updateGame(winner, 'paper', computerChoice);
  showComputerChoice(computerChoice);
});

scissorButton.addEventListener('click', () => {
  userTitle.style.opacity='1';
  lineImg.style.display='none';
  rockButton.style.display='none';
  paperButton.style.display='none';
  scissorButton.classList.add('userShow');
  const computerChoice = getComputerChoice();
  const winner = determineWinner('scissor', computerChoice);
  updateGame(winner, 'scissor', computerChoice);
  showComputerChoice(computerChoice);
});

// Function to update the game state
function updateGame(winner, userChoice, computerChoice) {
  if (winner === 'user') {
    userScoreCount++;
    userScore.textContent = userScoreCount;
    // Show win model
    document.querySelector('.win-model').style.display = 'block';
  } else if (winner === 'computer') {
    computerScoreCount++;
    computerScore.textContent = computerScoreCount;
    // Show lost model
    document.querySelector('.lost-model').style.display = 'block';
  } else {
    // Show tie model
    document.querySelector('.tie-up').style.display = 'block';
  }
}

// Event listeners for play again and replay buttons
playAgainButton.forEach((button) => {
  button.addEventListener('click', () => {
    // Hide win/lost models
    document.querySelector('.win-model').style.display = window.location.reload();
    document.querySelector('.lost-model').style.display = window.location.reload();
    document.querySelector('.hurray-model').style.display = window.location.reload();
  });
});

replayButton.addEventListener('click', () => {
  // Hide tie model
  document.querySelector('.tie-up').style.display = window.location.reload();
});




