/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let bg = {
  r: 0,
  g: 0,
  b: 0,
  };

let circle1 = {
  x:0,
  y:500 ,
  size:100,
  fill:255,
  alpha:200
};

let circle2 = {
  x: 1000,
  y: 100,
  size: 100,
  fill: 255,
  alpha: 200
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
  createCanvas(1000,1000);
  noStroke();
}


/**
Description of draw()
*/
function draw() {

  background(bg.r,bg.b,bg.b);
bg.b = map(mouseY, 0, height, 0, 255);

  circle1.x = circle1.x + 1;
  circle1.x = constrain(circle1.x,0,width);
  circle1.y = circle1.y + -sin(yAngle)*10 ;
  circle1.y = constrain(circle1.y,0,height);
  fill(circle1.fill,circle1.alpha);
  ellipse(circle1.x,circle1.y,circle1.size);




}
