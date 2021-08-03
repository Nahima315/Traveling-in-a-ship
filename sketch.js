var seaImg, sea;
var ship1Img,ship2Img,ship3Img,ship4Img,ship_sailing;


function preload(){
ship_sailing = loadAnimation("ship1Img","ship2Img","ship3Img","ship4Img");
sea = addImage("seaImg");
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(50,160,20,50);
  ship.addAnimation("sailing",ship_sailing);
}

function draw() {
  background("blue");
 
}