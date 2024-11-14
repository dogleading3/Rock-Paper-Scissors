const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("result");

function playRound(playerSelection) {
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  let result = "";

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }
  playerDisplay.textContent = `Player: ${playerSelection}`;
  computerDisplay.textContent = `Computer: ${computerSelection}`;
  resultDisplay.textContent = result;
}
