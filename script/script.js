let btn = document.querySelector(".btn");
let body = document.querySelector("body");
const colorInput = document.querySelector("#color");
const mainColor = "#222";
const lightColor = "#000000";

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
  colorInput.value = savedTheme;
  if ((document.body.style.backgroundColor = savedTheme)) {
    body.classList.add("on");
  }
  if (savedTheme === mainColor) {
    body.classList.remove("on");
  }
}

checkTheme();
