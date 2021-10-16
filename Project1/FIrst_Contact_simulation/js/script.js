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
let sun;

//define attributes for fades using alpha
let fadeIn=0;
let fadeInSpeed = 1;

//defining attributes for flying saucer

let black = 0

let saucerPiece1 = {
  x: 375,
  y: 600,
  size: 75,
  vx: 0,
  vy: 0,
  speed: 3,
  fill: 150
  }

let saucerPiece2 = {
  x: 375,
  y: 600,
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
      x: 369,
      y: 625,
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
          x: 369,
          y: 570,
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
                  x: 398,
                  y: 594,
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
                          x: 345,
                          y: 594,
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
  sun = loadImage ('assets/images/sun.png')
}

/**
Description of setup
*/
function setup() {
createCanvas(750, 750);
}


/**
draws simulation
*/
function draw() {

  if (state === `title`){
    push();
    background(black);
    displayStatic();
    displayTitle();
    pop();
  }
  else if(state ===`choice`){
    push();
    drawAlienPic();
    drawAlien();
    pop();
  }
  else if(state ===`instructions`){
      push();
      background(black);
      displayStatic();
      displayInstructions();
      pop();
  }
  else if (state ===`flight simulation`){
    push();
    background(black);
    displayStatic();
    displayPlanets();
    displaySaucer();
    handleInput();
    moveSaucer();
    checkIfOnPlanet();
    pop();
  }
  else if(state ===`home`){
    push();
    background(black);
    displayStatic();
    imageMode(CENTER)
    image(earth,375,375,420,420);
    displayHomeText();
    pop();
  }
  else if (state === `earth`){
    push();
    background(black);
    displayStatic();
    imageMode(CENTER)
    image(earth,375,375,420,420);
    displayEarthText();
    pop();
  }
  else if (state === `saturn`) {
    push();
    background(black);
    displayStatic();
    imageMode(CENTER)
    image(saturn,375,375,450,450);
    displaySaturnText();
    pop();
  }
  else if (state === `uranus`){
    push();
    background(black);
    displayStatic();
    imageMode(CENTER)
    image(uranus,375,375,375,375);
    displayUranusText();
    pop();
  }
  else if(state ===`venus`){
    push();
    background(black);
    displayStatic();
    imageMode(CENTER)
    image(venus,375,375,450,450);
    displayVenusText();
    pop();
  }
  else if (state ===`mercury`){
    push();
    background(black);
    displayStatic();
    imageMode(CENTER)
    image(mercury,375,375,420,420);
    displayMercuryText();
    pop();
  }
  else if(state ===`jupiter`){
    push();
    background(black);
    displayStatic();
    imageMode(CENTER)
    image(jupiter,375,375,450,450);
    displayJupiterText();
    pop();
  }
  else if (state === `neptune`){
    push();
    background(black);
    displayStatic();
    imageMode(CENTER)
    image(neptune,375,375,450,450);
    displayNeptuneText();
    pop();
  }
  else if (state === `mars`) {
    push();
    background(black);
    displayStatic();
    imageMode(CENTER)
    image(mars,375,375,375,375);
    displayMarsText();
    pop();
  }
  else if (state === `sunDeath`) {
    push();
    background(black);
    displayStatic();
    imageMode(CENTER)
    image(sun,375,375,400,400);
    displaySunDeathText();
    pop();
  }
}

//displays text for title screen
function displayTitle(){
  //defines fade in preset to put into alpha
    fadeIn=fadeIn+fadeInSpeed;
  push();
  strokeWeight(4);
    textSize(90);
    textStyle(BOLD);
    fill(black);
    textAlign(CENTER,CENTER);
    text(`Welcome to`,375 ,175 );
pop();

  push();
    textSize(100);
    stroke(5,134,0, fadeIn);
    strokeWeight(10);
    textStyle(BOLD);
    fill(17, 186,12, fadeIn);
    textAlign(CENTER,CENTER);
    text(`First Contact`,375 ,375 );
    text(`Simulator`,375 ,550 );
  pop();

push();
  strokeWeight(4);
    textSize(17);
      stroke(210,210,210, fadeIn/3);
    textStyle(BOLD);
    fill(black);
    textAlign(CENTER,CENTER);
    text(`press any key to begin`,640 ,725 );
    pop();
}
//start the simulation
  function mousePressed(){
    if(state ===`title`){
      state = `choice`;
      fadeIn=0;
    }
  }

function drawAlienPic() {
  push();
  //defines fade in preset to put into alpha
    fadeIn=fadeIn+fadeInSpeed;
//sky
  background(black);
  pop();
//moon part2
  push();
  fill(255)
  ellipse (100, 100, 100, 140);
  pop();
//moon part1
  push();
  fill(black)
  ellipse (120, 100, 70, 90);
  pop();
//stars
  push();
  displayStatic();
  pop();
//ground
  push();
  noStroke();
  fill(9, 54, 31);
  ellipse (375,800,1500,300);
  pop();
//alien text bubble
  //oval
push();
noStroke();
fill(255, 255, 255,)
ellipse (600, 100, 250, 180);
pop();
push();
  textSize(21);
  textStyle(BOLD);
  fill(black);
  textAlign(CENTER,CENTER);
  text(`Hey there human`,600 ,65 );
  text(`would you like to try`,600 ,95 );
  text(`flying my spaceship?`,600 ,125 );
pop();
  //triangle
push();
noStroke();
fill(255, 255, 255)
triangle(430, 250, 530, 150,630,150)
pop();
//left choice bubble
  //rectangle
push();
fill(132,73,227);
stroke(82, 23, 177);
strokeWeight(8);
rect (50, 500, 200, 120, 50);
pop();
push();
  textSize(19);
  textStyle(BOLD);
  fill(black);
  textAlign(CENTER,CENTER);
  text(`Click the left side`,150 ,536 );
  text(`of the screen to`,150 ,561 );
  text(`remain on Earth`,150 ,586 );
pop();


//right right bubble
  //rectangle
push();
fill(132,73,227);
stroke(82, 23, 177);
strokeWeight(8);
rect (500,500, 200, 120, 50);
pop();
push();
  textSize(19);
  textStyle(BOLD);
  fill(black);
  textAlign(CENTER,CENTER);
  text(`Click the right side`,600 ,536 );
  text(`of the screen to`,600 ,561 );
  text(`explore the stars`,600 ,586 );
pop();
}

function drawAlien() {
  //draws my alien from first the code we wrote (a little changed due to sizing)
  //defines fade in preset to put into alpha
    fadeIn=fadeIn+fadeInSpeed;
  //legs
    push();
    noStroke();
    fill(170, 170, 170,);
    rect (290+40, 600, 25, 180);
    rect (355+35, 600, 25, 180);
    pop();
//body
  push();
  noStroke();
  fill(186, 186, 186,);
  ellipse (320+55,480,150,350);
  pop();
//head
  push();
  noStroke();
  fill(160,160,160,);
  ellipse (320+55,300,100,150);
  fill (0,0,0);
  pop();
//eyes
  push();
  noStroke();
  fill(black,black,black,);
  ellipse (300+55, 310, 16, 40);
  ellipse (340+55, 310, 16, 40);
  pop();
//nose
  push();
  noStroke();
  fill(black,black,black,);
  ellipse (315+55, 330, 4, 3);
  ellipse (325+55, 330, 4, 3);
  pop();
//mouth
  push();
  noStroke();
  fill(black,black,black,);
  rect(299+55,340, 40, 20, 20);
  pop();
//teeth
  push();
  noStroke();
  fill(255+55,255,255,);
  rect(305+55,340, 5, 10, 20);
  rect(312.5+55,340, 5, 10, 20);
  rect(320+55,340, 5, 10, 20);
  rect(327.5+55,340, 5, 10, 20);
  rect(305+55,350, 5, 10, 20);
  rect(312.5+55,350, 5, 10, 20);
  rect(320+55,350, 5, 10, 20);
  rect(327.5+55,350, 5, 10, 20);
  pop();
//nipples + belly button
  push();
  noStroke();
  fill(0,0,0,)
  ellipse (290+55, 400, 4, 3);
  ellipse (355+55, 400, 4, 3);
  ellipse (375, 560, 5, 5);
  pop();
}

//display static
function displayStatic() {
for (let i = 0; i < 2000; i++) {
  let x = random(0,750);
  let y = random(0,750);
  let colour = random(0,255);
  stroke(colour);
  point(x,y);
}
}

//choose whether to go with alien or not
  function mousePressed(){
    if (state === `choice` && mouseX > 375){
    state = `home`;
      fadeIn=0;
  } else if (state === `choice` && mouseX < 375) {
    state = `instructions`;
    fadeIn=0;
}
}

//displays text that coincides with home state
function displayHomeText(){
  fadeIn=fadeIn+fadeInSpeed;
push();
  textSize(55);
  stroke(5,134,0, fadeIn);
  strokeWeight(10);
  textStyle(BOLD);
  fill(17, 186,12, fadeIn);
  textAlign(CENTER,CENTER);
  text(`You've Decided`,375 ,100 );
  text(`To stay Home on Earth`,375 ,650 );
pop();
}

//display instructions
function displayInstructions(){
  fadeIn=fadeIn+fadeInSpeed;
push();
strokeWeight(4);
  textSize(90);
  textStyle(BOLD);
  fill(black);
  textAlign(CENTER,CENTER);
  text(`instructions`,375 ,120 );
pop();

push();
  textSize(35);
  stroke(5,134,0,fadeIn);
  strokeWeight(3);
  textStyle(BOLD);
  fill(17, 186,12,fadeIn);
  textAlign(CENTER,CENTER);
  text(`Control the spaceship`,375 ,250 );
  text(`with your arrow keys`,375 ,335 );
  text(`and take a tour of`, 375, 420);
  text(`the universe`, 375, 505);
pop();

push();
  textSize(35);
  stroke(80,0,0,fadeIn);
  strokeWeight(3);
  textStyle(BOLD);
  fill(150, 0, 0,fadeIn);
  textAlign(CENTER,CENTER);
  text(`Warning: Don't go too close to the sun!`, 375, 590);
pop();

  push();
    strokeWeight(4);
      textSize(17);
        stroke(225,225,225, fadeIn/4);
      textStyle(BOLD);
      fill(black);
      textAlign(CENTER,CENTER);
      text(`press any key to begin`,640 ,725 );
      pop();
}


//start flight
function keyPressed(){
  if (state === `instructions`){
    state = `flight simulation`
}
}

//display the planets
function displayPlanets(){
imageMode(CENTER);
  image(earth,250,250,68,68);

  imageMode(CENTER);
  image(saturn,595,140,110,110);

  imageMode(CENTER);
  image(uranus,350,70,60,60);

  imageMode(CENTER);
  image(venus,450,250,60,60);

  imageMode(CENTER);
  image(mercury,475,340,50,50);

  imageMode(CENTER);
  image(jupiter,190,500,125,125);

  imageMode(CENTER);
  image(neptune,55,280,90,90);

  imageMode(CENTER);
  image(mars,550,445,50,50);

  imageMode(CENTER);
  image(sun,375,375,170,170);
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


//bottom light

fill(saucerPiece3.fill.r,saucerPiece3.fill.g,saucerPiece3.fill.b);
stroke(black);
rect(saucerPiece3.x,saucerPiece3.y,saucerPiece3.h,saucerPiece3.w,saucerPiece3.corner);


//top light

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

//makes saucer actually move
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
//check if the saucer is on a planet to trigger state
function checkIfOnPlanet() {
  //earth
  let d = dist(saucerPiece1.x,saucerPiece1.y,250,250);
if (d < saucerPiece1.size/2 + 50/2){
  state = `earth`;
  fadeIn=0;
}
  //saturn
  let saturnDist = dist(saucerPiece1.x,saucerPiece1.y,595,140);
if (saturnDist < saucerPiece1.size/2 + 66/2){
  state = `saturn`;
  fadeIn=0;
}
//uranus
let uranusDist = dist(saucerPiece1.x,saucerPiece1.y,350,70);
if (uranusDist < saucerPiece1.size/2 + 54/2){
state = `uranus`;
fadeIn=0;
}
//venus
let venusDist = dist(saucerPiece1.x,saucerPiece1.y,450,250);
if (venusDist < saucerPiece1.size/2 + 30/2){
state = `venus`;
fadeIn=0;
}
//mercury
let mercuryDist = dist(saucerPiece1.x,saucerPiece1.y,475,340);
if (mercuryDist < saucerPiece1.size/2 + 24/2){
state = `mercury`;
fadeIn=0;
}
//jupiter
let jupiterDist = dist(saucerPiece1.x,saucerPiece1.y,190,500);
if (jupiterDist < saucerPiece1.size/2 + 79/2){
state = `jupiter`;
fadeIn=0;
}
//neptune
let neptuneDist = dist(saucerPiece1.x,saucerPiece1.y,55,280);
if (neptuneDist < saucerPiece1.size/2 + 58/2){
state = `neptune`;
fadeIn=0;
}
//mars
let marsDist = dist(saucerPiece1.x,saucerPiece1.y,550,445);
if (marsDist < saucerPiece1.size/2 + 40/2){
state = `mars`;
fadeIn=0;
}
//sun
let sunDist = dist(saucerPiece1.x,saucerPiece1.y,375,375);
if (sunDist < saucerPiece1.size/2 + 140/2){
state = `sunDeath`;
fadeIn=0;
}
}

//displays text that corresponds to earth state
function displayEarthText(){
  fadeIn=fadeIn+fadeInSpeed;
push();
strokeWeight(4);
  textSize(90);
  textStyle(BOLD);
  fill(black);
  textAlign(CENTER,CENTER);
  text(`Welcome to`,375 ,100 );
pop();

push();
  textSize(100);
  stroke(5,134,0, fadeIn/2);
  strokeWeight(8);
  textStyle(BOLD);
  fill(17, 186,12, fadeIn);
  textAlign(CENTER,CENTER);
  text(`Earth`,375 ,650 );
pop();
}

//displays text that corresponds to saturn state
function displaySaturnText(){
  fadeIn=fadeIn+fadeInSpeed;
push();
strokeWeight(4);
  textSize(90);
  textStyle(BOLD);
  fill(black);
  textAlign(CENTER,CENTER);
  text(`Welcome to`,375 ,100 );
pop();

push();
  textSize(100);
  stroke(5,134,0, fadeIn/2);
  strokeWeight(8);
  textStyle(BOLD);
  fill(17, 186,12, fadeIn);
  textAlign(CENTER,CENTER);
  text(`Saturn`,375 ,650 );
pop();
}

//displays text that corresponds to uranus state
function displayUranusText(){
  fadeIn=fadeIn+fadeInSpeed;
push();
strokeWeight(4);
  textSize(90);
  textStyle(BOLD);
  fill(black);
  textAlign(CENTER,CENTER);
  text(`Welcome to`,375 ,100 );
pop();

push();
  textSize(100);
  stroke(5,134,0, fadeIn/2);
  strokeWeight(8);
  textStyle(BOLD);
  fill(17, 186,12, fadeIn);
  textAlign(CENTER,CENTER);
  text(`Uranus`,375 ,650 );
pop();
}

//displays text that corresponds to venus state
function displayVenusText(){
  fadeIn=fadeIn+fadeInSpeed;
push();
strokeWeight(4);
  textSize(90);
  textStyle(BOLD);
  fill(black);
  textAlign(CENTER,CENTER);
  text(`Welcome to`,375 ,100 );
pop();

push();
  textSize(100);
  stroke(5,134,0, fadeIn/2);
  strokeWeight(8);
  textStyle(BOLD);
  fill(17, 186,12, fadeIn);
  textAlign(CENTER,CENTER);
  text(`Venus`,375 ,650 );
pop();
}

//displays text that corresponds to mercury state
function displayMercuryText(){
  fadeIn=fadeIn+fadeInSpeed;
push();
strokeWeight(4);
  textSize(90);
  textStyle(BOLD);
  fill(black);
  textAlign(CENTER,CENTER);
  text(`Welcome to`,375 ,100 );
pop();

push();
  textSize(100);
  stroke(5,134,0, fadeIn/2);
  strokeWeight(8);
  textStyle(BOLD);
  fill(17, 186,12, fadeIn);
  textAlign(CENTER,CENTER);
  text(`mercury`,375 ,650 );
pop();
}

//displays text that corresponds to jupiter state
function displayJupiterText(){
  fadeIn=fadeIn+fadeInSpeed;
push();
strokeWeight(4);
  textSize(90);
  textStyle(BOLD);
  fill(black);
  textAlign(CENTER,CENTER);
  text(`Welcome to`,375 ,100 );
pop();

push();
  textSize(100);
  stroke(5,134,0, fadeIn/2);
  strokeWeight(8);
  textStyle(BOLD);
  fill(17, 186,12, fadeIn);
  textAlign(CENTER,CENTER);
  text(`Jupiter`,375 ,650 );
pop();
}

//displays text that corresponds to neptune state
function displayNeptuneText(){
  fadeIn=fadeIn+fadeInSpeed;
push();
strokeWeight(4);
  textSize(90);
  textStyle(BOLD);
  fill(black);
  textAlign(CENTER,CENTER);
  text(`Welcome to`,375 ,100 );
pop();

push();
  textSize(100);
  stroke(5,134,0, fadeIn/2);
  strokeWeight(8);
  textStyle(BOLD);
  fill(17, 186,12, fadeIn);
  textAlign(CENTER,CENTER);
  text(`Neptune`,375 ,650 );
pop();
}

//displays text that corresponds to mars state
function displayMarsText(){
  fadeIn=fadeIn+fadeInSpeed;
push();
strokeWeight(4);
  textSize(90);
  textStyle(BOLD);
  fill(black);
  textAlign(CENTER,CENTER);
  text(`Welcome to`,375 ,100 );
pop();

push();
  textSize(100);
  stroke(5,134,0, fadeIn/2);
  strokeWeight(8);
  textStyle(BOLD);
  fill(17, 186,12, fadeIn);
  textAlign(CENTER,CENTER);
  text(`Mars`,375 ,650 );
pop();
}

//displays text that corresponds to sunDeath state
function displaySunDeathText(){
  fadeIn=fadeIn+fadeInSpeed;
push();
strokeWeight(4);
  textSize(83);
  textStyle(BOLD);
  fill(black);
  textAlign(CENTER,CENTER);
  text(`You've Been Killed`,375 ,100 );
pop();

push();
  textSize(100);
  stroke(120,0,0, fadeIn/2);
  strokeWeight(8);
  textStyle(BOLD);
  fill(170, 0,0, fadeIn);
  textAlign(CENTER,CENTER);
  text(`By The Sun`,375 ,650 );
pop();
}
