class Cube {
  constructor(){

  }
  //displays main 3d Shape
display(){
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(cubeColour/5,cubeColour,cubeColour*2, 180);
  stroke(cubeColour/5,cubeColour,cubeColour*2);
  box(90 * cubeSize, 90 * cubeSize, 90 * cubeSize,);
  //displays more see through shapes
  noStroke();
  fill(cubeColour/5,cubeColour,cubeColour*2, 20);
  box(150 * cubeSize, 90 * cubeSize, 90 * cubeSize,);
  box(30 * cubeSize, 90 * cubeSize, 90 * cubeSize,);
  box(90 * cubeSize, 150 * cubeSize, 90 * cubeSize,);
  box(90 * cubeSize, 30 * cubeSize, 90 * cubeSize,);
  box(90 * cubeSize, 90 * cubeSize, 150 * cubeSize,);
  box(90 * cubeSize, 90 * cubeSize, 30 * cubeSize,);
  pop();
}
}
