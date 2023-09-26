window.addEventListener("load", () => {
  document.querySelector("#addBtn").addEventListener("click", (e) => {
    e.preventDefault;
    let { value } = document.querySelector("#input");
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    if (value) {
      li.innerHTML = value;
      ul.appendChild(li);
    }
    let input = document.querySelector("#input");
    input.value = "";
  });

  document.querySelector("#clearBtn").addEventListener("click", (e) => {
    e.preventDefault;
    let { value } = document.querySelector("#input");
    let li = document.querySelectorAll("li");
    for (let itemR of li) {
      if (itemR.innerHTML == value) {
        itemR.remove();
      }
    }
    let input = document.querySelector("#input");
    input.value = "";
  });

  document.querySelector("#importBtn").addEventListener("click", (e) => {
    e.preventDefault;
    let { value } = document.querySelector("#input");
    let li = document.querySelectorAll("li");
    for (let itemI of li) {
      if (itemI.innerHTML == value) {
        itemI.style.color = "red";
      }
    }
    let input = document.querySelector("#input");
    input.value = "";
  });

  document.querySelector("#saveBtn").addEventListener("click", () => {
    let list = document.querySelectorAll("li");
    let saveArr = [];
    for (let itemS of list) {
      saveArr.push(itemS.innerHTML);
    }
    localStorage.setItem("theList", JSON.stringify(saveArr));
  });
});
