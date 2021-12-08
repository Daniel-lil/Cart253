/**
Progress Report Cart 253 Final
Daniel Little

This is a progress report for the audio visualizer for my
final CART 253 project
-use keys 1 to 4 to change the pattern
-hold keys a to d for cool background or tap them for flashing lights
-use keys z to , (comma key) to change the colour scheme
*/

"use strict";
//declaring variables
//song
let song;
//variables for the various FFT information and the number ranges im mapping them to
let fft;
let levels;
let ampLow;
let ampHigh;
let backgroundShapeSize;
let shapeSize;
let backgroundShapeColour;
let backgroundColour;
//names of classes - most of which are for shapes
let cube;
let ball;
let cyl;
let circle;
let rectangle;
let tri;
let hourglass;
let states;
//2 kinds of states
let patternState;
let colourState;

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
-tells program what starting states are
*/
function setup() {
  let cnv = createCanvas(windowWidth,windowHeight, WEBGL);
  cnv.mouseClicked(playOrPauseSong);
  fft = new p5.FFT(.3);
  states = new States();
  circle = new Circle();
  rectangle = new Rectangle();
  tri = new Triangle();
  hourglass = new Hourglass();
  cube = new Cube();
  ball = new Sphere();
  cyl = new Cylinder();
  patternState = `triangleVisuals`;
  colourState = `blue`
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
  shapeSize = map(ampLow, 0, 255, 1, 600);
  ampHigh = fft.getEnergy(700, 3000);
  backgroundColour = map(ampHigh, 0, 255, -75, 255);
  backgroundShapeSize = map(ampLow, 0, 255, -100, 3);
  backgroundShapeColour = ampHigh;

//tells program which colours to display during each colour state
  states.colourStates();
//displays main 3d Shape
  backgroundShapeControl();
//tells program which patterns to display during each pattern state
  states.patternStates();
}

/**
allows the user controls over visuals by pressing computer keys
*/
function keyPressed(){
  if(keyCode === 50){
  patternState = `rectangleVisuals`;
  } else if(keyCode === 49){
  patternState = `circleVisuals`;
  } else if (keyCode === 51){
  patternState = `triangleVisuals`;
  } else if (keyCode === 52){
  patternState = `hourglassVisuals`;
  }else if (keyCode === 90){
  colourState = `blue`;
  } else if (keyCode === 86){
  colourState = `red`;
  }else if (keyCode === 77){
  colourState = `green`;
  }else if (keyCode === 88){
  colourState = `purple`;
  }else if (keyCode === 67){
  colourState = `pink`;
  }else if (keyCode === 66){
  colourState = `orange`;
  }else if (keyCode === 188){
  colourState = `turquoise`;
  }else if (keyCode === 78){
  colourState = `yellow`;
  }
}

/**
allows the user controls over visuals by holding down computer keys
*/
function backgroundShapeControl(){
  if (keyIsDown (65)){
  cube.display();
  } else if (keyIsDown (83)){
  ball.display();
}else if (keyIsDown (68)){
  cyl.display();
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
