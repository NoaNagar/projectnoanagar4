let grade = 0;

let answers = document.querySelectorAll(".question");
answers.forEach((radioButton) => {
  radioButton.addEventListener("click", () => {
    let selectedValue = radioButton.value;
    if (selectedValue == "true") {
      grade++;
    }
  });
});

window.addEventListener("load", () => {
  document.querySelector("#finishBtn").addEventListener("click", (e) => {
    e.preventDefault();
    let result = document.querySelector("#result");
    if (grade < 4) {
      result.style.backgroundColor = "red";
      result.innerHTML = `ענית נכון על ${grade} שאלות מתוך 10 🥴`;
    }
    if (grade < 8 && grade > 3) {
      result.style.backgroundColor = "orange";
      result.innerHTML = `ענית נכון על ${grade} שאלות מתוך 10 😶`;
    }
    if (grade <= 10 && grade > 7) {
      result.style.backgroundColor = "green";
      result.innerHTML = `ענית נכון על ${grade} שאלות מתוך 10 😀`;
    }
  });
});
