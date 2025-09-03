# Rock Paper Scissors 🎮

A simple **Rock Paper Scissors game with a Graphical User Interface (GUI)** built as part of [The Odin Project – Foundations Course](https://www.theodinproject.com/).

Players compete against the computer until **5 wins** are reached (ties are not counted).  
The game features buttons for choices, score tracking, game history, and a restart option.

---

## Live Demo
Play the game here: [https://rock-paper-scissors-gokul.netlify.app/](https://rock-paper-scissors-gokul.netlify.app/)

---

## Project Overview

This project was created to practice:

- Writing clean JavaScript functions
- DOM manipulation (updating elements dynamically)
- Event handling with button clicks
- Game state management (scores, total wins, restart)
- Styling with CSS for a better UI

---

## How to Play

1. Clone this repository or download the files.
2. Open the `index.html` file in your browser.
3. Click **Rock 🪨**, **Paper 📄**, or **Scissors ✂️** to make your move.
4. The computer will randomly choose its move.
5. First to reach **5 wins** (excluding ties) is declared the winner.
6. Use the **Restart 🔄** button to play again.

---

## Game Rules

- **Rock** beats **Scissors**
- **Scissors** beats **Paper**
- **Paper** beats **Rock**
- **Ties** do not count toward the 5 wins

---

## Project Structure

```
rock-paper-scissors/
├── index.html  # Game UI and layout
├── script.js   # Game logic and DOM updates
├── styles.css  # Styling and layout
└── README.md   # Project documentation

```

---

## Features

- Interactive **buttons** for moves
- **Live score updates** after each round
- **Game history log** with color-coded outcomes (win/lose/tie)
- **Restart button** to reset and play again
- Clean and responsive UI with modern CSS styling

---

## Example Gameplay

```
Welcome to Rock, Paper, Scissors!
[Player clicks Rock]
You chose: Rock
Computer chose: Scissors
You win! Rock beats Scissors
Score: You - 1, Computer - 0
...
[After several rounds]
Final Score:
🎉 You win the match 5-3!
```

---

## Future Improvements

- Add **player vs player mode (local multiplayer)**
- Add **animations** for choices
- Keep track of **multiple matches (scoreboard)**
- Make it **mobile-friendly with better responsive design**

---

## Lessons Learned

- How to handle **game logic with DOM updates**
- Importance of **separating concerns** (UI, logic, styles)
- Using `Math.random()` for randomness
- Building a game loop with **events instead of prompts**

---

## Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) for guidance and project inspiration.
