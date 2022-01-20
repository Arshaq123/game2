var PLAY = 1;
var END = 0;
var gameState = PLAY;

var Jet ,aliens , lives ; 
var jetImg , aliensImg , livesImg;


var score=0;

var play,playImg,gameOver,gameOverImg;
var reset , resetImage
var MOON1,MOONImg;
var space,spaceImg;

function preload(){

  jetImg=loadImage("Images/Jet1.png");
  aliensImg=loadImage("Images/invader1.png");
  livesImg=loadImage("Images/Lives.png");
  gameOverImg=loadImage("Images/gameOver.png");
  playImg=loadImage("Images/Play.png");
  resetImage=loadImage("Images/restart.png");
  MOONImg=loadImage("Images/MOON.png");
  spaceImg=loadImage("Images/Space.png");


}

function setup() {
  createCanvas(1000, 700);
  
  jet=createSprite(300,500,50,50);
  jet.addImage(jetImg);
  aliens=createSprite(600,190,50,50);
  aliens.addImage(aliensImg);
  aliens.scale=0.1;
  gameOver=createSprite(300,450,50,50);
  gameOver.addImage(gameOverImg);
  gameOver.visible=false;
  reset=createSprite(280,450,50,50);
  reset.addImage(resetImage);
  reset.visible=false;
  MOON1=createSprite(95,180,50,50);
  MOON1.addImage(MOONImg);
  MOON1.scale=0.4;
  space=createSprite(200,700,20,20);
  space.addImage(spaceImg);
  space.visible=false;
}

function draw() {

  background("black");

  if(keyDown("left_arrow")){
    jet.x=jet.x-3
  }

  if(keyDown("right_arrow")){
    jet.x=jet.x+3
  }

  if(keyDown("up_arrow")){
    jet.y=jet.y-2
  }

  if(keyDown("down_arrow")){
    jet.y=jet.y+2
  }

  s=00;

  textSize(18);
  stroke("white")
  strokeWeight(10)
  text("score:"+s,300,20,50,50)



  drawSprites();
}
    
  


function reset(){
  
  
}