console.log("Hello");


myImage.onload = function() {
    myCanvas.width = myImage.width;
   myCanvas.height = myImage.height;
    ctx.drawImage(myImage, 0, 0, myCanvas.width, myCanvas.height);
}; 


function changeImage(){
  let myRandom=Math.floor(Math.random() * 9) + 1;
myImage.src="images/" + myRandom + ".jpg";
myImage.onload = function() {
    myCanvas.width = myImage.width;
   myCanvas.height = myImage.height;
    ctx.drawImage(myImage, 0, 0, myCanvas.width, myCanvas.height);
};  
    
}


function addFilter(){

  // Read each pixel out of canvas
  // Array representing, r then g then b values for each pixel
  let imageData = ctx.getImageData(0, 0, myCanvas.width, myCanvas.height);
  let dataArray = imageData.data;

    
    
let myImage = document.getElementById("myImage");
let myButtonAdd = document.getElementById("myButtonAdd");
let myButtonChange = document.getElementById("myButtonChange");
let myCanvas = document.getElementById("myCanvas");
let ctx = myCanvas.getContext("2d");
myButtonChange.addEventListener("click", changeImage,true);
myButtonAdd.addEventListener("click", addFilter,true);



  
  // Loop over each pixel
  const l = dataArray.length;
  for(let i = 0; i < l ; i += 4){
    // dataArray [i] = Red
    // dataArray [i+1] = Green
    // dataArray [i+2] = Blue
    // dataArray [i+3] = Alpha
    
    // Invert the colours by altering the r, g, b values
    dataArray[i] = 255 - dataArray[i];
    dataArray[i + 1] = 255 - dataArray[i + 1];
    dataArray[i + 2] = 255 - dataArray[i + 2];
  }
      // Write the data back to canvas
  ctx.putImageData(imageData, 0 , 0);
}


for(let i = 0; i < l ; i += 4){
       let brightness = 0.34 * dataArray[i] + 0.5 * dataArray[i + 1] + 0.16 * dataArray[i + 2];
          // red
          dataArray[i] = brightness;
          // green
          dataArray[i + 1] = brightness;
          // blue
          dataArray[i + 2] = brightness;
        }

ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); 
ctx.filter = 'sepia(1)’; 
ctx.drawImage(myImage, 0, 0, myCanvas.width, myCanvas.height);


