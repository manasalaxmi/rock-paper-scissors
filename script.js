let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
  if (roundCount >= maxRounds) return;

  const computerChoice = getComputerChoice();
  let roundResult = "";

  if (humanChoice === computerChoice) {
    roundResult = `Round ${roundCount + 1}: It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    roundResult = `Round ${roundCount + 1}: You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else {
    roundResult = `Round ${roundCount + 1}: You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }

  roundCount++;

  document.getElementById("result").textContent = roundResult;
  document.getElementById("humanScore").textContent = humanScore;
  document.getElementById("computerScore").textContent = computerScore;

  if (roundCount === maxRounds) {
    disableButtons();
    setTimeout(endGame, 500);
  }
}

function endGame() {
  let gameStatus = "";

  if (humanScore > computerScore) {
    gameStatus = "You won the game!";
  } else if (humanScore < computerScore) {
    gameStatus = "Computer won the game!";
  } else {
    gameStatus = "It's a tie!";
  }

  const finalResult = `GAME OVER
${gameStatus}
Your Score: ${humanScore}
Computer Score: ${computerScore}`;

  document.getElementById("finalResult").textContent = finalResult;

  // Show Play Again button
  document.getElementById("playAgainBtn").style.display = "inline-block";
}

function disableButtons() {
  document.querySelectorAll(".choices button").forEach(btn => btn.disabled = true);
}

function enableButtons() {
  document.querySelectorAll(".choices button").forEach(btn => btn.disabled = false);
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundCount = 0;

  document.getElementById("result").textContent = "";
  document.getElementById("finalResult").textContent = "";
  document.getElementById("humanScore").textContent = "0";
  document.getElementById("computerScore").textContent = "0";

  // Hide play again button
  document.getElementById("playAgainBtn").style.display = "none";

  enableButtons();
}
