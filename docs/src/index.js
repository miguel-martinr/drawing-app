
let mouseIsOverCanvas = false;
let canvas = undefined;



const resize = () => {
  resizeCanvas(Math.floor(windowWidth * 0.6), Math.floor(windowHeight * 0.6));
}

function setup() {
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


function windowResized() {
  resize();
  background(220);
}

const getExportType = (name = 'exportType') => {
  return document.querySelector(`input[name=${name}]:checked`).value;
}


const  downloadURI = (uri, name) => {
  // Crea un <a>
  var link = document.createElement("a");
  // Nombre del fichero a descargar
  link.download = name;
  // Link de descarga (href)
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
  return false;
}

/***********************************************************************************/
// EventListenners

document.getElementById('exportDraw').addEventListener('click', () => {
  const canvas = document.getElementById("canvas");

  const exportType = getExportType();
  const img = canvas.toDataURL(exportType, 1);
  console.log(exportType);
  return downloadURI(img, 'drawing');
})

document.getElementById('clearCanvas').addEventListener('click', () => {
  clear();
  background(220);
});







