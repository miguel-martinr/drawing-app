

function setup() {
  console.log(`Setting canvas...`);
  let canvas = createCanvas(400, 100);
  canvas.id('canvas');
  canvas.parent('sketch-holder');
  background(220);
}



function draw() {

  stroke(document.getElementById('colorPicker').value);
  strokeWeight(document.getElementById('weightPicker').value);
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  
}

document.getElementById('clearCanvas').addEventListener('click', () => {
  clear();
  background(220);
});

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(220);
}








