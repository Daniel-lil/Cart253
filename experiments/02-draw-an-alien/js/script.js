/**
Alien + sun and moon
Daniel Little

ALIEN Drawing experiment for CART 253

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {

createCanvas(640, 480);

background(43, 10, 99);

noStroke();

//body

fill(186, 186, 186);

ellipse (320,480,150,350);

//head

fill(160,160,160);

ellipse (320,300,100,150);

fill (0,0,0);

//eyes

ellipse (300, 310, 16, 40);

ellipse (340, 310, 16, 40);

//nose

ellipse (315, 330, 4, 3);

ellipse (325, 330, 4, 3);

//mouth

rect(299,340, 40, 20, 20);

//teeth

fill(255,255,255)

rect(305,340, 5, 10, 20)

rect(312.5,340, 5, 10, 20)

rect(320,340, 5, 10, 20)

rect(327.5,340, 5, 10, 20)

rect(305,350, 5, 10, 20)

rect(312.5,350, 5, 10, 20)

rect(320,350, 5, 10, 20)

rect(327.5,350, 5, 10, 20)

//nipples
fill(0,0,0)

ellipse (290, 400, 4, 3);

ellipse (355, 400, 4, 3);


//moon

fill(140, 195, 250)

ellipse (100, 100, 100, 140);

fill(43, 10, 99)

ellipse (120, 100, 70, 90);

//sun
fill(255, 231, 94)

ellipse (540, 100, 100, 100);


}
/**
Description of draw()
*/
function draw() {

}
