/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


const BOARD_SIZE = 15;

let currentPlayer = "X";
let timeLeft = 60;
let timer = null;

const board = document.getElementById("board");
const timerElement = document.getElementById("timer");
const turnText = document.getElementById("turnText");
const timerStatus = document.getElementById("timerStatus");


/* =========================
   CREATE BOARD
   ========================= */

function createBoard() {

    for (let row = 0; row < BOARD_SIZE; row++) {

        for (let col = 0; col < BOARD_SIZE; col++) {

            const cell = document.createElement("div");

            cell.classList.add("cell");

            cell.dataset.row = row;
            cell.dataset.col = col;

            cell.addEventListener("click", () => {

                makeMove(cell);

            });

            board.appendChild(cell);
        }
    }
}


/* =========================
   MAKE MOVE
   ========================= */

function makeMove(cell) {

    if (cell.textContent !== "") {
        return;
    }

    cell.textContent = currentPlayer;

    cell.classList.add(
        currentPlayer === "X"
            ? "x"
            : "o"
    );

    // Demo đổi lượt
    currentPlayer =
        currentPlayer === "X"
            ? "O"
            : "X";

    updateTurn();

    resetTimer();
}


/* =========================
   TURN
   ========================= */

function updateTurn() {

    if (currentPlayer === "X") {

        turnText.textContent = "Your Turn";

        timerStatus.textContent = "Your turn";

    } else {

        turnText.textContent = "Opponent's Turn";

        timerStatus.textContent = "Opponent's turn";

    }
}


/* =========================
   TIMER
   ========================= */

function startTimer() {

    clearInterval(timer);

    timer = setInterval(() => {

        timeLeft--;

        timerElement.textContent = timeLeft;

        if (timeLeft <= 10) {

            document
                .querySelector(".timer-circle")
                .classList.add("timer-danger");

        }

        if (timeLeft <= 0) {

            clearInterval(timer);

            timerStatus.textContent =
                "Time's up!";

            timeLeft = 60;

            timerElement.textContent = timeLeft;

            document
                .querySelector(".timer-circle")
                .classList.remove("timer-danger");

        }

    }, 1000);
}


/* =========================
   RESET TIMER
   ========================= */

function resetTimer() {

    timeLeft = 60;

    timerElement.textContent = timeLeft;

    document
        .querySelector(".timer-circle")
        .classList.remove("timer-danger");

    startTimer();
}


/* =========================
   EMOJI
   ========================= */

function sendEmoji(emoji) {

    const popup =
        document.getElementById("emojiPopup");

    popup.textContent = emoji;

    popup.classList.remove("show");

    // Force animation restart
    void popup.offsetWidth;

    popup.classList.add("show");
}


/* =========================
   LEAVE GAME
   ========================= */

function leaveGame() {

    if (confirm("Leave this game?")) {

        window.location.href = "game";

    }

}


/* =========================
   START
   ========================= */

createBoard();

startTimer();
