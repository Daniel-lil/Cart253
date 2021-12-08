//class which contains the function that displays the circles for the circle pattern
class Hourglass {
  constructor(){
}

//displays triangles
display(){
push();
noFill();
stroke(255);
//centre
triangle(0, -shapeSize/2, -shapeSize/1.732, shapeSize/2, shapeSize/1.732, shapeSize/2);
triangle(0, shapeSize/2, shapeSize/1.732, -shapeSize/2, -shapeSize/1.732, -shapeSize/2);
//right
triangle(height/2.4, -shapeSize/2, -shapeSize/1.732  + height/2.4, shapeSize/2, shapeSize/1.732 +height/2.4, shapeSize/2);
triangle(height/2.4, shapeSize/2, shapeSize/1.732 + height/2.4, -shapeSize/2, -shapeSize/1.732 +height/2.4, -shapeSize/2);
//left
triangle(-height/2.4, -shapeSize/2, -shapeSize/1.732  -height/2.4, shapeSize/2, shapeSize/1.732 -height/2.4, shapeSize/2);
triangle(-height/2.4, shapeSize/2, shapeSize/1.732 -height/2.4, -shapeSize/2, -shapeSize/1.732 -height/2.4, -shapeSize/2);
//top
triangle(0, -shapeSize/2 - height/2.4, -shapeSize/1.732, shapeSize/2 - height/2.4, shapeSize/1.732, shapeSize/2 - height/2.4);
triangle(0, shapeSize/2 - height/2.4, shapeSize/1.732, -shapeSize/2 - height/2.4, -shapeSize/1.732, -shapeSize/2 - height/2.4);
//bottom
triangle(0, -shapeSize/2 + height/2.4, -shapeSize/1.732, shapeSize/2 + height/2.4, shapeSize/1.732, shapeSize/2 + height/2.4);
triangle(0, shapeSize/2 + height/2.4, shapeSize/1.732, -shapeSize/2 + height/2.4, -shapeSize/1.732, -shapeSize/2 + height/2.4);

triangle(height /5.5, -shapeSize/2 + height /5.5, -shapeSize/1.732 + height /5.5, shapeSize/2 + height /5.5, shapeSize/1.732 + height /5.5, shapeSize/2 + height /5.5);
triangle(height /5.5, shapeSize/2 + height /5.5, shapeSize/1.732 + height /5.5, -shapeSize/2 + height /5.5, -shapeSize/1.732 + height /5.5, -shapeSize/2 + height /5.5);
triangle(-height /5.5, -shapeSize/2 + height /5.5, -shapeSize/1.732 - height /5.5, shapeSize/2 + height /5.5, shapeSize/1.732 - height /5.5, shapeSize/2 + height /5.5);
triangle(-height /5.5, shapeSize/2 + height /5.5, shapeSize/1.732 - height /5.5, -shapeSize/2 + height /5.5, -shapeSize/1.732 - height /5.5, -shapeSize/2 + height /5.5);
triangle(-height /5.5, -shapeSize/2 - height /5.5, -shapeSize/1.732 - height /5.5, shapeSize/2 - height /5.5, shapeSize/1.732 - height /5.5, shapeSize/2 - height /5.5);
triangle(-height /5.5, shapeSize/2 - height /5.5, shapeSize/1.732 - height /5.5, -shapeSize/2 - height /5.5, -shapeSize/1.732 - height /5.5, -shapeSize/2 - height /5.5);
triangle(height /5.5, -shapeSize/2 - height /5.5, -shapeSize/1.732 + height /5.5, shapeSize/2 - height /5.5, shapeSize/1.732 + height /5.5, shapeSize/2 - height /5.5);
triangle(height /5.5, shapeSize/2 - height /5.5, shapeSize/1.732 + height /5.5, -shapeSize/2 - height /5.5, -shapeSize/1.732 + height /5.5, -shapeSize/2 - height /5.5);
pop();
}
}
