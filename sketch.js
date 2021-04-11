var SPIDERMAN , SPIDERMANImg;
var ELECTRO , ELECTROImg;
var OSCORP , OSCORPImg;

function preload()
{
	SPIDERMANImg = loadImage ("IMAGED/SPIDER-MAN.png");
	ELECTROImg = loadImage ("IMAGED/ELECTRO.png");
  OSCORPImg = loadImage ("IMAGED/OSCORP.png");
}

function setup() {
	createCanvas(500, 500);
	SPIDERMAN = createSprite(100 , 130 , 50 , 50);
	SPIDERMAN.addImage(SPIDERMANImg);
    SPIDERMAN.scale = 0.1;

	ELECTRO = createSprite(100 , 130 , 50 , 50);
	ELECTRO.addImage(ELECTROImg);
  ELECTRO.velocityY = 2;
  ELECTRO.scale = 0.2;  
  
	OSCORP = createSprite(395 , 375 , 50 , 50);
	OSCORP.addImage(OSCORPImg);
  OSCORP.scale = 0.2;
}


function draw() { 
  background(0);
  if(keyDown(RIGHT_ARROW)){
    SPIDERMAN.velocityX = 2;
  }
  if(keyDown(LEFT_ARROW)){
    SPIDERMAN.velocityX = -2;
  }
  if(keyDown(UP_ARROW)){
    SPIDERMAN.velocityY = -2;
  }
  if(keyDown(DOWN_ARROW)){
    SPIDERMAN.velocityY = 2;
  }	
    if(ELECTRO.isTouching(SPIDERMAN)){
      textSize(17,14);
      text("GAME OVER" , 200 , 200);
    }
  drawSprites();
 
}



