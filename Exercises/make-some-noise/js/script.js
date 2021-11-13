/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let synth;

/**
Description of preload
*/
function preload() {

}

/**
Description of setup
*/
function setup() {
createCanvas(windowWidth, windowHeight);

synth = new p5.PolySynth();

userStartAudio();
}

/**
Description of draw()
*/
function draw() {
background(0);

controlNotes();
}

function controlNotes() {
if (keyIsDown(65)){
  synth.noteAttack(`A3`,1,0,1);
} else if (keyIsDown(83)){
synth.noteAttack(`B3`,1,0,1);
} else if (keyIsDown(68)){
synth.noteAttack(`C3`,1,0,1);
}  else if (keyIsDown(70)){
synth.noteAttack(`D3`,1,0,1);
}  else if (keyIsDown(71)){
synth.noteAttack(`E3`,1,0,1);
}  else if (keyIsDown(72)){
synth.noteAttack(`F3`,1,0,1);
}  else if (keyIsDown(74)){
synth.noteAttack(`G3`,1,0,1);
}  else if (keyIsDown(73)){
synth.noteAttack(`G#3`,1,0,1);
}  else if (keyIsDown(75)){
synth.noteAttack(`A4`,1,0,1);
}
}
function keyReleased(){
  synth.noteRelease();
}
