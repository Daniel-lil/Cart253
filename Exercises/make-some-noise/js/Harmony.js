class Harmony {
constructor(x,y,width,height){
this.x = windowWidth/2;
this.y = windowHeight/2;
this.width = 350;
this.height = 350;
}

playHarmony() {
if (keyIsDown(65)){
  harmonySynth.noteAttack(`C3`,1);
} else if (keyIsDown(83)){
harmonySynth.noteAttack(`D3`,1);
} else if (keyIsDown(68)){
harmonySynth.noteAttack(`E3`,1);
}  else if (keyIsDown(70)){
harmonySynth.noteAttack(`F3`,1);
}  else if (keyIsDown(71)){
harmonySynth.noteAttack(`G3`,1);
}  else if (keyIsDown(72)){
harmonySynth.noteAttack(`A4`,1);
}  else if (keyIsDown(74)){
harmonySynth.noteAttack(`B4`,1);
}  else if (keyIsDown(73)){
harmonySynth.noteAttack(`B4`,1);
}  else if (keyIsDown(75)){
harmonySynth.noteAttack(`C4`,1);
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
    text(`toggle the`, width/2, height/2);
    text(`harmony generator`, width/2, height/2 + 90);
    pop();
}

}
