let btn = document.querySelector(".btn");
let body = document.querySelector("body");
const colorInput = document.querySelector("#color");

btn.onclick = function () {
  let isOn = body.classList.toggle("on");
  if (isOn) {
    let color = colorInput.value;
    document.body.style.backgroundColor = color;
  } else {
    document.body.style.backgroundColor = "#222";
  }
};
