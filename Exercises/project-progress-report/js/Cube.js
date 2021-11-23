class Cube {
  constructor(cubeSize){
this.cubeSize = 20
  }
  //displays main 3d Shape
display(){
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(cubeColour/5,cubeColour,cubeColour*2, 50);
  stroke(cubeColour/5,cubeColour,cubeColour*2, 50);
  box(90 * this.cubeSize, 90 * this.cubeSize, 90 * this.cubeSize,);
  //displays more see through shapes
  noStroke();
  fill(cubeColour/5,cubeColour,cubeColour*2, 20);
  box(150 * this.cubeSize, 90 * this.cubeSize, 90 * this.cubeSize,);
  box(30 * this.cubeSize, 90 * this.cubeSize, 90 * this.cubeSize,);
  box(90 * this.cubeSize, 150 * this.cubeSize, 90 * this.cubeSize,);
  box(90 * this.cubeSize, 30 * this.cubeSize, 90 * this.cubeSize,);
  box(90 * this.cubeSize, 90 * this.cubeSize, 150 * this.cubeSize,);
  box(90 * this.cubeSize, 90 * this.cubeSize, 30 * this.cubeSize,);
  pop();
}
}
