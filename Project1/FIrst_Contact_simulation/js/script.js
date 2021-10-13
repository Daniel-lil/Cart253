/**
First_Contact_Simulation
Daniel Little
*/

"use strict";

//stating names of planets
let earth;
let saturn;
let uranus;
let venus;
let mercury;
let jupiter;
let neptune;
let mars;

//setting up attributes for flying saucer
let saucerPiece1 = {
  x: 0,
  y: 0,
  size: 60,
  vx: 0,
  vy: 0,
  speed: 3,
  fill: {
    r: 244,
    g: 158,
    b: 247
  }
};
//telling program which state to begin inspect
let state = `title`;

/**
preloading images
*/
function preload() {

//preloading planet images
  earth = loadImage ('assets/images/earth.png');
  saturn = loadImage ('assets/images/saturn.png');
  uranus = loadImage ('assets/images/uranus.png')
  venus = loadImage ('assets/images/venus.jpg');
  mercury = loadImage ('assets/images/mercury.png');
  jupiter = loadImage ('assets/images/jupiter.png')
  neptune = loadImage ('assets/images/neptune.png');
  mars = loadImage ('assets/images/mars.png')
}

/**
Description of setup
*/
function setup() {
createCanvas(1000, 1000);
}


/**
Description of draw()
*/
function draw() {
  background(0);

  if (state === `title`){
    title();
  }
  else if(state ===`choice`){
    choice();
  }
  else if (state ===`spaceship`){
    simulation();
  }
  else if(state ===`home`){
    love();
  }
  else if (state === `earth`){
    earth();
  }
  else if (state === `saturn`) {
    saturn();
  }
  else if (state === `uranus`){
    uranus();
  }
  else if(state ===`venus`){
    venus();
  }
  else if (state ===`mercury`){
    mercury();
  }
  else if(state ===`jupiter`){
    love();
  }
  else if (state === `neptune`){
    earth();
  }
  else if (state === `mars`) {
    saturn();
  }
  else if (state === `sunDeath`) {
    sunDeath();
  }
}
