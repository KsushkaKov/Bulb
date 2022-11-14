let btn = document.querySelector(".btn");
let body = document.querySelector("body");
const colorInput = document.querySelector("#color");
const mainColor = "#222";

btn.onclick = function () {
  let isOn = body.classList.toggle("on");
  if (isOn) {
    let color = colorInput.value;
    document.body.style.backgroundColor = color;
    localStorage.setItem("colorInput", colorInput.value);
  } else {
    document.body.style.backgroundColor = mainColor;
    localStorage.setItem("colorInput", mainColor);
  }
};

function checkTheme() {
  const savedTheme = localStorage.getItem("colorInput");
  document.body.style.backgroundColor = savedTheme;
  colorInput.value = savedTheme;
}

checkTheme();
