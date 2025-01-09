let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner() {
  if (
    (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== null) || 
    (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== null) || 
    (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== null) ||
    (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== null) || 
    (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== null) || 
    (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== null) || 
    (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== null) || 
    (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== null)    
  ) {
    alert(currentPlayer + " Wins!");
    return true; // Return true if there is a winner
  }

  if (!arr.includes(null)) {
    alert("It's a tie!");
    return true; 
  }

  return false;
}

function handleClick(el) {
  const id = Number(el.id);

  
  if (arr[id] !== null) return;

 
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;


  if (checkWinner()) {
    // Reset the game after a win or tie
    resetGame();
    return;
  }


  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function resetGame() {
  arr = Array(9).fill(null);
  currentPlayer = "X";

 
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.innerText = "";
  });
}


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
