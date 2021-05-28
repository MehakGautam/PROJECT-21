var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(95,580,190,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,190,30);
    block2.shapeColor = "orange";

    block3 = createSprite(505,580,190,30);
    block3.shapeColor = "red";

    block4 = createSprite(705,580,190,30);
    block4.shapeColor = "green";
    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=3;
    ball.velocityY=3;

}

function draw() {
    background(rgb(169,169,169));
   


    if(ball.x<0){
        ball.velocityX=3;
    }
    else if(ball.x>800){
    ball.velocityX=-3;
    }
    if(ball.y<0){
        ball.velocityY=5;
    }

    //write code to bounce off ball from the block1 
    if(ball.isTouching(block1) ){
        music.play();
        ball.shapeColor = "blue";
        bounceoff(ball,block1)
    }
    if(ball.isTouching(block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX=0;
        ball.velocityY=0;
        //write code to stop music
        music.stop();
    }
    //write code to bounce off ball from the block3
    if(ball.isTouching(block3)){
        ball.shapeColor = "red";
        bounceoff(ball,block3);
    }
    //write code to bounce off ball from the block4
    if(ball.isTouching(block4)){
        ball.shapeColor = "green";
        bounceoff(ball,block4);
    }
    
    drawSprites();
}

function bounceoff(object1,object2){

    if(object1.x-object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2){
        object1.velocityX = 3
        
    }
  
    if(object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
        object1.velocityY = object1.velocityY * (-1);
       
    }
  
  
  }