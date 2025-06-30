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

  const finalResultHTML = `
    <div class="arcade-title">GAME OVER</div>
    <div class="plain-yellow">${gameStatus}</div>
    <div class="plain-yellow small">Your Score: ${humanScore}</div>
    <div class="plain-yellow small">Computer Score: ${computerScore}</div>
  `;

  document.getElementById("result").textContent = "";
  document.getElementById("scoreboard").style.display = "none";
  document.getElementById("finalResult").innerHTML = finalResultHTML;
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

  document.getElementById("humanScore").textContent = "0";
  document.getElementById("computerScore").textContent = "0";
  document.getElementById("result").textContent = "";
  document.getElementById("finalResult").innerHTML = "";
  document.getElementById("scoreboard").style.display = "block";
  document.getElementById("playAgainBtn").style.display = "none";
 
  enableButtons();
}
