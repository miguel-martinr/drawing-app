
let mouseIsOverCanvas = false;


let canvas = undefined;

const resize = () => {
  resizeCanvas(Math.floor(windowWidth * 0.6), Math.floor(windowHeight * 0.6));
}



function setup() {
  console.log(`Setting canvas...`);
  const parent = document.getElementById('sketch-holder')
  canvas = createCanvas(1, 1);
  
  canvas.mouseOver(() => mouseIsOverCanvas = true);
  canvas.mouseOut(() => mouseIsOverCanvas = false);
  
  
  resize();
  canvas.id('canvas');
  canvas.parent(parent);
  background(220);
}



function draw() {

  stroke(document.getElementById('colorPicker').value);
  strokeWeight(document.getElementById('weightPicker').value);
  if (mouseIsPressed && mouseIsOverCanvas) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  
}

document.getElementById('clearCanvas').addEventListener('click', () => {
  clear();
  background(220);
});

function windowResized() {
  resize();
  background(220);
}








