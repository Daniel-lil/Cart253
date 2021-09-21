/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

let bg = {
  r: 0,
  g: 0,
  b: 0,
};
let circle1 = {
  x:0,
  y:250,
  size:100,
  fill:255,
  alpha:200
};
let circle2 = {
  x: 500,
  y: 250,
  size: 50,
  fill: 255,
  alpha: 200
};

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(500,500);
noStroke();
}


/**
Description of draw()
*/
function draw() {
background(bg.r,bg.b,bg.b);
bg.r = bg.r +1;
}
