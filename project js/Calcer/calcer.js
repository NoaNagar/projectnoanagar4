const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let save = [
  {
    num1: Number,
    num2: Number,
    answer: Number,
  },
];

let n1 = 0;
let n2 = 0;

const newGame = () => {
  let { value: valueMin } = document.querySelector("#myMin");
  let { value: valueMax } = document.querySelector("#myMax");
  n1 = getRandomIntInclusive(+valueMin, +valueMax);
  n2 = getRandomIntInclusive(+valueMin, +valueMax);
  let quest = document.querySelector("#quest");
  let operation = document.querySelector("#mathSelect");
  let operationValue = operation.value;
  quest.innerText = `${n1} ${operationValue} ${n2} =`;
  let inpAnswer = document.querySelector("#answer");
  inpAnswer.value = "";
  inpAnswer.style.backgroundColor = "white";
};

document.querySelector("#numBtn").addEventListener("click", (e) => {
  e.preventDefault();
  newGame();
});
document.querySelector("#newBtn").addEventListener("click", (e) => {
  e.preventDefault();
  newGame();
});

const math = () => {
  document.querySelector("#checkBtn").addEventListener("click", (e) => {
    e.preventDefault();
    let { value } = document.querySelector("#answer");
    let inpAnswer = document.querySelector("#answer");
    let history = document.querySelector("#history");
    let operation = document.querySelector("#mathSelect");
    let operationValue = operation.value;
    let newAnswer = document.createElement("div");
    history.appendChild(newAnswer);

    if (operationValue == "+") {
      if (n1 + n2 == value) {
        inpAnswer.style.backgroundColor = "green";
        newAnswer.innerHTML = `${n1} + ${n2} = ${value}`;
        newAnswer.style.backgroundColor = "green";
      } else {
        inpAnswer.style.backgroundColor = "red";
        newAnswer.innerHTML = `${n1} + ${n2} = ${value}`;
        newAnswer.style.backgroundColor = "red";
      }
    } else if (operationValue == "-") {
      if (n1 - n2 == value) {
        inpAnswer.style.backgroundColor = "green";
        newAnswer.innerHTML = `${n1} - ${n2} = ${value}`;
        newAnswer.style.backgroundColor = "green";
      } else {
        inpAnswer.style.backgroundColor = "red";
        newAnswer.innerHTML = `${n1} - ${n2} = ${value}`;
        newAnswer.style.backgroundColor = "red";
      }
    } else if (operationValue == "*") {
      if (n1 * n2 == value) {
        inpAnswer.style.backgroundColor = "green";
        newAnswer.innerHTML = `${n1} * ${n2} = ${value}`;
        newAnswer.style.backgroundColor = "green";
      } else {
        inpAnswer.style.backgroundColor = "red";
        newAnswer.innerHTML = `${n1} * ${n2} = ${value}`;
        newAnswer.style.backgroundColor = "red";
      }
    } else if (operationValue == "/") {
      if (n1 / n2 == value) {
        inpAnswer.style.backgroundColor = "green";
        newAnswer.innerHTML = `${n1} / ${n2} = ${value}`;
        newAnswer.style.backgroundColor = "green";
      } else {
        inpAnswer.style.backgroundColor = "red";
        newAnswer.innerHTML = `${n1} / ${n2} = ${value}`;
        newAnswer.style.backgroundColor = "red";
      }
    }

    save = [...save, { num1: n1, num2: n2, answer: value }];
    saveData();
  });
};

const saveData = () => {
  localStorage.setItem("calcs", JSON.stringify(save));
};

window.addEventListener("load", () => {
  math();
  document.querySelector("#start").addEventListener("click", () => {
    let shadow = document.querySelector(".shadow");
    shadow.style.display = "none";
    let { value: nameV } = document.querySelector("#nameInp");
    let h2 = document.querySelector("#welcome > h2");
    h2.innerHTML = `welcome ${nameV}!`;
    let h3 = document.querySelector("#welcome > h3");
    h3.style.display = "block";
  });
});
