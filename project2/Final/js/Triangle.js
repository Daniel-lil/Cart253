//class which contains the function that displays the circles for the circle pattern
class Triangle {
  constructor(){

  }
//displays triangles
display(){
push();
noFill();
stroke(255);

//bottom centre
triangle(0, -shapeSize/2 + height/10, -shapeSize/1.732, shapeSize/2 + height/10, shapeSize/1.732, shapeSize/2 + height/10);
//top centre
triangle(0, shapeSize/2 - height/10, shapeSize/1.732 , -shapeSize/2 - height/10, -shapeSize/1.732 , -shapeSize/2 - height/10);
//left centre
triangle(shapeSize/2 - height/10, 0, -shapeSize/2 - height/10, shapeSize/1.732, -shapeSize/2 - height/10, -shapeSize/1.732);
//right centre
triangle(-shapeSize/2 + height/10, 0, shapeSize/2 + height/10  ,-shapeSize/1.732 , shapeSize/2 + height/10, shapeSize/1.732 );

//bottom outside
triangle(0 , -shapeSize/2 + height/10 + height/4, -shapeSize/1.732, shapeSize/2 + height/10 + height/4, shapeSize/1.732, shapeSize/2 + height/10 + height/4);
//top outside
triangle(0 , shapeSize/2 - height/10 -height/4, shapeSize/1.732 , -shapeSize/2 - height/10 -height/4, -shapeSize/1.732, -shapeSize/2 - height/10 -height/4);
//left outside
triangle(shapeSize/2 - height/10 - height/4, 0, -shapeSize/2 - height/10 - height/4, shapeSize/1.732, -shapeSize/2 - height/10 - height/4, -shapeSize/1.732);
//right outside
triangle(-shapeSize/2 + height/10 + height/4, 0, shapeSize/2 + height/10 + height/4, -shapeSize/1.732 , shapeSize/2 + height/10 + height/4, shapeSize/1.732 );

//bottom outside
triangle(0 , -shapeSize/2 + height/10 + height/7.5, -shapeSize/1.732, shapeSize/2 + height/10 + height/7.5, shapeSize/1.732, shapeSize/2 + height/10 + height/7.5);
//top outside
triangle(0 , shapeSize/2 - height/10 -height/7.5, shapeSize/1.732 , -shapeSize/2 - height/10 -height/7.5, -shapeSize/1.732, -shapeSize/2 - height/10 -height/7.5);
//left outside
triangle(shapeSize/2 - height/10 - height/7.5, 0, -shapeSize/2 - height/10 - height/7.5, shapeSize/1.732, -shapeSize/2 - height/10 - height/7.5, -shapeSize/1.732);
//right outside
triangle(-shapeSize/2 + height/10 + height/7.5, 0, shapeSize/2 + height/10 + height/7.5, -shapeSize/1.732 , shapeSize/2 + height/10 + height/7.5, shapeSize/1.732 );

pop();
}
}
