var sizeRect= 0;
function setup() {
  // put setup code here

  createCanvas(500,500);
}

function draw() {
  // put drawing code here

   background("#2AC518");
  rect(225,120,60,40);
  fill("#FF00E0");
  strokeWeight(6);
  rect(50,120,400,240); // camera frame
  fill("#000000");
  ellipse(250,250,140,140); //outer lens
  strokeWeight(2)
  fill("#00FFFF");
  triangle(400,300,420,275,380,275);//off
  triangle(400,245,420,270,380,270);//on
  fill("#B9BDB9")
  rect(355,130,80,50); //flash 
  fill("#256,256,256")
  ellipse(250,250,80,80);// lens
   fill("#000000");
  ellipse(95,115,90,20); //capture
  fill ("256,256,256");
  rect(230,130,60,38); //eye
  
  
  fill("#F3FF00"); // text at the bottom of the page
  text("Say Cheese!",330,440);
  textStyle(ITALIC);
  textSize(25);

  //rect representing flash
  fill("#FFF");
  stroke("#000");
  rect(0,0,sizeRect,sizeRect);

}

 function mousePressed(){
  if (mouseX>45 && mouseX<135 && mouseY>105 && mouseY<125){
 sizeRect =  width;
  }
 }