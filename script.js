function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// function getHumanChoice() {
//   let userInput = prompt("Enter your choice: rock, paper or scissors");
//   return userInput.toLowerCase();
// }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
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
  console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
}

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }
// }
console.log("Welcome to Rock, Paper, Scissors!");
// playGame();
console.log("Final Score:");
console.log(`You - ${humanScore}, Computer - ${computerScore}`);
if (humanScore > computerScore) {
  console.log("Congratulations! You won the game!");
} else if (humanScore < computerScore) {
  console.log("Sorry! You lost the game.");
} else {
  console.log("The game is a tie!");
}       