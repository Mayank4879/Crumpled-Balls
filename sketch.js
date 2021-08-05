
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperImg,paperBall;

function preload(){
	paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	groundObject=new ground(width/2,670,width,20);
	paperBall=new Paper(400, 650, 26.5);	
	dustbinObj=new dustbin(1200,650);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  dustbinObj.display();
  paperBall.display();
  groundObject.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:130,y:-145});
	}
}