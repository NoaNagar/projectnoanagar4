let elmsArr = [];

const createElm = (
  tagName,
  content,
  width,
  height,
  color,
  size,
  background,
  border,
  borderRadius,
  margin,
  padding,
  boxShadow,
  textAlign,
  id
) => {
  let pageDiv = document.getElementById("pageDiv");
  let newElm = document.createElement(tagName);
  pageDiv.appendChild(newElm);
  newElm.innerText = content;
  newElm.style.width = width + "px";
  newElm.style.height = height + "px";
  newElm.style.color = color;
  newElm.style.fontSize = size + "px";
  newElm.style.backgroundColor = background;
  newElm.style.border = border;
  newElm.style.borderRadius = borderRadius + "px";
  newElm.style.margin = margin + "px";
  newElm.style.padding = padding + "px";
  newElm.style.boxShadow = boxShadow;
  newElm.style.textAlign = textAlign;
  newElm.id = id;
  elmsArr.push({
    tagName: tagName,
    content: content,
    width: width,
    height: height,
    color: color,
    size: size,
    background: background,
    border: border,
    borderRadius: borderRadius,
    margin: margin,
    padding: padding,
    boxShadow: boxShadow,
    textAlign: textAlign,
    id: id,
  });
  console.log("elmsArr", elmsArr);
};

const clearPage = () => {
  let pageDiv = document.querySelector("#pageDiv");
  pageDiv.innerHTML = ""; // remove all tags
};

let newElmsArr = []; // clear the array
const restorePage = () => {
  let jsonStr = localStorage.getItem("tags"); // get string json from localStorage
  newElmsArr = JSON.parse(jsonStr); //convert from json to array
  let clearTag = document.querySelector("#inputTag");
  clearTag.value = "";
  let clearContent = document.querySelector("#inputContent");
  clearContent.value = "";
  let clearWidth = document.querySelector("#inputWidth");
  clearWidth.value = "";
  let clearHeight = document.querySelector("#inputHeight");
  clearHeight.value = "";
  let clearColor = document.querySelector("#inputColor");
  clearColor.value = "";
  let clearSize = document.querySelector("#inputSize");
  clearSize.value = "";
  let clearBackground = document.querySelector("#inputBackground");
  clearBackground.value = "";
  let clearBorder = document.querySelector("#inputBorder");
  clearBorder.value = "";
  let clearBorderRadius = document.querySelector("#inputBorderRadius");
  clearBorderRadius.value = "";
  let clearMargin = document.querySelector("#inputMargin");
  clearMargin.value = "";
  let clearPadding = document.querySelector("#inputPadding");
  clearPadding.value = "";
  let clearBoxShadow = document.querySelector("#inputBoxShadow");
  clearBoxShadow.value = "";
  let clearTextAlign = document.querySelector("#inputTextAlign");
  clearTextAlign.value = "";
  let clearId = document.querySelector("#inputId");
  clearId.value = "";
};

window.addEventListener("load", () => {
  document.getElementById("form1").addEventListener("submit", (e) => {
    e.preventDefault(); //stop refresh
  });
  document.getElementById("submitBtn").addEventListener("click", () => {
    let inputTag = document.getElementById("inputTag");
    let inputContent = document.getElementById("inputContent");
    let inputWidth = document.getElementById("inputWidth");
    let inputHeight = document.getElementById("inputHeight");
    let inputColor = document.getElementById("inputColor");
    let inputSize = document.getElementById("inputSize");
    let inputBackground = document.getElementById("inputBackground");
    let inputBorder = document.getElementById("inputBorder");
    let inputBorderRadius = document.getElementById("inputBorderRadius");
    let inputMargin = document.getElementById("inputMargin");
    let inputPadding = document.getElementById("inputPadding");
    let inputBoxShadow = document.getElementById("inputBoxShadow");
    let inputTextAlign = document.getElementById("inputTextAlign");
    let inputId = document.getElementById("inputId");
    createElm(
      inputTag.value,
      inputContent.value,
      inputWidth.value,
      inputHeight.value,
      inputColor.value,
      inputSize.value,
      inputBackground.value,
      inputBorder.value,
      inputBorderRadius.value,
      inputMargin.value,
      inputPadding.value,
      inputBoxShadow.value,
      inputTextAlign.value,
      inputId.value
    );
    document.getElementById("saveBtn").addEventListener("click", () => {
      let jsonStr = JSON.stringify(elmsArr); // convert array to string (json)
      localStorage.setItem("tags", jsonStr); //save to localStorage
      restorePage();
    });
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    clearPage();
  });
});
