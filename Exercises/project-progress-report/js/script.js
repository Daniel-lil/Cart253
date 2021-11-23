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
  let cnv = createCanvas(windowWidth,windowHeight);
  cnv.mouseClicked(playOrPauseSong);
  fft = new p5.FFT();
}


/**
Description of draw()
*/
function draw() {

let levels = fft.analyze();
ampLow = fft.getEnergy(30, 550);
let circleSize = map(ampLow, 0, 255, 1, 1250);
ampHigh = fft.getEnergy(600, 3000);
let backgroundColour = map(ampHigh, 1, 255, -80, 200);

background(backgroundColour/10,backgroundColour/2,backgroundColour);

//draws shapes
ellipse(windowWidth/3, windowHeight/3, circleSize,);
ellipse(windowWidth/3*2, windowHeight/3, circleSize,);
ellipse(windowWidth/3*2, windowHeight/3*2, circleSize,);
ellipse(windowWidth/3, windowHeight/3*2, circleSize,);
ellipse(windowWidth/2, windowHeight/2, circleSize,);
noFill();
stroke(255);
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
