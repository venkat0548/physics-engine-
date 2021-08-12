// Matter.Engine,Matter.bodies,Matter.world

// Namespacing 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var ball

function setup() {
  createCanvas(1000,800);
  engine = Engine.create(); // engine = Matter.Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(500,500,1000,20,options);
  World.add(world,ground);


   var balloptions = {
    restitution : 1.2
  }

ball = Bodies.circle(500,100,40,balloptions);
  World.add(world,ball);

  console
  console.log(ground);   
}

function draw(){
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 1000, 20)
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 40, 40)
}










