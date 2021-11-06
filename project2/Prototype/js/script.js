/**
Project 2 Prototype
Daniel Little

making an audio visualizer
this is me trying out basic functions for it
*/

"use strict";
let song;
let volume;
//declaring properties of circle
let circle = {
  size: 0,
  fill: 0,
};
/**
preloading song
*/
function preload() {
  song = loadSound(`assets/sounds/Song.mp3`);
}
/**
Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);
//sets background to black
}
/**
Description of draw()
*/
function draw() {
  //sets background to black
background(0);
//pause and play song
  function mousePressed(){
  userStartAudio();
  playSong();
}

function playSong(){
  if (song.isPlaying()){
    song.pause();
  }else {
    song.play();
  }
  }
push();
//display circle
fill(circle.fill);
stroke(255);
ellipse(windowWidth/2,windowHeight/2,circle.size);
pop();
}
