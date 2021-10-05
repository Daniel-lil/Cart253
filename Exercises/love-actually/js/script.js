/**
Daniel_Looking_For_Love_Actiivity_5
Daniel Little
*/

"use strict";

let imgScary;
let imgHeart;
let imgBrokenHeart;

let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3,
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
  speed: 2,
  fill: {
    r: 148,
    g: 7,
    b: 89
  }
};

let state = `title`; // can be: title, simulation, love & sadness

function preload() {
  imgScary = loadImage ('assets/images/jumpScare.jpeg');
  imgHeart = loadImage ('assets/images/heart.png');
  imgBrokenHeart = loadImage ('assets/images/brokenHeart.png')
}

function setup() {
createCanvas(500, 500);
setupCircles();
}

function setupCircles(){
//position circles seperated from one another
circle1.x = width/3;
circle2.x = 2 * width/3;

//start circles moving in a random direction
circle1.vx= 0;
circle2.vx= random(-circle2.speed, circle2.speed);
circle1.vy= 0;
circle2.vy= random(-circle2.speed, circle2.speed);
}


function draw() {
background(0);

if (state === `title`){
  title();
}
else if (state ===`simulation`){
  simulation();
}
else if(state ===`love`){
  love();
}
else if (state === `sadness`){
  sadness();
}
else if (state === `jumpScare`) {
  jumpScare();
}

function title(){
  push();
  textSize(150);
  textStyle(BOLD);
  fill(255,15,35);
  textAlign(CENTER,CENTER);
  text(`love?`, width/2, height/2);
  pop();
}

function simulation(){
move();
checkOffScreen();
checkOverlap();
display();
handleInput();
checkForScare();
}

function love(){
  push();
  imageMode (CENTER)
  image(imgHeart, 250,250,400,400);
  textSize(150);
  textStyle(BOLD);
  fill(140,10,255);
  textAlign(CENTER,CENTER);
  text(`love!`, width/2, height/2 - 25);
  pop();
}

function sadness(){
  push();
  imageMode (CENTER)
  image(imgBrokenHeart, 250,250,400,400);
  textSize(115);
  textStyle(BOLD);
  fill(25,50,255);
  textAlign(CENTER,CENTER);
  text(`sadness`, width/2, height/2);
  pop();
}

function jumpScare(){
  push();
  imageMode(CENTER)
  image(imgScary,250,250,540,540);
  textSize(75);
  textStyle(BOLD);
  fill(45,255,0);
  textAlign(CENTER,CENTER);
  text(`Love Is Scary`, width/2, height/2);
  pop();
}

function move(){
//move circles
circle1.x = circle1.x + circle1.vx;
circle1.y = circle1.y + circle1.vy;

circle2.x = circle2.x + circle2.vx;
circle2.y = circle2.y + circle2.vy;

let change = random();
if (change < 0.01) {
  circle2.vx= random(-circle2.speed, circle2.speed);
  circle2.vy= random(-circle2.speed, circle2.speed);
  }
}

function handleInput() {
  //allows user control of circle1 using keys
  if (keyIsDown(LEFT_ARROW)){
    circle1.vx = - circle1.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    circle1.vx = circle1.speed;
  }
  else {
    circle1.vx = 0;
  }

if (keyIsDown(UP_ARROW)) {
  circle1.vy = -circle1.speed;
}
  else if (keyIsDown(DOWN_ARROW)) {
    circle1.vy = circle1.speed
  }
  else {
    circle.vy = 0;
  }
}

function checkOffScreen(){
//check if circles have gone offscreen and triggers sad ending
if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height )  {
  state = `sadness`;
}
}

function checkForScare() {
  //check if circle is in corner and triggers jumpScare
  if (circle1.x >= 425 & circle1.y >= 425) {
    state = `jumpScare`;
  }
}

function checkOverlap(){
//check if circles overlap and triggers happy ending
let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
if (d < circle1.size/2 + circle2.size/2){
  state = `love`;
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

function mousePressed(){
  if (state === `title`){
    state = `simulation`;
  }
}
