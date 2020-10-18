const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,600,1);

  ground = new Ground(400, 680, 800, 20);
  
  leftSide = new Dustbin(550, 620, 5, 100);
  bottom = new Dustbin(610,710, 100, 5);
  rightSide = new Dustbin(670, 620, 5, 100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);

  background(0);
  
  Engine.update(engine);

  ground.display();
  paper.display();
  leftSide.display();
  rightSide.display();
  bottom.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:0.15, y:-0.15})
  }
}