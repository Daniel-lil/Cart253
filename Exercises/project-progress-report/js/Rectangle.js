class Rectangle {
  constructor(){

  }
//displays Circles
display(){
push();
noFill();
stroke(255);
rectMode(CENTER);
rect(0, 0, shapeSize, shapeSize);

rect(0 + height/5.5, 0 +  height/5.5, shapeSize, shapeSize);
rect(0 - height/5.5, 0 +  height/5.5, shapeSize, shapeSize);
rect(0 - height/5.5, 0 -  height/5.5, shapeSize, shapeSize);
rect(0 + height/5.5,0 - height/5.5, shapeSize, shapeSize);
pop();
}
}
