let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner() {
  // Check rows, columns, and diagonals for a win
  if (
    (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== null) || // Top row
    (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== null) || // Middle row
    (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== null) || // Bottom row
    (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== null) || // Left column
    (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== null) || // Middle column
    (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== null) || // Right column
    (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== null) || // Top-left to bottom-right diagonal
    (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== null)    // Top-right to bottom-left diagonal
  ) {
    alert(currentPlayer + " Wins!");
    return true; // Return true if there is a winner
  }

  if (!arr.includes(null)) {
    alert("It's a tie!");
    return true; // Return true if the game is a tie
  }

  return false; // Return false if the game is not yet over
}

function handleClick(el) {
  const id = Number(el.id);

  // If the cell is already filled, do nothing
  if (arr[id] !== null) return;

  // Update the board and UI
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;

  // Check for a winner
  if (checkWinner()) {
    // Reset the game after a win or tie
    resetGame();
    return;
  }

  // Switch player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function resetGame() {
  arr = Array(9).fill(null);
  currentPlayer = "X";

  // Clear the UI
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.innerText = "";
  });
}

// Set up the game board
document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.id = i;
    cell.className = "cell";
    cell.addEventListener("click", () => handleClick(cell));
    board.appendChild(cell);
  }
});
