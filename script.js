// Step 1: Check JavaScript is working
console.log("Hello World");

// Step 4: Declare score variables
let humanScore = 0;
let computerScore = 0;

// Step 2: Get computer's choice
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.34) {
    return "rock";
  } else if (randomNumber < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Step 3: Get human's choice
function getHumanChoice() {
  const choice = prompt("Enter your choice: rock, paper, or scissors");
  return choice.toLowerCase();
}

// Step 5: Play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  console.log(`Score => You: ${humanScore}, Computer: ${computerScore}`);
}

// Step 6: Play the full game
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`\nRound ${i}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log("\nFinal Result:");
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Computer won the game!");
  } else {
    console.log("It's a tie!");
  }
}

// Start the game
playGame();

