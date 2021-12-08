//class which contains the function that displays the cube pattern background
class Cube {
  constructor(){

  }
  //displays main 3d Shape
  display(){
  push();
  states.colourStates();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(9000, 9000, 9000,);
  //displays more see through shapes
  box(15000, 9000, 9000,);
  box(3000, 9000, 9000,);
  box(9000, 15000, 9000,);
  box(9000, 3000, 9000,);
  box(9000, 9000, 15000,);
  box(9000, 9000, 3000,);
  pop();
}
}
