//jshint esversion:6

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const upButton = document.getElementById('top-left');
const downButton = document.getElementById('bott-left');
const leftButton = document.getElementById('top-right');
const rightButton = document.getElementById('bott-right');

let pencil = {
  x: canvas.width / 2,
  y: canvas.height / 2
};

let rPressed = false;
let lPressed = false;
let uPressed = false;
let dPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
  switch (e.keyCode) {
    case 39:
      rPressed = true;
      break;
    case 37:
      lPressed = true;
      break;
    case 38:
      uPressed = true;
      break;
    case 40:
      dPressed = true;
      break;
    default:
      console.log(e.keyCode);
  }
}

function keyUpHandler(e) {
  switch (e.keyCode) {
    case 39:
      rPressed = false;
      break;
    case 37:
      lPressed = false;
      break;
    case 38:
      uPressed = false;
      break;
    case 40:
      dPressed = false;
      break;
    default:
      console.log(e.keyCode);
  }
}

function upButtonHandler() {

}

function checkR() {
  if (rPressed) {
    if (pencil.x+2 >= canvas.width) {
      pencil.x = canvas.width-2;
    } else {
      pencil.x += 2;
    }
  }
}

function checkL() {
  if (lPressed) {
   if (pencil.x <= 0) {
     pencil.x = 0;
   } else {
     pencil.x -= 2;
   }
 }
}

function checkU() {
  if (uPressed) {
   if (pencil.y <= 0) {
     pencil.y = 0;
   } else {
     pencil.y -= 2;
   }
 }
}

function checkD() {
  if (dPressed) {
   if (pencil.y >= canvas.height-2) {
     pencil.y = canvas.height-2;
   } else {
     pencil.y += 2;
   }
 }
}

function drawEtch() {
  ctx.beginPath();
  ctx.rect(pencil.x, pencil.y, 2, 2);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  drawEtch();
  checkR();
  checkL();
  checkU();
  checkD();
  requestAnimationFrame(draw);
}

draw();
