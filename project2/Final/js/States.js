//class containing methods that tell the program what events to trigger during each state
class States {
constructor(){
}

patternStates(){
  //tells program which patterns to display during each pattern state
  if (patternState === `circleVisuals`){
  circle.display();
  } else if(patternState === `rectangleVisuals`){
  rectangle.display();
  } else if (patternState === `triangleVisuals`){
  tri.display();
  } else if (patternState === `hourglassVisuals`){
  hourglass.display();
  }
}

colourStates(){
  //tells program which colours to display during each colour state
  if (colourState === `blue`){
  background(backgroundColour/10,backgroundColour/2,backgroundColour);
  fill(backgroundShapeColour/5,backgroundShapeColour,backgroundShapeColour*2, 20);
  stroke(backgroundShapeColour/5 + 30,backgroundShapeColour + 30,backgroundShapeColour*2 + 30);
  } else if (colourState === `red`){
  background(backgroundColour,backgroundColour/10,backgroundColour/10);
  fill(backgroundShapeColour,backgroundColour/10,backgroundColour/10,20);
  stroke(backgroundShapeColour + 30,backgroundColour/10 + 30,backgroundColour/10 + 30);
  }else if (colourState === `green`){
  background(backgroundColour/9,backgroundColour,backgroundColour/11);
  fill(0,backgroundShapeColour,0,20);
  stroke(0 + 30,backgroundShapeColour + 30,0 + 30);
  }else if (colourState === `purple`){
  background(backgroundColour/2,0,backgroundColour);
  fill(backgroundShapeColour/2,0,backgroundShapeColour,20);
  stroke(backgroundShapeColour/2 + 30,0 + 30,backgroundShapeColour + 30);
  }else if (colourState === `yellow`){
  background(backgroundColour,backgroundColour/1.2,0);
  fill(backgroundShapeColour,backgroundShapeColour/1.2,0,20);
  stroke(backgroundShapeColour + 30,backgroundShapeColour/1.2 + 30,0 + 30);
  }else if (colourState === `orange`){
  background(backgroundColour,backgroundColour/2,0);
  fill(backgroundShapeColour,backgroundShapeColour/2,0,20);
  stroke(backgroundShapeColour + 30,backgroundShapeColour/2 + 30,0 + 30);
  }else if (colourState === `pink`){
  background(backgroundColour,0,backgroundColour/1.5);
  fill(backgroundShapeColour,0,backgroundShapeColour/1.5,20);
  stroke(backgroundShapeColour + 30,0 + 30,backgroundShapeColour/1.5 + 30);
  }else if (colourState === `turquoise`){
  background(0,backgroundColour,backgroundColour);
  fill(0,backgroundShapeColour,backgroundShapeColour,20);
  stroke(0 + 30,backgroundShapeColour + 30,backgroundShapeColour + 30);
  }
  }
}
