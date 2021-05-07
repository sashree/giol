
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);

	var canvas = createCanvas(1200,400); 
	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(600,height,1200,20);
	 stone1 = new stone(700,320,70,70); 
	 stone2 = new stone(920,320,70,70);
	  rubber1 = new rubber(810, 350,70);  
	  stone3 = new stone(700,240,70,70); 
	  stone4 = new stone(920,240,70,70); 
	  rubber3 = new rubber(810, 220,70); 
	  stone5 = new stone(810,160,70,70);
	   hammer1 = new hammer(100,100); 

	Engine.run(engine);
}

	
function draw() {
  rectMode(CENTER);
  background("blue");

  angleMode(RADIANS)
      console.log(stone2.body.position.x); console.log(stone2.body.position.y); console.log(stone2.body.angle); stone1.display(); stone2.display(); ground1.display(); rubber1.display();  stone3.display(); stone4.display(); rubber3.display(); stone5.display();  hammer1.display(); 
  
	  stone1.display()
	  stone2.display()
	  stone3.display()
	  stone4.display()
	  stone5.display()
	  rubber1.display()
	  rubber3.display()
	  ground1.display()
	  hammer1.display()
  drawSprites();
 
}



