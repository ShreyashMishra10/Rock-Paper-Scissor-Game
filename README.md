# Rock Paper Scissors Game 🪨 📄 ✂️

A modern, web-based version of the classic Rock Paper Scissors game. This project focuses on clean JavaScript logic, DOM manipulation, and data persistence using Local Storage.

> This game was built from scratch while learning JavaScript. Documenting my progress and logic improvements day by day.

---

## 🚀 Features
* **Real-time Score Tracking:** Tracks Wins, Losses, and Ties.
* **Data Persistence:** Uses `localStorage` to save your score even after refreshing the page.
* **Interactive UI:** Dynamic updates to the DOM to show results and move icons (emojis).
* **Responsive Design:** Styled with CSS for a clean, dark-mode aesthetic.

## 🛠️ Technologies Used
* **HTML5:** Structure of the game.
* **CSS3:** Custom styling and button animations.
* **JavaScript (ES6):** Game logic, objects, and event handling.

## 📂 Project Structure
```plaintext
├── images/             # Folder containing move icons
├── index.html          # Main game interface
├── game.css            # Styling and layout
└── gamescript.js       # Game logic and Local Storage management
```

---

## 📝 How It Works

### Computer Logic
The computer generates a random move using `Math.random()`. This number is then divided into thirds to assign **Rock**, **Paper**, or **Scissors**.



### Comparison
The game uses conditional `if-else` statements to compare the player's choice against the computer's choice to determine the winner.

### State Management
The score is stored in a JavaScript object. To ensure the player doesn't lose their progress, it is synced with the browser's **Local Storage**.

```javascript
let score = JSON.parse(localStorage.getItem('score')) || { 
  wins: 0, 
  losses: 0, 
  ties: 0 
};
```

---

### UI Updates
A dedicated updateScore() function is used to manipulate the DOM. This ensures that every time the score changes, the text on the screen is updated immediately without refreshing the page.

---

## 🎮 How to Run
**Clone the repository to your local machine:**

```
Bash
git clone https://github.com/your-username/rock-paper-scissors.git
```
### Navigate to the project folder:

```
Bash
cd rock-paper-scissors
```
---

### Launch the game:
 Simply open the index.html file in any modern web browser (Chrome, Firefox, or Edge).

 Play! Click the emoji buttons to start a round and track your progress.
