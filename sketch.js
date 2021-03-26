
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var ball1,ball2,ball3,ball4,ball5;
var log ;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
    ball1 = new Ball(400,250,50);
	ball2 = new Ball(400,250,50);
	ball3 = new Ball(400,250,50);
	ball4 = new Ball(400,250,50);
	ball5 = new Ball(400,250,50);
  log=new Ground (400,200,250,50);
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  ball1.display();
  ground.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  log.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
	//Matter.Body.setPosition(ball2.body, {x: mouseX , y: mouseY});
	//Matter.Body.setPosition(ball3.body, {x: mouseX , y: mouseY});
	//Matter.Body.setPosition(ball4.body, {x: mouseX , y: mouseY});
	//Matter.Body.setPosition(ball5.body, {x: mouseX , y: mouseY});
}


