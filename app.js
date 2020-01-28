let cells = document.querySelectorAll('.row > div');
let currentPlayer = 'X';
let moves = 0;
let isGameOver = false;
let winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [6, 4, 2]
];

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClick);
}
function cellClick() {

    if (isGameOver === true) {
        console.log('Game Over')
        return;
    }
    // draw player
    event.target.textContent = currentPlayer;

    // increments
    moves++

    //if player won
    checkWinner();

    // toggles for next move
    togglePlayer();





}

function checkWinner() {
    if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X') {
        console.log('X Won!');
        isGameOVer = true;
    } else if (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X') {
        console.log('X Won!');
        isGameOVer = true;
    } else if (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') {
        console.log('X Won!');
        isGameOVer = true;
    } else if (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') {
        console.log('X Won!');
        isGameOVer = true;
    } else if (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') {
        console.log('X Won!');
        isGameOVer = true;
    } else if (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') {
        console.log('X Won!');
        isGameOVer = true;
    } else if (cells[6].textContent === 'X' && cells[4].textContent === 'X' && cells[2].textContent === 'X') {
        console.log('X Won!');
        isGameOVer = true;
    } else if (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O') {
        console.log('O Won!');
        isGameOVer = true;
    } else if (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') {
        console.log('O Won!');
        isGameOVer = true;
    } else if (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {
        console.log('O Won!');
        isGameOVer = true;
    } else if (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {
        console.log('O Won!');
        isGameOVer = true;
    } else if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
        console.log('O Won!');
        isGameOVer = true;
    } else if (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') {
        console.log('O Won!');
        isGameOVer = true;
    } else if (cells[6].textContent === 'O' && cells[4].textContent === 'O' && cells[2].textContent === 'O') {
        console.log('O Won!');
        isGameOVer = true;
    } else if (moves === 9) {
        console.log('DRAW')
        isGameOver = true;
    }
}



function togglePlayer() {

    if (currentPlayer === 'X') {
        currentPlayer = 'O';

    } else {
        currentPlayer = 'X';
    }
}
