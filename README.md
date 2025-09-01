# Rock Paper Scissors 🎮

A simple **console-based Rock Paper Scissors game** built as part of [The Odin Project – Foundations Course](https://www.theodinproject.com/).  
The game is played entirely in the browser console.

---

## Project Overview
This project was created to practice:
- Writing clean JavaScript functions
- Using conditionals and loops
- Tracking game state with variables
- Getting user input via `prompt()`
- Logging results with `console.log()`

The game runs for **5 rounds** between the human player and the computer. After all rounds are completed, the final winner is declared.

---

## How to Run
1. Clone this repository or download the files.
2. Open the `index.html` file in your browser.
3. Open the **developer console** (`F12` or `Ctrl + Shift + I` in most browsers).
4. Follow the instructions in the prompt and play 5 rounds!

---

## Game Rules
- Rock beats Scissors  
- Scissors beats Paper  
- Paper beats Rock  
- If both choices are the same → it’s a tie

The game keeps score and announces the overall winner after 5 rounds.

---

## Project Structure
```
rock-paper-scissors/
├── index.html     # Main HTML file (includes script.js)
├── script.js      # Game logic in JavaScript
├── pseudocode.txt # High-level steps for implementation
└── README.md      # Project documentation
```

---

## Example Gameplay
```
Welcome to Rock, Paper, Scissors!
You chose: rock
Computer chose: paper
You lose! paper beats rock
Score: You - 0, Computer - 1
...
Final Score:
You - 2,
Sorry! You lost the game.
```

---

## Future Improvements
This version is **console-only**. In a later lesson, the project will be extended with a **Graphical User Interface (GUI)** where players can click buttons instead of typing in their choice.

---

## Lessons Learned
- How to structure a project with HTML + external JS
- Using `Math.random()` for randomness
- Making functions reusable
- Breaking down a larger problem into smaller steps (pseudocode → implementation → testing)

---

## Acknowledgments
- [The Odin Project](https://www.theodinproject.com/) for providing this project as part of their Foundations curriculum.