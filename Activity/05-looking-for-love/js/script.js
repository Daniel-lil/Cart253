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

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(500, 500);

//position circles seperated from one another
circle1.x = width/3;
circle2.x = 2 * width/3;

//start circles moving in a random direction
circle1.vx= random(-circle1.speed, circle1.speed);
circle2.vx= random(-circle2.speed, circle2.speed);

circle1.vy= random(-circle1.speed, circle1.speed);
circle2.vy= random(-circle2.speed, circle2.speed);
}


/**
Description of draw()
*/
function draw() {
background(0);

circle1.x = circle1.x + circle1.vx;
circle1.y = circle1.y + circle1.vy;

circle2.x = circle2.x + circle2.vx;
circle2.y = circle2.y + circle2.vy;

  push();
  fill(circle1.fill.r,circle1.fill.g,circle1.fill.b);
  ellipse(circle1.x,circle1.y,circle1.size);
  pop();

  push();
  fill(circle2.fill.r,circle2.fill.g,circle2.fill.b);
  ellipse(circle2.x,circle2.y,circle2.size);
  pop();
}
