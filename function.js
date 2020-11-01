var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("Gradient");
var random = document.getElementById("random");
var auto = document.getElementById("auto");
var stop = document.getElementById("stop");
var Gradient1 = document.getElementById("Gradient");


function setGradient(){
     body.style.background = "linear-Gradient(to right, " + color1.value + ", " + color2.value + ")"; 
    const a = color1.value;
    css.textContent = body.style.background +";";
    console.log(color1.value)

}

function randomcolor()
{ 
    var newColor = '#' + (Math.random()* 0xFFFFFF << 0).toString(16);
    console.log(newColor.value)
   return newColor;
}
 

function randomGradient(){
    color1.value = randomcolor();
    color2.value = randomcolor();
    setGradient();
}

color2.addEventListener("input", setGradient);
color1.addEventListener("input", setGradient);
random.addEventListener("scroll", randomGradient);
 
window.addEventListener('scroll', () => {
    randomGradient(); 
});



