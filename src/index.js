import "./styles.css";

var player1 = "O";
var player2 = "X";

function handleClick(e) {
  console.log(count);
  document.getElementById(e.target.id).innerHTML = player1;
  if (player1) {
    count++;
  }
  if (count % 2 === 0) {
    document.getElementById(e.target.id).innerHTML = player2;
  }
  document
    .getElementById(e.target.id)
    .removeEventListener("click", handleClick);
}
/*function removeClick(e) {
  if(document.getElementById(e.target.id).innerHTML = player1 || player2) {
    
  }
} */
var count = 0;

var board = document.querySelectorAll(".board");
for (let i = 0; i < board.length; i++) {
  board[i].addEventListener("click", handleClick);

  /*board[i].addEventListener("click", function() {
    board[i].innerHTML = player1;
    if (board[i].innerHTML === player1) {
      count++;
      console.log(count);
    }
    if (count % 2 === 0) {
      board[i].innerHTML = player2;
    }
  });/*

  /* board[i].onclick = function() {
    board[i].innerHTML = player1;
     if (board[i].innerHTML === player1) {
      count++;
      console.log(count);
    }
    if (count % 2 === 0) {
      board[i].innerHTML = player2;
    } 
  }; */
}
