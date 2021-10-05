/**
dodge-em
Daniel Little


*/

"use strict";

let img;

let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 8,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
};

let user = {
  x: 250,
  y: 250,
  size: 100,
  vx: 2,
  vy: -2,
  ax: 0,
  ay: 0,
  acceleration: .5,
  maxSpeed: 5,
  fill: {
    r:160,
    g:93,
    b:222
  }
};

/**
loads image
*/
function preload() {
img = loadImage('assets/images/virus.png');
}

/**

*/
function setup() {
  createCanvas(windowWidth,windowHeight);

  covid19.y = random(0,height);
  covid19.vx = covid19.speed;
}

/**
Description of draw()
*/
function draw() {
  background(0);
  imageMode(CENTER)
  image(img,windowWidth/2,windowHeight/2,800,800);

//display static
push();
for (let i = 0; i < 3000; i++) {
  let x = random(0,width);
  let y = random(0,height);
  let colour1 = random(0,255)
  let colour2 = random(0,255)
  let colour3 = random(0,255)
  stroke(colour1, colour2, colour3);
  point(x,y);
}
pop();
//covid movement
covid19.x = covid19.x + covid19.vx;
covid19.y = covid19.y + covid19.vy;

if (covid19.x > width) {
  covid19.x = 0;
  covid19.y = random(0,height);
}

//user movement
if (mouseX < user.x) {
  user.ax = -user.acceleration;
}
else {
  user.ax = user.acceleration;
}

if (mouseY < user.y) {
  user.ay = -user.acceleration;
}
else {
  user.ay = user.acceleration;
}

user.vx = user.vx + user.ax;
user.vx = constrain(user.vx,-user.maxSpeed,user.maxSpeed);
user.vy = user.vy + user.ay;
user.vy = constrain(user.vy,-user.maxSpeed,user.maxSpeed);

user.x = user.x + user.vx;
user.y = user.y + user.vy;

//check for catching covid 19 - ending loop + changing background
let d = dist(user.x,user.y,covid19.x,covid19.y);
if (d < covid19.size/2 + user.size/2) {
background(255,0,0) && noLoop();
}

//change covid bubble size
if (d < 400) {
  covid19.size = covid19.size + d/90;
}
else covid19.size = 100 ;

//display covid19
push();
fill(0,255,0);
ellipse(covid19.x,covid19.y,covid19.size);
pop();

push();
//display user
fill(160,93,220);
ellipse(user.x,user.y,user.size);
pop();
}
