let userArr = [];
let likeArr = [];

class EntroUser {
  fullName;
  email;
  phone;
  city;
  street;
  login;
  constructor(fullName, email, phone, city, street) {
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.city = city;
    this.street = street;
  }
}

class LoginUser {
  fullName;
  email;
  constructor(fullName, email) {
    this.fullName = fullName;
    this.email = email;
  }
}

const saveData = () => {
  localStorage.setItem("users", JSON.stringify(userArr));
};

document.querySelector("#singinBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let { value: nameValue } = document.querySelector("#nameInput");
  let { value: emailValue } = document.querySelector("#emailInput");
  let { value: phoneValue } = document.querySelector("#phoneInput");
  let { value: cityValue } = document.querySelector("#cityInput");
  let { value: streetValue } = document.querySelector("#streetInput");
  if (nameValue && emailValue && phoneValue && cityValue && streetValue) {
    userArr = [
      new EntroUser(nameValue, emailValue, phoneValue, cityValue, streetValue),
    ];
    saveData();
    let Forms = document.querySelector("#forms");
    Forms.style.display = "none";
  }
});

document.querySelector("#loginBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let { value: nameValue } = document.querySelector("#nameLoginInp");
  let { value: emailValue } = document.querySelector("#emailLoginInp");
  let oldUser = localStorage.getItem("users", userArr);
  oldUser = JSON.parse(oldUser);
  if (nameValue && emailValue) {
    if (nameValue == oldUser[0].fullName && emailValue == oldUser[0].email) {
      let forms = document.querySelector("#forms");
      forms.style.display = "none";
    }
  }
});

window.addEventListener("load", () => {
  theme();
  let icons = document.querySelectorAll("#icon");
  icons.forEach((div) => {
    div.addEventListener("click", () => {
      div.innerHTML = "❤️";
    });
  });
});

let darkThemeBtn = document.querySelector("#darkThemeBtn");
let lightThemeBtn = document.querySelector("#lightThemeBtn");
let wTheme = "light";

darkThemeBtn.addEventListener("click", () => {
  darkThemeBtn.style.backgroundColor = "#c2c2c2";
  lightThemeBtn.style.backgroundColor = "#fff";
  document.body.style.backgroundColor = "black";
  wTheme = "dark";
  localStorage.setItem("theme", wTheme);
});

lightThemeBtn.addEventListener("click", () => {
  lightThemeBtn.style.backgroundColor = "#c2c2c2";
  darkThemeBtn.style.backgroundColor = "#fff";
  document.body.style.backgroundColor = "#fff";
  wTheme = "light";
  localStorage.setItem("theme", wTheme);
});

const theme = () => {
  let getTheme = localStorage.getItem("theme", wTheme);
  if (getTheme == "dark") {
    darkThemeBtn.style.backgroundColor = "#c2c2c2";
    lightThemeBtn.style.backgroundColor = "#fff";
    document.body.style.backgroundColor = "black";
  } else if (getTheme == "light") {
    lightThemeBtn.style.backgroundColor = "#c2c2c2";
    darkThemeBtn.style.backgroundColor = "#fff";
    document.body.style.backgroundColor = "#fff";
  }
};
