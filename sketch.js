function setup() {
    createCanvas(900, 900);
  background(" white");
  }
  
  function draw() {
    
    stroke(" black")
    fill(" blue") 
    
    // console.log(mouseIsPressed)
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 45)
   }
  }
    