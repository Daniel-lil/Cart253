/**
Prototype audio visualizer
Daniel Little

Very basic Prototype of my 2nd project and testing of using
amplitude data from a song to modulate attributes of object
*/

"use strict";
let song;
let amplitude;

/**
preload song
*/
function preload() {
song = loadSound(`assets/sounds/Song.mp3`);
}

/**
creates canvas, ability to play song and declares variable to store amplitude
*/
function setup() {
let cnv = createCanvas(windowWidth,windowHeight);
cnv.mouseClicked(playOrPauseSong);
amplitude = new p5.Amplitude();
}


/**
draws circles and pauses + plays song
*/
function draw() {
background(0);

//gets amplitude data and maps it to a bigger scale for the shapes
let level = amplitude.getLevel();
let size = map(level, 0, 1, 0, 4000);
//draws shapes
ellipse(windowWidth/3, windowHeight/3, size,);
ellipse(windowWidth/3*2, windowHeight/3, size,);
ellipse(windowWidth/3*2, windowHeight/3*2, size,);
ellipse(windowWidth/3, windowHeight/3*2, size,);
ellipse(windowWidth/2, windowHeight/2, size,);
fill(0);
stroke(255);
}

//pauses + plays song
function playOrPauseSong() {
  if (song.isPlaying() ){
    song.pause();
  } else {
    song.loop();
                amplitude = new p5.Amplitude();
                amplitude.setInput(song);
  }
}
