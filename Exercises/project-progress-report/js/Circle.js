class Circle {
  constructor(){

  }
//displays Circles
display(){
push();
noFill();
stroke(255);
ellipse(0 + height/5.5, 0 +  height/5.5, shapeSize,);
ellipse(0 - height/5.5, 0 +  height/5.5, shapeSize,);
ellipse(0 - height/5.5, 0 -  height/5.5, shapeSize,);
ellipse(0 + height/5.5,0 - height/5.5, shapeSize,);
ellipse(0, 0, shapeSize,);
pop();
}
}
