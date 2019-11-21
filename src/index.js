import "./styles.css";

var player1 = "O";
var gameOver = true;
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
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var reset = document.getElementsByClassName("reset");
reset[0].addEventListener("click", retn);
var modal = document.getElementById("modals");
var close = document.getElementsByClassName("close");

function retn(e) {
  console.log("return");
  gameOver = true;
  for (let i = 0; i < 9; i++) {
    board[i].innerHTML = "";
    board[i].addEventListener("click", handleClick);
  }
}
var EachWin = [zero, one, two, three, four, five, six, seven, eight];
function winCond(player) {
  arrayWin.forEach(path => {
    let match = path.filter(id => {
      let tile = EachWin[id];

      if (tile.innerHTML === player) {
        return true;
      } else {
        return false;
      }
    }).length;

    if (match === 3) {
      console.log("hello");
      gameOver = false;
      modal.style.display = "block";
      close[0].onclick = function() {
        modal.style.display = "none";
      };
    }
  });
}
/*function drawLine(a, b, c) {
  a.classList.add(a);
  b.classList.add("win");
  c.classList.add("win");
} */
function handleClick(e) {
  console.log(count);
  if (gameOver === true) {
    document.getElementById(e.target.id).innerHTML = player1;
  }
  winCond(player1);

  if (player1) {
    count++;
    player1 = "X";
  }

  if (count % 2 === 0) {
    player1 = "O";
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
