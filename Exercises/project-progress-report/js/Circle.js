class Circle {
  constructor(){

  }
//displays Circles
display(){
push();
noFill();
stroke(255);
ellipse(0 + width/5.5, 0 +  height/5.5, circleSize,);
ellipse(0 - width/5.5, 0 +  height/5.5, circleSize,);
ellipse(0 - width/5.5, 0 -  height/5.5, circleSize,);
ellipse(0 + width/5.5,0 - height/5.5, circleSize,);
ellipse(0, 0, circleSize,);
pop();
}
}
