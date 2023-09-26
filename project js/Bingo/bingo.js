const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let random = getRandomIntInclusive(1, 100);

let clickOnItem = document.querySelectorAll("#item");

const newGame = () => {
  let itemArr = document.querySelectorAll("#item");
  for (let i of itemArr) {
    random = getRandomIntInclusive(1, 100);
    i.innerHTML = random;
  }
  newNumber();
};

const newNumber = () => {
  document.querySelector("#newNumBtn").addEventListener("click", (e) => {
    e.preventDefault;
    let newNum = document.querySelector("#bingoNum");
    random = getRandomIntInclusive(1, 100);
    newNum.innerHTML = random;
  });
};

const fullBoard = () => {
  let items = document.querySelectorAll("#item");
  let howFull = 0;
  for (let item of items) {
    if (item.innerHTML == "V") {
      howFull++;
    }
  }
  if (howFull == 9) {
    let gameOver = document.querySelector("#gameOver");
    gameOver.style.display = "block";
  }
};

let items = document.querySelectorAll("#item");
let newNum = document.querySelector("#bingoNum");
items.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.innerHTML == newNum.innerHTML) {
      item.innerHTML = "V";
      fullBoard();
    }
  });
});

window.addEventListener("load", () => {
  newGame();
  newNumber();
});

document.querySelector("#newGameBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let gameOver = document.querySelector("#gameOver");
  gameOver.style.display = "none";
  newGame();
  let newNum = document.querySelector("#bingoNum");
  newNum.innerHTML = "";
});
