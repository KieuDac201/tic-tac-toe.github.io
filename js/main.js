import Game from "./game.js";
import View from "./view.js";

let game = new Game();
let view = new View();
let winner = false;

let boxs = document.querySelectorAll(".box");

boxs.forEach((box) => {
  box.addEventListener("click", handleClick);
});

function handleClick(e) {
  console.log("click");
  if (!winner) {
    const index = e.target.dataset.index;
    const value = game.makeMove(index);
    if (value) {
      view.updateView(game.data, index);
      winner = game.checkWinner(view.updateWinnerView);
      console.log(winner);
      game.changeTurn(view.changeTitle);
    }
  }
}

document.querySelector("button").addEventListener("click", () => {
  game.handleRestart();
  view.handleRestartView();
  winner = false;
});
