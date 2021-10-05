/**
Daniel_Looking_For_Love_Actiivity_5
Daniel Little
*/

"use strict";

let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 244,
    g: 158,
    b: 247
  }
};

let circle2 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 148,
    g: 7,
    b: 89
  }
};

let state = `title`; // can be: title, simulation, love & sadness

function setup() {
createCanvas(500, 500);
setupCircles();
}

function setupCircles(){
//position circles seperated from one another
circle1.x = width/3;
circle2.x = 2 * width/3;

//start circles moving in a random direction
circle1.vx= random(-circle1.speed, circle1.speed);
circle2.vx= random(-circle2.speed, circle2.speed);
circle1.vy= random(-circle1.speed, circle1.speed);
circle2.vy= random(-circle2.speed, circle2.speed);
}


function draw() {
background(0);

if (state === `title`){
  title();
}
else if (state ===`simulation`){

}
else if (state === `sadness`){

}

function title(){
  textSize(150);
  textStyle(BOLD);
  fill(200,10,60);
  textAlign(CENTER,CENTER);
  text(`love?`, width/2, height/2);
}

function simulation(){
simulation();
move();
checkOffScreen();
checkOverlap();
display();
}

function move(){
//move circles
circle1.x = circle1.x + circle1.vx;
circle1.y = circle1.y + circle1.vy;

circle2.x = circle2.x + circle2.vx;
circle2.y = circle2.y + circle2.vy;
}

function checkOffScreen(){
//check if circles have gone offscreen
if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height )  {
  //sad ending
}
}

function checkOverlap(){
//check if circles overlap
let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
if (d < circle1.size/2 + circle2.size/2){
  //Love ending
}
}

function display(){
  push();
  fill(circle1.fill.r,circle1.fill.g,circle1.fill.b);
  ellipse(circle1.x,circle1.y,circle1.size);
  pop();

  push();
  fill(circle2.fill.r,circle2.fill.g,circle2.fill.b);
  ellipse(circle2.x,circle2.y,circle2.size);
  pop();
}
}
