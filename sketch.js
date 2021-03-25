const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var box1, box2, box3;	

var paper;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	ground = new Ground(400, 690, 800, 20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//box1 = new box(600, 650, 40, 5);
	box1 = new Box(350, 620, 10, 80);
	box2 = new Box(400, 660, 100, 10);
	box3 = new Box(450, 620, 10, 80);

	paper = new Ball(100, 550, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  box1.display();
  box2.display();
  box3.display();

  paper.display();

  ground.display();
}



