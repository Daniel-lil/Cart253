class Harmony {
constructor(x,y,width,height){
this.x = windowWidth/2;
this.y = windowHeight/2;
this.width = 350;
this.height = 350;
this.toggleState = 0;
}

playHarmony() {
if (keyIsDown(65) && this.toggleState === 1){
  harmonySynth.noteAttack(`C3`, 1);
} else if (keyIsDown(83) && this.toggleState === 1){
harmonySynth.noteAttack(`D3`, 1);
} else if (keyIsDown(68) && this.toggleState === 1){
harmonySynth.noteAttack(`E3`, 1);
}  else if (keyIsDown(70) && this.toggleState === 1){
harmonySynth.noteAttack(`F3`, 1);
}  else if (keyIsDown(71) && this.toggleState === 1){
harmonySynth.noteAttack(`G3`, 1);
}  else if (keyIsDown(72) && this.toggleState === 1){
harmonySynth.noteAttack(`A4`, 1);
}  else if (keyIsDown(74) && this.toggleState === 1){
harmonySynth.noteAttack(`B4`, 1);
}  else if (keyIsDown(73) && this.toggleState === 1){
harmonySynth.noteAttack(`B4`, 1);
}  else if (keyIsDown(75) && this.toggleState === 1){
harmonySynth.noteAttack(`C4`, 1);
}
}

buttonDisplay(){
  push();
  rectMode(CENTER);
  fill(255);
  rect(this.x,this.y,this.width);
  pop();
  push();
    textSize(37);
    textStyle(BOLD);
    fill(0);
    textAlign(CENTER,CENTER);
    text(`click here to`, windowWidth/2, windowHeight/2 - 90);
    text(`turn on the`, width/2, height/2);
    text(`harmony generator`, width/2, height/2 + 90);
    fill(255)
    textSize(20);
    text(`play keyboard with keys A through K + I`, width/2, height-30);
    pop();
}

mousePressed(){
if (mouseX < windowWidth/2 + 175 && mouseX > windowWidth/2 - 175 && mouseY > windowHeight/2 -175 && mouseY < windowHeight/2 + 175 && this.toggleState === 0){
  this.toggleState = 1;
} else if (mouseX < windowWidth/2 + 175 && mouseX > windowWidth/2 - 175 && mouseY > windowHeight/2 - 175 && mouseY < windowHeight/2 + 175 && this.toggleState === 1){
  this.toggleState = 0;

console.log(this.toggleState);
setTimeout(10000);
}
}
}
