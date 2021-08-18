class Game {
  constructor() {
    this.data = new Array(9).fill(null);
    this.turn = "X";
  }

  changeTurn(changeTitle) {
    if (this.turn === "X") {
      this.turn = "O";
    } else {
      this.turn = "X";
    }
    changeTitle(this.turn);
  }

  makeMove(index) {
    if (this.data[index] === "X" || this.data[index] === "O") {
      return false;
    }
    this.data[index] = this.turn;
    return true;
  }

  checkWinner(updateWinnerView) {
    const winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let winner of winners) {
      const [a, b, c] = winner;
      if (
        this.data[a] &&
        this.data[a] === this.data[b] &&
        this.data[a] === this.data[c]
      ) {
        updateWinnerView(winner);
        return true;
      }
    }
  }

  handleRestart() {
    this.data = new Array(9).fill(null);
    this.turn = "X";
  }
}

export default Game;
