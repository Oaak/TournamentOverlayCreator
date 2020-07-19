var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d")
var imageObj1 = new Image();




var variable = "cows"
var image = "cows"
// var variable = "cows"


function fu() {
variable = document.getElementById("input1").value;

console.log(variable)

image = document.getElementById("img").value;

console.log(image)

imageObj1.src = image;

imageObj1.onload = function() {

ctx.drawImage(imageObj1, 0, 0, 1920, 1080);

var img = c.toDataURL("image/png");
document.write('<img src="' + img + '" width="1920" height="1080"/>');

}
}

// function fu2() {
// image = document.getElementById("img").value;

// console.log(image)
// }