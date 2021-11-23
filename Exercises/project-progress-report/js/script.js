/**
Progress Report Cart 253 Final
Daniel Little

This is a progress report for the audio visualizer for my
final CART 253 project
*/

"use strict";
/*declares variables for -the song
-the fft and the data coming from it
-the amplitudes for low and high frequencies
-the data used to control attributes of cube
-the data used to control background colour
-the various classes for different shapes
-the current state
*/
let song;
let fft;
let levels;
let ampLow;
let ampHigh;
let cubeSize;
let circleSize;
let cubeColour;
let cube;
let circle;
let rectangle;
let backgroundColour;
let state;

/**
Loads music from assets and stores it in song variable
*/
function preload() {
song = loadSound(`assets/sounds/Song.mp3`);
}

/**
-creates the canvas
-toggles song when mouse is clicked on the canvas
-stores fft data in variable fft
-calls constructor from the various shape classes
*/
function setup() {
  let cnv = createCanvas(windowWidth,windowHeight, WEBGL);
  cnv.mouseClicked(playOrPauseSong);
  fft = new p5.FFT();
  circle = new Circle();
  cube = new Cube();
  rectangle = new Rectangle();
  state = `rectangleVisuals`;
}

/**
-uses FFTs to analyze amplitudes at various frequencies of song, uses data to control shapes and colours
-low frequency range changes the shape size
-high frequency data controls the colours of the background and 3d shapes
-displays 2dshapes
-displays Cube based shape while the A key key is pressed
*/
function draw() {
//storing fft data in variables to use for controlling shapes+colours and also mapping fft data ranges so they suit my needs better
levels = fft.analyze();
ampLow = fft.getEnergy(30, 500);
circleSize = map(ampLow, 0, 255, 1, 1275);
ampHigh = fft.getEnergy(600, 3000);
backgroundColour = map(ampHigh, 0, 255, -120, 255);
cubeSize = map(ampLow, 0, 255, -100, 3);
cubeColour = ampHigh;

//setting background colour
background(backgroundColour/10,backgroundColour/2,backgroundColour);

//if in state circle display circles if in rectangle display rectangles
if (state === `circleVisuals`){
circle.display();
} else if(state === `rectangleVisuals`){
rectangle.display();
}

//displays main 3d Shape if key A is pressed
if (keyIsDown (65)){
cube.display();
}
}

//if you press 1 it triggers circle patterns, 2 triggers rectangle patterns
function keyPressed(){
  if(keyCode === 50){
    state = `rectangleVisuals`;
  } else if(keyCode === 49){
    state = `circleVisuals`;
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
