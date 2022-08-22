

const light = document.getElementById("light");
light.addEventListener("click", changeColor);
function changeColor() {
  if (document.body.style.background == "black") {
    document.body.style.background = "white";
  } else {
    document.body.style.background = "black";
  }
}
// function turnOnOff() {
//   if (light.src.match("pngwingOff")) {
//     light.src = "img/pngwingOn.png";
//   } else {
//     light.src = "img/pngwingOff.png";
//   }
// };
