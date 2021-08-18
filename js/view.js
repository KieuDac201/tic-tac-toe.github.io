class View {
  updateView(data, index) {
    const boxClicked = document.querySelector(`.box[data-index="${index}"]`);
    console.log(index);
    if (data[index] === "X") {
      boxClicked.classList.add("deeppink");
      boxClicked.innerHTML = `X`;
    } else {
      boxClicked.classList.add("blue");
      boxClicked.innerHTML = `O`;
    }
  }

  updateWinnerView(arr) {
    for (let x of arr) {
      document.querySelector(`.box[data-index="${x}"]`).classList.add("winner");
    }
  }

  changeTitle(turn) {
    let playX = document.querySelector(".player-X");
    let playO = document.querySelector(".player-O");
    if (turn === "X") {
      playO.classList.remove("active");
      playX.classList.add("active");
    } else {
      playX.classList.remove("active");
      playO.classList.add("active");
    }
  }

  handleRestartView() {
    let boxs = document.querySelectorAll(".box");
    let playX = document.querySelector(".player-X");
    let playO = document.querySelector(".player-O");
    playX.classList.add("active");
    playO.classList.remove("active");
    boxs.forEach((box) => {
      box.textContent = "";
      box.classList.remove("blue", "winner", "deeppink");
    });
  }
}

export default View;
