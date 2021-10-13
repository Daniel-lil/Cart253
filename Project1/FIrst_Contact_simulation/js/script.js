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

//defining attributes for flying saucer

let black = 0

let saucerPiece1 = {
  x: 500,
  y: 500,
  size: 75,
  vx: 0,
  vy: 0,
  speed: 3,
  fill: 150
  }

let saucerPiece2 = {
  x: 500,
  y: 500,
  size: 32,
  vx: 0,
  vy: 0,
  speed: 3,
  fill: {
    r: 0,
    g: 255,
    b: 0
  }
}

  let saucerPiece3 = {
      x: 494,
      y: 525,
      w: 7,
      h: 12,
      corner: 20,
      vx: 0,
      vy: 0,
      speed: 3,
      fill: {
        r: 0,
        g: 255,
        b: 0
      }
}
      let saucerPiece4 = {
          x: 494,
          y: 470,
          w: 7,
          h: 12,
          corner: 20,
          vx: 0,
          vy: 0,
          speed: 3,
          fill: {
            r: 0,
            g: 255,
            b: 0
          }

        }
              let saucerPiece5 = {
                  x: 523,
                  y: 494,
                  w: 12,
                  h: 7,
                  corner: 20,
                  vx: 0,
                  vy: 0,
                  speed: 3,
                  fill: {
                    r: 0,
                    g: 255,
                    b: 0
                  }

                }
                      let saucerPiece6 = {
                          x: 470,
                          y: 494,
                          w: 12,
                          h: 7,
                          corner: 20,
                          vx: 0,
                          vy: 0,
                          speed: 3,
                          fill: {
                            r: 0,
                            g: 255,
                            b: 0
                          }
};
//telling program which state to begin inspect
let state = `flight simulation`;

/**
preloading images
*/
function preload() {

//preloading planet images
  earth = loadImage ('assets/images/earth.png');
  saturn = loadImage ('assets/images/saturn.png');
  uranus = loadImage ('assets/images/uranus.png')
  venus = loadImage ('assets/images/venus.png');
  mercury = loadImage ('assets/images/mercury.png');
  jupiter = loadImage ('assets/images/jupiter.png')
  neptune = loadImage ('assets/images/neptune.png');
  mars = loadImage ('assets/images/mars.png')
}

/**
Description of setup
*/
function setup() {
createCanvas(750, 750);
}


/**
Description of draw()
*/
function draw() {

  if (state === `title`){
    title();
  }
  else if(state ===`choice`){
    choice();
  }
  else if(state ===`instructions`){

  }
  else if (state ===`flight simulation`){
    background(black);
    displayStatic();
    displayPlanets();
    displaySaucer();
    handleInput();
    moveSaucer();
    checkIfOnPlanet();
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


// functions for flight simulation state
function displayStatic() {
  //display static

for (let i = 0; i < 2000; i++) {
  let x = random(0,width);
  let y = random(0,height);
  let colour = random(0,255);
  stroke(colour);
  point(x,y);

}
}

function displayPlanets() {
//display the planets
imageMode(CENTER)
  image(earth,250,250,68,68);

  imageMode(CENTER)
  image(saturn,595,140,110,110);

  imageMode(CENTER)
  image(uranus,350,70,60,60);

  imageMode(CENTER)
  image(venus,450,250,60,60);

  imageMode(CENTER)
  image(mercury,475,340,50,50);

  imageMode(CENTER)
  image(jupiter,190,500,125,125);

  imageMode(CENTER)
  image(neptune,55,280,90,90);

  imageMode(CENTER)
  image(mars,550,445,50,50);

  imageMode(CENTER)
  image(sun,375,375,225,225);
}

function displaySaucer() {
//creating shapes for the saucer

//grey circle

fill(saucerPiece1.fill);
stroke(black);
ellipse(saucerPiece1.x,saucerPiece1.y,saucerPiece1.size);


//green circle

fill(saucerPiece2.fill.r,saucerPiece2.fill.g,saucerPiece2.fill.b);
stroke(black);
ellipse(saucerPiece2.x,saucerPiece2.y,saucerPiece2.size);


//top light

fill(saucerPiece3.fill.r,saucerPiece3.fill.g,saucerPiece3.fill.b);
stroke(black);
rect(saucerPiece3.x,saucerPiece3.y,saucerPiece3.h,saucerPiece3.w,saucerPiece3.corner);


//bottom light

fill(saucerPiece4.fill.r,saucerPiece4.fill.g,saucerPiece4.fill.b);
stroke(black);
rect(saucerPiece4.x,saucerPiece4.y,saucerPiece4.h,saucerPiece4.w,saucerPiece4.corner);


//right light

fill(saucerPiece5.fill.r,saucerPiece5.fill.g,saucerPiece5.fill.b);
stroke(black);
rect(saucerPiece5.x,saucerPiece5.y,saucerPiece5.h,saucerPiece5.w,saucerPiece5.corner);


//left light

fill(saucerPiece6.fill.r,saucerPiece6.fill.g,saucerPiece6.fill.b);
stroke(black);
rect(saucerPiece6.x,saucerPiece6.y,saucerPiece6.h,saucerPiece6.w,saucerPiece6.corner);

}

function handleInput() {
  //allows user control of saucer using keys
  if (keyIsDown(LEFT_ARROW)){
    saucerPiece1.vx = - saucerPiece1.speed;
    saucerPiece2.vx = - saucerPiece2.speed;
    saucerPiece3.vx = - saucerPiece3.speed;
    saucerPiece4.vx = - saucerPiece4.speed;
    saucerPiece5.vx = - saucerPiece5.speed;
    saucerPiece6.vx = - saucerPiece6.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    saucerPiece1.vx = saucerPiece1.speed;
    saucerPiece2.vx = saucerPiece2.speed;
    saucerPiece3.vx = saucerPiece3.speed;
    saucerPiece4.vx = saucerPiece4.speed;
    saucerPiece5.vx = saucerPiece5.speed;
    saucerPiece6.vx = saucerPiece6.speed;
  }
  else {
    saucerPiece1.vx = 0;
    saucerPiece2.vx = 0;
    saucerPiece3.vx = 0;
    saucerPiece4.vx = 0;
    saucerPiece5.vx = 0;
    saucerPiece6.vx = 0;
  }

if (keyIsDown(UP_ARROW)) {
  saucerPiece1.vy = -saucerPiece1.speed;
  saucerPiece2.vy = -saucerPiece2.speed;
  saucerPiece3.vy = -saucerPiece3.speed;
  saucerPiece4.vy = -saucerPiece4.speed;
  saucerPiece5.vy = -saucerPiece5.speed;
  saucerPiece6.vy = -saucerPiece6.speed;
}
  else if (keyIsDown(DOWN_ARROW)) {
    saucerPiece1.vy = saucerPiece1.speed;
    saucerPiece2.vy = saucerPiece2.speed;
    saucerPiece3.vy = saucerPiece3.speed;
    saucerPiece4.vy = saucerPiece4.speed;
    saucerPiece5.vy = saucerPiece5.speed;
    saucerPiece6.vy = saucerPiece6.speed;
  }
  else {
    saucerPiece1.vy = 0;
    saucerPiece2.vy = 0;
    saucerPiece3.vy = 0;
    saucerPiece4.vy = 0;
    saucerPiece5.vy = 0;
    saucerPiece6.vy = 0;
  }
}

function moveSaucer(){
//move saucer
saucerPiece1.x = saucerPiece1.x + saucerPiece1.vx;
saucerPiece1.y = saucerPiece1.y + saucerPiece1.vy;

saucerPiece2.x = saucerPiece2.x + saucerPiece2.vx;
saucerPiece2.y = saucerPiece2.y + saucerPiece2.vy;

saucerPiece3.x = saucerPiece3.x + saucerPiece3.vx;
saucerPiece3.y = saucerPiece3.y + saucerPiece3.vy;

saucerPiece4.x = saucerPiece4.x + saucerPiece4.vx;
saucerPiece4.y = saucerPiece4.y + saucerPiece4.vy;

saucerPiece5.x = saucerPiece5.x + saucerPiece5.vx;
saucerPiece5.y = saucerPiece5.y + saucerPiece5.vy;

saucerPiece6.x = saucerPiece6.x + saucerPiece6.vx;
saucerPiece6.y = saucerPiece6.y + saucerPiece6.vy;
}

//check if the saucer is on a planet
function checkIfOnPlanet() {
  //earth
  let d = dist(saucerPiece1.x,saucerPiece1.y,250,250);
if (d < (saucerPiece1.size/2 + 68/2){
  state = `earth`;
}
  //saturn
  let saturnDist = dist(saucerPiece1.x,saucerPiece1.y,595,140);
if (saturnDist < (saucerPiece1.size/2 + 110/2){
  state = `saturn`;
}
//uranus
let uranusDist = dist(saucerPiece1.x,saucerPiece1.y,350,70);
if (uranusDist < (saucerPiece1.size/2 + 60/2){
state = `uranus`;
}
//venus
let venusDist = dist(saucerPiece1.x,saucerPiece1.y,450,250);
if (venusDist < (saucerPiece1.size/2 + 60/2){
state = `venus`;
}
//mercury
let mercuryDist = dist(saucerPiece1.x,saucerPiece1.y,475,340);
if (mercuryDist < (saucerPiece1.size/2 + 50/2){
state = `mercury`;
}
//jupiter
let jupiterDist = dist(saucerPiece1.x,saucerPiece1.y,190,500);
if (jupiterDist < (saucerPiece1.size/2 + 125/2){
state = `jupiter`;
}
//neptune
let neptuneDist = dist(saucerPiece1.x,saucerPiece1.y,55,280);
if (neptuneDist < (saucerPiece1.size/2 + 90/2){
state = `neptune`;
}
//mars
let marsDist = dist(saucerPiece1.x,saucerPiece1.y,550,445);
if (marsDist < (saucerPiece1.size/2 + 50/2){
state = `mars`;
}
//sun
let sunDist = dist(saucerPiece1.x,saucerPiece1.y,375,375);
if (sunDist < (saucerPiece1.size/2 + 225/2){
state = `sunDeath`;
}
}
