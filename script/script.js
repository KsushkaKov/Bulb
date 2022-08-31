
let btn = document.querySelector(".btn");
let body = document.querySelector("body");
const colorInput = document.querySelector("#color");

btn.onclick = function () {
  body.classList.toggle("on");
};

btn.addEventListener('click', changeColor);

function changeColor() {
  let color = colorInput.value;
  document.body.style.backgroundColor = color;
}