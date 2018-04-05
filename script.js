var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var newColor = document.querySelector("#newGrad");
var body = document.querySelector("#gradient");
var random = document.querySelector("#random");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	newColor.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(){
	var r1 = getRandomColor();
	var r2 = getRandomColor();

	color1.value = r1;
	color2.value = r2;
	setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandomColor);

window.onload = setGradient;