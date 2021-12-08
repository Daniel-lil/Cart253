//class which contains the function that displays the sphere pattern background
class Sphere {
constructor(){
}

//displays main 3d Shape
display(){
  push();
  states.colourStates();
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  sphere(1500);
  pop();
  }
}
