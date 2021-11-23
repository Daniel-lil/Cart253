class Rectangle {
  constructor(){

  }
//displays Circles
display(){
push();
noFill();
stroke(255);
rectMode(CENTER);
rect(0, 0, circleSize, circleSize);

rect(0 + width/5.5, 0 +  height/5.5, circleSize, circleSize);
rect(0 - width/5.5, 0 +  height/5.5, circleSize, circleSize);
rect(0 - width/5.5, 0 -  height/5.5, circleSize, circleSize);
rect(0 + width/5.5,0 - height/5.5, circleSize, circleSize);
pop();
}
}
