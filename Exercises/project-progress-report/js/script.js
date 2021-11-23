/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let song;
let fft;
let ampLow;
let ampHigh;
let boxSize;


/**
Description of preload
*/
function preload() {
song = loadSound(`assets/sounds/Song.mp3`);
}


/**
Description of setup
*/
function setup() {
  let cnv = createCanvas(windowWidth,windowHeight, WEBGL);
  cnv.mouseClicked(playOrPauseSong);
  fft = new p5.FFT();
}


/**
Description of draw()
*/
function draw() {

let levels = fft.analyze();
ampLow = fft.getEnergy(30, 500);
let circleSize = map(ampLow, 0, 255, 1, 1275);
let spinSpeed = map(ampLow, 0, 255, 0, 0.5);
ampHigh = fft.getEnergy(600, 3000);
let backgroundColour = map(ampHigh, 0, 255, -100, 255);
let cubeColour = ampHigh;

background(backgroundColour/10,backgroundColour/2,backgroundColour);

//draws Circles
push();
noFill();
stroke(255);
ellipse(0 + width/5.5, 0 +  height/5.5, circleSize,);
ellipse(0 - width/5.5, 0 +  height/5.5, circleSize,);
ellipse(0 - width/5.5, 0 -  height/5.5, circleSize,);
ellipse(0 + width/5.5,0 - height/5.5, circleSize,);
ellipse(0, 0, circleSize,);
pop();

if (keyIsDown (65)){
push();
boxSize = 0 +1;
rotateZ(frameCount * 0.01);
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
fill(cubeColour/5,cubeColour,cubeColour*2, 180);
stroke(cubeColour/5,cubeColour,cubeColour*2);
box(90 * boxSize, 90 * boxSize, 90 * boxSize,);

noStroke();
fill(cubeColour/5,cubeColour,cubeColour*2, 20);
box(150 * boxSize, 90 * boxSize, 90 * boxSize,);

box(30 * boxSize, 90 * boxSize, 90 * boxSize,);

box(90 * boxSize, 150 * boxSize, 90 * boxSize,);

box(90 * boxSize, 30 * boxSize, 90 * boxSize,);

box(90 * boxSize, 90 * boxSize, 150 * boxSize,);

box(90 * boxSize, 90 * boxSize, 30 * boxSize,);
pop();
}
}


//pauses + plays song
function playOrPauseSong() {
  if (song.isPlaying() ){
    song.pause();
  } else {
    song.loop();
                fft = new p5.FFT();
                fft.setInput(song);
  }
}
