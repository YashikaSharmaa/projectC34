var canvas;
var drawing = [];
var currentline;
var r,g,b;

function setup() {
  canvas = createCanvas(500,500);
  //executing function start line only when mouse is pressed inside then the canvas
  canvas.mousePressed(startLine);
}
function draw() {
  background(0); 
  //changing colour across the canvas
  r=map(mouseX, 0, width, 255, 0);
  g=map(mouseX, 0, width, 204, 255);
  b=map(mouseX, 0, width, 0,0);
  //defining value of each point of the line drawn
  if(mouseIsPressed){
    var point = {
      x : mouseX,
      y : mouseY
    };
    //making a current path consisting these points
    currentline.push(point);
  }
  // drawing the line
  stroke(r,g,b);
  strokeWeight(4);
  noFill();
  for(var j = 0;j<drawing.length;j++){
    var line = drawing[j];
    beginShape();
    for(var i = 0;i<line.length;i++){
      vertex(line[i].x, line[i].y);
    }
    endShape();
  }
}
// function which will make a new line whenevr mouse is pressed
function startLine(){
  currentline = [];
  drawing.push(currentline);
}