class Triangle {
  constructor(){

  }
//displays Circles
display(){
push();
noFill();
stroke(255);
triangle(0, 0 - circleSize/2, 0 - circleSize/1.732, 0 + circleSize/2, 0 + circleSize/1.732, 0 +circleSize/2);
triangle(0, 0 + circleSize/2, 0 + circleSize/1.732, 0 - circleSize/2, 0 - circleSize/1.732, 0 -circleSize/2);

triangle(0 + height /5.5, 0 - circleSize/2 + height /5.5, 0 - circleSize/1.732 + height /5.5, 0 + circleSize/2 + height /5.5, 0 + circleSize/1.732 + height /5.5, 0 +circleSize/2 + height /5.5);
triangle(0 + height /5.5, 0 + circleSize/2 + height /5.5, 0 + circleSize/1.732 + height /5.5, 0 - circleSize/2 + height /5.5, 0 - circleSize/1.732 + height /5.5, 0 -circleSize/2 + height /5.5);

triangle(0 - height /5.5, 0 - circleSize/2 + height /5.5, 0 - circleSize/1.732 - height /5.5, 0 + circleSize/2 + height /5.5, 0 + circleSize/1.732 - height /5.5, 0 +circleSize/2 + height /5.5);
triangle(0 - height /5.5, 0 + circleSize/2 + height /5.5, 0 + circleSize/1.732 - height /5.5, 0 - circleSize/2 + height /5.5, 0 - circleSize/1.732 - height /5.5, 0 -circleSize/2 + height /5.5);

triangle(0 - height /5.5, 0 - circleSize/2 - height /5.5, 0 - circleSize/1.732 - height /5.5, 0 + circleSize/2 - height /5.5, 0 + circleSize/1.732 - height /5.5, 0 +circleSize/2 - height /5.5);
triangle(0 - height /5.5, 0 + circleSize/2 - height /5.5, 0 + circleSize/1.732 - height /5.5, 0 - circleSize/2 - height /5.5, 0 - circleSize/1.732 - height /5.5, 0 -circleSize/2 - height /5.5);

triangle(0 + height /5.5, 0 - circleSize/2 - height /5.5, 0 - circleSize/1.732 + height /5.5, 0 + circleSize/2 - height /5.5, 0 + circleSize/1.732 + height /5.5, 0 +circleSize/2 - height /5.5);
triangle(0 + height /5.5, 0 + circleSize/2 - height /5.5, 0 + circleSize/1.732 + height /5.5, 0 - circleSize/2 - height /5.5, 0 - circleSize/1.732 + height /5.5, 0 -circleSize/2 - height /5.5);


pop();
}
}
