/**
JavaSynth + harmonizer
Daniel Little

allows you to play notes from an a minor scale on your computer keyboard
(with an added g# because I like harmonic minor scales more)
and you can add harmonies as well
(use keys a,s,d,f,g,h,j,i,k for notes)
*/

"use strict";

let synth;
let harmonySynth;
let harmony;

/**
Description of setup
*/
function setup() {
createCanvas(windowWidth, windowHeight);
synth = new p5.PolySynth();
harmonySynth = new p5.PolySynth();
harmony = new Harmony();
userStartAudio();
}

/**

*/
function draw() {
background(0);
playNotes();
harmony.buttonDisplay();
harmony.mousePressed();
console.log(this.toggleState);
harmony.playHarmony();
}

//plays notes
function playNotes() {
if (keyIsDown(65)){
  synth.noteAttack(`A4`,1);
} else if (keyIsDown(83)){
synth.noteAttack(`B4`,1);
} else if (keyIsDown(68)){
synth.noteAttack(`C4`,1);
}  else if (keyIsDown(70)){
synth.noteAttack(`D4`,1);
}  else if (keyIsDown(71)){
synth.noteAttack(`E4`,1);
}  else if (keyIsDown(72)){
synth.noteAttack(`F4`,1);
}  else if (keyIsDown(74)){
synth.noteAttack(`G4`,1);
}  else if (keyIsDown(73)){
synth.noteAttack(`G#4`,1);
}  else if (keyIsDown(75)){
synth.noteAttack(`A5`,1);
}
}
//releases notes
function keyReleased(){
  synth.noteRelease();
  harmonySynth.noteRelease();
}
