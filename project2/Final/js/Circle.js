//class which contains the function that displays the circles for the circle pattern
class Circle {
  constructor(){

  }
//displays Circles
  display(){
  push();
  noFill();
  stroke(255);

  ellipse(height/5.5, height/5.5, shapeSize,);
  ellipse(height/3.2, height/3.2, shapeSize/1.5,);
  ellipse(- height/5.5, height/5.5, shapeSize,);
  ellipse(- height/3.2, height/3.2, shapeSize/1.5,);
  ellipse(- height/5.5,- height/5.5, shapeSize,);
  ellipse(- height/3.2,- height/3.2, shapeSize/1.5,);
  ellipse(height/5.5,- height/5.5, shapeSize,);
  ellipse(height/3.2,- height/3.2, shapeSize/1.5,);
  ellipse(0, 0, shapeSize*1.5,);
  ellipse(0, 0, shapeSize/2.5,);
  ellipse(height/2.8, 0, shapeSize/1.5,);
  ellipse(-height/2.8, 0, shapeSize/1.5,);
  ellipse(0, height/2.8, shapeSize/1.5,);
  ellipse(0, -height/2.8, shapeSize/1.5,);
  pop();
}
}
