import "./styles.css";

var player1 = "O";
var player2 = "X";
var arrayWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

var zero = document.getElementById("0");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3").innerHTML;
var four = document.getElementById("4").innerHTML;
var five = document.getElementById("5").innerHTML;
var six = document.getElementById("6").innerHTML;
var seven = document.getElementById("7").innerHTML;
var eight = document.getElementById("8").innerHTML;

function winCond() {
  if (zero) {
    console.log(one.innerHTML);
  }

  /* var zero = document.getElementById("0");
  var one = document.getElementById("1");
  var two = document.getElementById("2");
  if (
    zero.innerHTML === one.innerHTML &&
    zero.innerHTML === two.innerHTML &&
    one.innerHTML === two.innerHTML
  ) {
    console.log("hello");
  } */
}

function handleClick(e) {
  console.log(count);
  document.getElementById(e.target.id).innerHTML = player1;
  if (player1) {
    count++;

    winCond();
  }
  if (count % 2 === 0) {
    document.getElementById(e.target.id).innerHTML = player2;
  }

  document
    .getElementById(e.target.id)
    .removeEventListener("click", handleClick);
}

var count = 0;

var board = document.querySelectorAll(".board");
for (let i = 0; i < board.length; i++) {
  board[i].addEventListener("click", handleClick);
}
