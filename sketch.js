var ground1,box1,box2,box3,paper1

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world
	
	


	box1 = new Box(600,630,400,30);
	box2 = new Box(800,550,30,150);
	box3 = new Box(400,550,30,150);
	
	paper1 = new Paper(200,645,50);
	ground1 = new Ground(700,650,1400,30);
	 Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
	
	box1.display();
	box2.display();
	box3.display();
	ground1.display();
	paper1.display();

  drawSprites();
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:200,y:-500});

		}
	}



