const btnToggle = document.querySelector("#btnToggle");
const body = document.querySelector("body");
const midText = document.querySelector("#midText");
const jumbo = document.querySelector(".jumbotron");
const nova = document.querySelector("#novaDiv");
const ship = document.querySelector("#shipDiv");
const laser = document.querySelector("#laserDiv");
const novaBotton = document.querySelector("#novaButton");
const works = document.querySelector("#works");
const progress = document.querySelector("#progress");
const literature = document.querySelector("#literature");
//const topNav = document.querySelector("#topNav");

novaBotton.addEventListener("click", () => {
  midText.style.color = "yellow";
  midText.style.transform = "matrix(1, 0, -0.6, 1, 60, -90)";
  midText.style.transitionDuration = "2000ms";

  nova.style.transform = "scale(100,100)";
  nova.style.transitionDuration = "600ms";
  nova.style.transitionTimingFunction = "ease-out";
  nova.style.transitionDelay = "2900ms";

  ship.style.transform = "translate(0px,-92vh)";
  ship.style.transitionDuration = "2000ms";
  ship.style.visibility = "visible";

  laser.style.transform = "translate(85vw)";
  laser.style.transitionDuration = "1000ms";
  laser.style.transitionDelay = "2000ms";
  laser.style.visibility = "visible";

  jumbo.style.transition = "opacity 1700ms";
  jumbo.style.opacity = "0.4";
  jumbo.style.transitionTimingFunction = "ease-in";

  setTimeout(() => {
    novaBotton.style.display = "none";
    nova.style = "unset";
    laser.style = "unset";
    midText.style = "";
    jumbo.style.opacity = "1";
  }, 3500);
  setTimeout(() => {
    ship.style = "unset";
  }, 3000);
});

var toggle = true;
novaBotton.addEventListener("click", () => {
  setTimeout(() => {
    body.style.backgroundImage = toggle
      ? "url(./picture/day.jpg)"
      : "url(./picture/night.jpg)";
    midText.style.color = toggle ? "black" : "white";
    works.style.backgroundColor = toggle ? "white" : "rgb(23, 94, 81)";
    progress.style.backgroundColor = toggle ? "white" : "rgb(23, 94, 81)";
    literature.style.backgroundColor = toggle ? "white" : "rgb(23, 94, 81)";
    novaBotton.style.display = toggle ? "none" : "";
    jumbo.style.backgroundColor = toggle ? "white" : "rgb(29, 23, 23)";
    btnToggle.style.backgroundImage = toggle
      ? "black"
      : "rgba(252, 214, 0, 0.911)";
    toggle = !toggle;
  }, 3600);
});
window.addEventListener("load", () => {
  jumbo.style.transition = "opacity 1700ms";
  jumbo.style.opacity = "1";
  jumbo.style.transitionTimingFunction = "ease-in-out";
});

btnToggle.addEventListener("click", () => {
  body.style.backgroundImage = toggle
    ? "url(./picture/day.jpg)"
    : "url(./picture/night.jpg)";
  midText.style.color = toggle ? "black" : "white";
  works.style.backgroundColor = toggle ? "white" : "rgb(23, 94, 81)";
  progress.style.backgroundColor = toggle ? "white" : "rgb(23, 94, 81)";
  literature.style.backgroundColor = toggle ? "white" : "rgb(23, 94, 81)";
  novaBotton.style.display = toggle ? "none" : "";
  jumbo.style.backgroundColor = toggle ? "white" : "rgb(29, 23, 23)";
  btnToggle.style.backgroundColor = toggle
    ? "black"
    : "rgba(252, 214, 0, 0.911)";
  toggle = !toggle;
});

var hiddenText = document.querySelector("#hiddenText");
var readButton = document.querySelector("#readButton");
var toggleP = false;
function myFunction() {
  hiddenText.style.display = toggleP ? "none" : "block";
  readButton.innerHTML = toggleP ? "Read More" : "Read Less";
  toggleP = !toggleP;
}
