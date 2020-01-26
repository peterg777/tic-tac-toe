let cells = document.querySelectorAll('.row > div');
let currentPlayer = 'x';
let moves = 0;
let isGameOver = false;
let winningCombinations = [
    [1, 2, 3],[4, 5, 6],[7, 8, 9],
    [1, 4, 7],[2, 5, 8],[3, 6, 9],
    [1, 5, 9],[3, 5, 7]
  ];

for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', cellClick);
}
 function cellClick() {
     event.target.textContent =  currentPlayer;

     togglePlayer();
 
     if(cells[0].textContent === 'X' || cells[1].textContent === 'X' || cells[2].textContent === 'X') {}

 }

 function checkWinner(){
     if(cells[0].textContent === 'X' || cells[1].textContent === 'X' || cells[2].textContent === 'X') {}
        
  }

 
 

 function togglePlayer() {

 if (currentPlayer === 'x') {
     currentPlayer = '0';

 } else {
     currentPlayer = 'x';
 }

}

 
