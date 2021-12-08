//class which contains the function that displays the rectangles for the rectangle pattern
class Rectangle {
  constructor(){
}

//displays Circles
  display(){
  push();
  noFill();
  stroke(255);
  rectMode(CENTER);

  rect(0, 0, shapeSize*1.5, shapeSize*1.5);
  rect(0, 0, shapeSize/3, shapeSize/3);
  rect(height/3.2, 0, shapeSize/3, shapeSize/3);
  rect(-height/3.2, 0, shapeSize/3, shapeSize/3);
  rect(0, height/3.2, shapeSize/3, shapeSize/3);
  rect(0, -height/3.2, shapeSize/3, shapeSize/3);
  rect(height/5.5, height/5.5, shapeSize, shapeSize);
  rect(height/3.2, height/3.2, shapeSize/1.5, shapeSize/1.5);
  rect(-height/5.5, height/5.5, shapeSize, shapeSize);
  rect(-height/3.2, height/3.2, shapeSize/1.5, shapeSize/1.5);
  rect(-height/5.5, -height/5.5, shapeSize, shapeSize);
  rect(-height/3.2, -height/3.2, shapeSize/1.5, shapeSize/1.5);
  rect(height/5.5, -height/5.5, shapeSize, shapeSize);
  rect(height/3.2, -height/3.2, shapeSize/1.5, shapeSize/1.5);
  pop();
}
}
