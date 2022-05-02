let ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
let ground
function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,370,400,10,options)
  World.add(world,ground);
  var boptions={
    restitution:1.0
  }
  ball=Bodies.circle(200,10,30,boptions);

  World.add(world,ball);
  
}

function draw() 
{
  background(51);
  Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30)
  
}

