import "./styles.css";

var player1 = "O";
var player2 = "X";

function handleClick() {
  console.log(player1);
  board.innerHTML = player1;
}
var board = document.getElementsByClassName("board")[0];

board.addEventListener("click", handleClick);
