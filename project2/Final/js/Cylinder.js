//class which contains the function that displays the sphere pattern background
class Cylinder {
constructor(){
}

//displays main 3d Shape
display(){
  push();
  states.colourStates();
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  cylinder(2000);
  pop();
  }
}
