let myImage = document.getElementById("myImage");
let myButtonAdd = document.getElementById("myButtonAdd");
let myButtonChange = document.getElementById("myButtonChange");
let myCanvas = document.getElementById("myCanvas");
let ctx = myCanvas.getContext("2d");
myButtonChange.addEventListener("click", changeImage,true);
myButtonAdd.addEventListener("click", addFilter,true);
