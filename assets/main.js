// Initialize an empty tic-tac-toe board as an array of 9 empty strings
let board = ['', '', '', '', '', '', '', '', ''];

// Initialize the current player as "X"
let currentPlayer = "X";

// Initialize the game status as active
let isGameActive = true;

// Define the winning conditions as an array of arrays, each containing three indices of the board that form a winning line
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Get the turn display element by its ID and set its text content to indicate whose turn it is
const turnDisplay = document.getElementById('turn');
turnDisplay.textContent = `It's ${currentPlayer}'s turn`;

// Get all block elements and add a click event listener to each
const blocks = document.getElementsByClassName('block');
for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', function () {
        // If the block is empty and the game is active, play the current player's move and check for a win or a draw
        if (board[i] == '' && isGameActive) {
            play(i);
            checkWin();
            checkDraw();
        }
    });
}

// Function to play a move on the board at the given index
function play(index) {
    // Set the board at the given index to the current player's symbol
    board[index] = currentPlayer;
    // Set the inner text of the block element at the given index to the current player's symbol
    document.getElementById(`block${index}`).textContent = currentPlayer;
    // Switch the current player to the other player
    if (currentPlayer == "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
    // Update the turn display to indicate whose turn it is
    turnDisplay.textContent = `It's ${currentPlayer}'s turn`;
}

// Function to check if there is a win
function checkWin() {
    // Iterate through the winning conditions
    for (let i = 0; i < winningConditions.length; i++) {
        // If the three elements of the winning condition are the same and not empty, the game is over and the winning player is displayed
        if (board[winningConditions[i][0]] == board[winningConditions[i][1]] &&
            board[winningConditions[i][1]] == board[winningConditions[i][2]] &&
            board[winningConditions[i][0]]!= '') {
            isGameActive = false;
            popup.classList.add("openpopup")
            document.getElementById('player').textContent = `Player ${board[winningConditions[i][0]]} wins!`;
            return;
        }
    }
}

// Function to check if there is a draw
function checkDraw() {
    // If the board has no empty spaces and the game is still active, the game is a draw
    if (!board.includes('') && isGameActive) {
        isGameActive = false;
        popup.classList.add("openpopup")
        // document.getElementById('popup').style.display = "block";
        document.getElementById('player').textContent = `It's a draw!`;
    }
}

// Function to reset the game
function reset() {
    // Reset the board, current player, and game status
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = "X";
    isGameActive = true;
    // Reset the inner text of all block elements
    for (let i = 0; i < blocks.length; i++) {
        document.getElementById(`block${i}`).textContent = "";
    }
    // Remove the openpopup class from the popup element
    popup.classList.remove("openpopup")
}