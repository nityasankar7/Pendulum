
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;
Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bob1= new bob(310,500,70)
   bob2=new bob(312,500,70)
  bob3= new bob(315,500,70)
  bob4= new bob(317,500,70)
  bob5= new bob(320,500,70)
  roof1= new roof(500,200,400,50)
  rope1= new rope(bob1.body,roof1.body,-50*2,0)
  rope2= new rope(bob2.body,roof1.body,-50*2,0)
  rope3=new rope(bob3.body,roof1.body,-50*2,0)
  rope4=new rope(bob4.body,roof1.body,-50*2,0)
  rope5=new rope(bob5.body,roof1.body,-50*2,0)
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
 drawSprites();
 bob1.display();
 bob2.display();
 roof1.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 bob3.display();
 bob4.display();
 bob5.display();


}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:20,y:-20})
  }
   
 
   
     
 }


