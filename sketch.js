
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constrait = Matter.Constraint;

let engine;
let world;

var ground,ball2;

var top_wall;
var ball;

var btn1;
var btn2;
var rope,rope2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  

  ground =new Ground(200,390,400,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  
  ball2 = Bodies.circle(100,270,20,ball_options);
  World.add(world,ball2);

  rope = Constrait.create({
    pointA:{x:200,y:100},
    bodyA:null,
    bodyB:ball,
    stiffness:0.2,
    length:100

   })
  World.add(world,rope);
  
  rope2= Constrait.create({
    pointA:{x:0,y:0},
    pointB:{x:0,y:0},
    bodyA:ball,
    bodyB:ball2,
    stiffness:0.2,
    length:100

  })
World.add(world,rope2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("yellow");
  Engine.update(engine);
  

fill("orange");
ellipse(ball2.position.x,ball2.position.y,20);
fill("cyan");
  ellipse(ball.position.x,ball.position.y,20);
 push();
  stroke("red");
  strokeWeight(4);
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);

  line(rope.pointA.x,rope.pointA.y,ball.position.x,ball.position.y);
  pop();
  ground.show();
  
  Engine.update(engine);
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:0});
}
  


