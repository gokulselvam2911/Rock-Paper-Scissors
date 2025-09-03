let humanScore = 0;
let computerScore = 0;
let totalWins = 0;
const MAX_WINS = 5;

// DOM elements
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const restartBtn = document.getElementById("restart");
const historyList = document.getElementById("history-list");

// Function to get computer's random choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Main game logic
function playRound(humanChoice, computerChoice) {
  if (totalWins >= MAX_WINS) return; // game finished

  let resultMessage = `You chose: ${humanChoice}. Computer chose: ${computerChoice}. `;
  const li = document.createElement("li");

  if (humanChoice === computerChoice) {
    resultMessage += "It's a tie! (does not count)";
    li.classList.add("tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessage += `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
    totalWins++;
    li.classList.add("win");
  } else {
    resultMessage += `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
    totalWins++;
    li.classList.add("lose");
  }

  resultDiv.textContent = resultMessage;
  scoreDiv.textContent = `Wins → You: ${humanScore} | Computer: ${computerScore} | Total: ${totalWins}/${MAX_WINS}`;

  // Add to history
  li.textContent = resultMessage;
  historyList.appendChild(li);
  historyList.scrollTop = historyList.scrollHeight; // auto-scroll

  checkWinner();
}

// Check for overall winner
function checkWinner() {
  if (totalWins < MAX_WINS) return;

  if (humanScore > computerScore) {
    resultDiv.textContent = `🎉 You win the match ${humanScore}-${computerScore}!`;
  } else {
    resultDiv.textContent = `💻 Computer wins the match ${computerScore}-${humanScore}.`;
  }

  disableButtons();
  restartBtn.style.display = "inline-block"; // show restart button
}

function disableButtons() {
  document.querySelectorAll("#game button").forEach((button) => {
    button.disabled = true;
  });
}

function enableButtons() {
  document.querySelectorAll("#game button").forEach((button) => {
    button.disabled = false;
  });
}

// Restart function
function restartGame() {
  humanScore = 0;
  computerScore = 0;
  totalWins = 0;
  resultDiv.textContent = "";
  scoreDiv.textContent = "Game reset. Start again!";
  historyList.innerHTML = "";
  enableButtons();
  restartBtn.style.display = "none"; // hide button again
}

// Event listeners
document.getElementById("rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));
restartBtn.addEventListener("click", restartGame);
