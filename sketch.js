var canvas;
var floor1, floor2, floor3, floor4;
var ball, edges;
var music;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   floor1=createSprite(0,580,360,30);
   floor1.shapeColor=rgb(0,0,255);
   floor2=createSprite(295,580,200,30);
   floor2.shapeColor=rgb(255,128,0); 
   floor3=createSprite(515,580,200,30);
   floor3.shapeColor=rgb(153,0,76);
   floor4=createSprite(740,580,220,30);
   floor4.shapeColor=rgb(0,100,0);


ball= createSprite(random(20,750),100,40,40);
ball.shapeColor= rgb(255,255,255);
ball.velocityX=4;
ball.velocityY=9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
 
    if(floor1.isTouching(ball)&& ball.bounceOff(floor1)){
        ball.shapeColor= rgb(0,0,225);
        music.play();
    }
    
    if(floor2.isTouching(ball)){
        ball.shapeColro =rgb(255,128,0);
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }

    if(floor3.isTouching(ball)&& ball.bounceOff(floor3)){
        ball.shapeColor= rgb(153,0,76);
    }

    if(floor4.isTouching(ball)&& ball.bounceOff(floor4)){
        ball.shapeColor= rgb(0,100,0);
    }

drawSprites();
}
