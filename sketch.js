const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(900,600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball=Bodies.circle(200,350,10,ball_options);
    World.add(world, ball);

	groundObj=new Ground(width/2,550,width,10);
	leftSide=new Dustbin(650,490,10,120);
	rightSide=new Dustbin (800,490,10,120);


	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  
  background("yellow");

  ellipse(ball.position.x,ball.position.y,20);

  groundObj.display();
 leftSide.display();
 rightSide.display();
Engine.update(engine)
drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, {x:700,y:0}, {x:15,y:-15})

   }
}

