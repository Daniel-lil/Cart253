class Triangle {
  constructor(){

  }
//displays triangles
display(){
push();
noFill();
stroke(255);
triangle(0, 0 - shapeSize/2, 0 - shapeSize/1.732, 0 + shapeSize/2, 0 + shapeSize/1.732, 0 +shapeSize/2);
triangle(0, 0 + shapeSize/2, 0 + shapeSize/1.732, 0 - shapeSize/2, 0 - shapeSize/1.732, 0 -shapeSize/2);

triangle(0 + height /5.5, 0 - shapeSize/2 + height /5.5, 0 - shapeSize/1.732 + height /5.5, 0 + shapeSize/2 + height /5.5, 0 + shapeSize/1.732 + height /5.5, 0 + shapeSize/2 + height /5.5);
triangle(0 + height /5.5, 0 + shapeSize/2 + height /5.5, 0 + shapeSize/1.732 + height /5.5, 0 - shapeSize/2 + height /5.5, 0 - shapeSize/1.732 + height /5.5, 0 - shapeSize/2 + height /5.5);

triangle(0 - height /5.5, 0 - shapeSize/2 + height /5.5, 0 - shapeSize/1.732 - height /5.5, 0 + shapeSize/2 + height /5.5, 0 + shapeSize/1.732 - height /5.5, 0 + shapeSize/2 + height /5.5);
triangle(0 - height /5.5, 0 + shapeSize/2 + height /5.5, 0 + shapeSize/1.732 - height /5.5, 0 - shapeSize/2 + height /5.5, 0 - shapeSize/1.732 - height /5.5, 0 - shapeSize/2 + height /5.5);

triangle(0 - height /5.5, 0 - shapeSize/2 - height /5.5, 0 - shapeSize/1.732 - height /5.5, 0 + shapeSize/2 - height /5.5, 0 + shapeSize/1.732 - height /5.5, 0 + shapeSize/2 - height /5.5);
triangle(0 - height /5.5, 0 + shapeSize/2 - height /5.5, 0 + shapeSize/1.732 - height /5.5, 0 - shapeSize/2 - height /5.5, 0 - shapeSize/1.732 - height /5.5, 0 - shapeSize/2 - height /5.5);

triangle(0 + height /5.5, 0 - shapeSize/2 - height /5.5, 0 - shapeSize/1.732 + height /5.5, 0 + shapeSize/2 - height /5.5, 0 + shapeSize/1.732 + height /5.5, 0 + shapeSize/2 - height /5.5);
triangle(0 + height /5.5, 0 + shapeSize/2 - height /5.5, 0 + shapeSize/1.732 + height /5.5, 0 - shapeSize/2 - height /5.5, 0 - shapeSize/1.732 + height /5.5, 0 - shapeSize/2 - height /5.5);


pop();
}
}
