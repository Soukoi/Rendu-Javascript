/* Bouton Add */

const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const list = document.querySelector("#list");
const ul = document.querySelector("li");

button2.addEventListener("click", function() {
    const li = document.createElement("li");
    const text = document.createTextNode("Garimeme");
    const img = document.createElement('img');

    img.src = 'img/2.png';
    img.width = '272.5';
    img.height = '208.75';

    li.append(text);
    list.append(li);
    list.append(img);
})

button3.addEventListener("click", function() {
    document.getElementById("list").removeChild(document.getElementById("list").lastElementChild);
})

/* Mode Nuit */

const body = document.querySelector("body");
const bodyNight = document.querySelector(".bodyNight");
const buttons = document.querySelectorAll(".button");
const buttonNight = document.querySelector(".buttonNight");

var nightMode = false;

btn.addEventListener("click", function() {
    body.classList.toggle("bodyNight");
    buttons.forEach(x => x.classList.toggle('buttonNight'));
    
    if (nightMode === false) {
        nightMode = true;
    } else if (nightMode === true) {
        nightMode = false;
    }
    
    //console.log(nightMode);
})

/* Animation curseur */

const colors = ["rgba(241, 77, 44, 0.899)", "rgb(159, 127, 255)"];

let animateCircleFragment = document.createDocumentFragment();

function animateCircle(event) {
  let circleDivElem = document.createElement("div");
  circleDivElem.classList = "circle";

  animateCircleFragment.appendChild(circleDivElem);
  document.body.appendChild(animateCircleFragment);

  circleDivElem.style.left = event.clientX + "px";
  circleDivElem.style.top = event.clientY + "px";

  let color = colors[Math.floor(Math.random() * colors.length)];
  circleDivElem.style.borderColor = color;

  circleDivElem.style.transition = "all 0.5s linear 0s";

  circleDivElem.style.left = circleDivElem.offsetLeft - 20 + "px";
  circleDivElem.style.top = circleDivElem.offsetTop - 20 + "px";

  circleDivElem.style.width = "20px";
  circleDivElem.style.height = "20px";
  circleDivElem.style.borderWidth = "2px";
  circleDivElem.style.opacity = 0;
}
document.addEventListener("mousemove", animateCircle);