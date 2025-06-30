let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  if (roundCount >= maxRounds) return;

  const computerChoice = getComputerChoice();
  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `Round ${roundCount + 1}: It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessage = `Round ${roundCount + 1}: You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else {
    resultMessage = `Round ${roundCount + 1}: You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }

  roundCount++;

  document.getElementById("result").textContent = resultMessage;
  document.getElementById("humanScore").textContent = humanScore;
  document.getElementById("computerScore").textContent = computerScore;

  if (roundCount === maxRounds) {
    endGame();
  }
}

function endGame() {
  let finalMessage = "";

  if (humanScore > computerScore) {
    finalMessage = "Game Over: You won the game!";
  } else if (humanScore < computerScore) {
    finalMessage = "Game Over: Computer won the game!";
  } else {
    finalMessage = "Game Over: It's a tie!";
  }

  document.getElementById("result").textContent += `\n${finalMessage}`;

  // Disable choice buttons
  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach(button => button.disabled = true);
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundCount = 0;

  document.getElementById("result").textContent = "";
  document.getElementById("humanScore").textContent = "0";
  document.getElementById("computerScore").textContent = "0";

  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach(button => button.disabled = false);
}
