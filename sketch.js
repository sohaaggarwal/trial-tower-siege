const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;


function setup() {
  var canvas=createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
  ground=new Grounds(400,400,800,10);
  stand=new Grounds(400,300,400,30);
  box1=new Boxes(200,500,60,40);
}

function draw() {
  background("white");  
  Engine.update(engine);
  ground.display();
  stand.display();
  box1.display();
 

}
