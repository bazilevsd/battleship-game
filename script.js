console.log("begin");

const body = document.querySelector("body");
const player1Div = document.querySelector("#player1");
const player2Div = document.querySelector("#player2");
const player1score = document.querySelector(".player1score");
const player2score = document.querySelector(".player2score");
const player1setup = document.querySelector("#player1setup");
const player2setup = document.querySelector("#player2setup");
const setPlayer1nameButton = document.querySelector(".player1button");
const setPlayer2nameButton = document.querySelector(".player2button");
const shipSetUpPlayer1 = document.querySelector("#shipSeUpPlayer1");
const shipSetUpPlayer2 = document.querySelector("#shipSetUpPlayer2");
//const player1gameMode = document.querySelector("#player1gameMode");
const score1h3 = document.querySelector(".score1");
const score2h3 = document.querySelector(".score2");
const next = document.querySelector("#next");
const next1 = document.querySelector("#next1");
const next2 = document.querySelector("#next2");
const next3 = document.querySelector("#next3");
const next4 = document.querySelector("#next4");
const startBattlebutton = document.querySelector(".startBattle");
const startNewGame = document.querySelector(".startNewGame");

let score1 = 0;
let score2 = 0;
renderPlayerScore = () => {
  score1h3.innerHTML = score1;
};
renderPlayerScore2 = () => {
  score2h3.innerHTML = score2;
};

const toggleModal = () => modal.classList.toggle("open");

class Player {
  constructor(name, turn) {
    this.name = name;
    this.turn = turn;
    this.ships = ["Ship1", "Ship2", "Ship3", "Ship4", "Ship5"];
    this.hitShips = [];
  }
  addShips(cell) {
    if (this.ships.length > 0) {
      const img = document.createElement("img");
      img.src = "ship1.png";
      img.style.maxWidth = "100%";
      img.style.maxHeight = "100%";
      cell.innerHTML = "";
      cell.appendChild(img);
      this.ships.shift();
    } else {
      alert(`You dont have any more ships to add`);
      return;
    }
  }
  getPlayerTurn() {
    return this.turn;
  }
  attack(opponentCell) {
    if (opponentCell.style.backgroundColor != "red") {
      if (opponentCell.children.length != 0) {
        opponentCell.style.backgroundColor = "red";
        this.turn = true;
        this.hitShips.push("Sunk Ship");
      } else {
        opponentCell.style.backgroundColor = "pink";
        this.turn = false;
      }
    } else {
      return;
    }
  }
}

class Grid {
  constructor(gridSize) {
    this.grid = [];
    this.gridSize = gridSize;
    this.init();
  }
  init() {
    for (let i = 0; i < this.gridSize; i++) {
      this.grid[i] = [];
      for (let y = 0; y < this.gridSize; y++) {
        this.grid[i][y] = " ";
      }
    }
  }
  getGrid() {
    return this.grid;
  }
  printGrid(gridArray) {
    const playerDiv = document.createElement("div");
    for (let i = 0; i < gridArray.length; i++) {
      const tr = document.createElement("tr");
      let row = gridArray[i];
      for (let y = 0; y < row.length; y++) {
        const cell = row[y];
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      }
      playerDiv.appendChild(tr);
    }
    return playerDiv;
  }
}

const player1Grid = new Grid(8);
console.log("51", player1Grid);
const player2Grid = new Grid(8);
console.log("53", player2Grid);

const player1 = new Player("bob", true);
const player2 = new Player("sam", false);

const currentGridPlayer1 = player1Grid.getGrid();
console.log("56", currentGridPlayer1);
player1Div.appendChild(player1Grid.printGrid(currentGridPlayer1));
console.log("60", player1Div);
const player1td = document.querySelectorAll("#player1 tr td");
console.log("62", player1td);
for (let i = 0; i < player1td.length; i++) {
  player1td[i].style.backgroundColor = "rgb(21, 199, 239)";
  player1td[i].style.height = "38px";
  player1td[i].style.width = "38px";
  player1td[i].style.border = "1px solid";
  player1td[i].style.borderRadius = "10px";
}
const currentGridPlayer2 = player2Grid.getGrid();
console.log(currentGridPlayer2);
player2Div.appendChild(player2Grid.printGrid(currentGridPlayer2));
console.log("109", player2Div);
const player2td = document.querySelectorAll("#player2 tr td");
console.log("111", player2td);
for (let i = 0; i < player2td.length; i++) {
  player2td[i].style.backgroundColor = "rgb(21, 199, 239)";
  player2td[i].style.height = "38px";
  player2td[i].style.width = "38px";
  player2td[i].style.border = "1px solid";
  player2td[i].style.borderRadius = "10px";
}

setPlayer1nameButton.addEventListener("click", handleAddName1);
setPlayer2nameButton.addEventListener("click", handleAddName2);
function handleAddName1(e) {
  const input1 = document.querySelector(".player1input");
  const h2 = document.querySelector("#player1setup h2");
  const h22 = document.querySelector("#player1 h2");
  h2.textContent = input1.value;
  h22.textContent = input1.value;
  input1.style.display = "none";
  setPlayer1nameButton.style.visibility = "hidden";
}
function handleAddName2(e) {
  const input2 = document.querySelector(".player2input");
  const p2h2 = document.querySelector("#player2setup h2");
  const p2h22 = document.querySelector("#player2 h2");
  p2h2.textContent = input2.value;
  p2h22.textContent = input2.value;
  input2.style.display = "none";
  setPlayer2nameButton.style.visibility = "hidden";
}
const openPlayer1setup = () => {
  player1setup.classList.add("open");
  toggleModal();
};

const openPlayer2setup = () => {
  player2setup.classList.add("open");
  player1setup.classList.remove("open");
};

function setShipsPlayer1(e) {
  if (player1.ships.length > 0) {
    player1.addShips(e.target);
    e.target.removeEventListener("click", setShipsPlayer1);
  } else {
    alert("all ships are set");
    for (let i = 0; i < player1td.length; i++) {
      player1td[i].removeEventListener("click", setShipsPlayer1);
    }
  }
}
function setShipsPlayer2(e) {
  if (player2.ships.length > 0) {
    player2.addShips(e.target);
    e.target.removeEventListener("click", setShipsPlayer2);
  } else {
    alert("all ships are set");
    for (let i = 0; i < player2td.length; i++) {
      player2td[i].removeEventListener("click", setShipsPlayer2);
    }
  }
}

const openPlayer1Div = () => {
  openPlayer1();
  shipSetUpPlayer1.classList.add("open");
  player2setup.classList.remove("open");
  for (let i = 0; i < player1td.length; i++) {
    player1td[i].addEventListener("click", setShipsPlayer1);
  }
};

const openPlayer2Div = () => {
  openPlayer2();
  shipSetUpPlayer2.classList.add("open");
  shipSetUpPlayer1.classList.remove("open");
  for (let i = 0; i < player2td.length; i++) {
    player2td[i].addEventListener("click", setShipsPlayer2);
  }
};

function attackPlayer1(e) {
  if (player1.hitShips.length < 5) {
    console.log(player1.hitShips);
    console.log("Player turn bulean ", player1.getPlayerTurn());
    if (player1.getPlayerTurn() === true) {
      player1.attack(e.target);
      e.target.removeEventListener("click", attackPlayer1);
      console.log(e.target);
      console.log(player1.turn);
      if (player1.turn === false) {
        //attackPlayer1;
        console.log("we are here");
        for (let i = 0; i < player2td.length; i++) {
          player2td[i].removeEventListener("click", attackPlayer1);
        }
        player2.turn = true;
        openPlayer2gameMode();
      }
    }
    // else {
    //   attackPlayer1;
    //   console.log("we are here");
    //   for (let i = 0; i < player2td.length; i++) {
    //     player2td[i].removeEventListener("click", attackPlayer1);
    //   }
    //   player2.turn = true;
    //   openPlayer2gameMode();
    // }
  } else {
    alert("Player 1 won");
    startBattlebutton.disabled = false;
    score1 += 10;
    renderPlayerScore();
  }
}
function attackPlayer2(e) {
  if (player2.hitShips.length < 5) {
    if (player2.getPlayerTurn() === true) {
      player2.attack(e.target);
      e.target.removeEventListener("click", attackPlayer2);
      console.log(e.target);
      if (player2.turn === false) {
        for (let i = 0; i < player1td.length; i++) {
          player1td[i].removeEventListener("click", attackPlayer2);
        }
        player1.turn = true;
        openPlayer1gameMode();
      }
    }
    // else {
    //   for (let i = 0; i < player1td.length; i++) {
    //     player1td[i].removeEventListener("click", attackPlayer2);
    //   }
    //   player1.turn = true;
    //   openPlayer1gameMode();
    // }
  } else {
    alert("Player 2 won");
    startBattlebutton.disabled = false;
    score2 += 10;
    renderPlayerScore2();
  }
}

const openPlayer1gameMode = () => {
  hidePlayer2();
  openPlayer1();
  shipSetUpPlayer1.classList.add("open");
  shipSetUpPlayer2.classList.add("open");
  for (let i = 0; i < player2td.length; i++) {
    player2td[i].addEventListener("click", attackPlayer1);
  }
  next3.style.visibility = "hidden";
  next4.style.visibility = "hidden";
};
const openPlayer2gameMode = () => {
  hidePlayer1();
  openPlayer2();
  for (let i = 0; i < player2td.length; i++) {
    player1td[i].addEventListener("click", attackPlayer2);
  }
};
function hidePlayer1() {
  for (let i = 0; i < player1td.length; i++) {
    player1td[i].style.contentVisibility = "hidden";
  }
}
function hidePlayer2() {
  for (let i = 0; i < player2td.length; i++) {
    player2td[i].style.contentVisibility = "hidden";
  }
}
function openPlayer1() {
  for (let i = 0; i < player1td.length; i++) {
    player1td[i].style.contentVisibility = "visible";
  }
}
function openPlayer2() {
  for (let i = 0; i < player2td.length; i++) {
    player2td[i].style.contentVisibility = "visible";
  }
}

function startBattle() {
  toggleModal();
  startBattlebutton.disabled = true;
  shipSetUpPlayer1.classList.remove("open");
  shipSetUpPlayer2.classList.remove("open");
  next3.style.visibility = "visible";
  next4.style.visibility = "visible";
  for (let i = 0; i < player1td.length; i++) {
    player1td[i].removeEventListener("click", attackPlayer2);
  }
  for (let i = 0; i < player2td.length; i++) {
    player2td[i].removeEventListener("click", attackPlayer1);
  }
  for (let i = 0; i < player1td.length; i++) {
    //if (player1td[i].children.length != 0) {
    player1td[i].textContent = "";
    //}
    //player1Div.appendChild(player1Grid.printGrid(currentGridPlayer1));
    player1td[i].style.backgroundColor = "rgb(21, 199, 239)";
    player1td[i].style.height = "38px";
    player1td[i].style.width = "38px";
    player1td[i].style.border = "1px solid";
    player1td[i].style.borderRadius = "10px";
  }

  for (let i = 0; i < player2td.length; i++) {
    player2td[i].textContent = "";
    player2td[i].style.backgroundColor = "rgb(21, 199, 239)";
    player2td[i].style.height = "38px";
    player2td[i].style.width = "38px";
    player2td[i].style.border = "1px solid";
    player2td[i].style.borderRadius = "10px";
  }
  player1.ships = ["Ship1", "Ship2", "Ship3", "Ship4", "Ship5"];
  player1.hitShips = [];
  player2.ships = ["Ship1", "Ship2", "Ship3", "Ship4", "Ship5"];
  player2.hitShips = [];
}

next.addEventListener("click", openPlayer1setup);
next1.addEventListener("click", openPlayer2setup);
next2.addEventListener("click", openPlayer1Div);
next3.addEventListener("click", openPlayer2Div);
next4.addEventListener("click", openPlayer1gameMode);

startBattlebutton.addEventListener("click", startBattle);

windowReload = () => {
  window.location.reload();
};

startNewGame.addEventListener("click", windowReload);
window.onload = () => {
  toggleModal();
  renderPlayerScore();
  renderPlayerScore2();
};
