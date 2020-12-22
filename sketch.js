const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var divisions=[];
var divisionHeight=300;
var balls=[];
var plinko=[];
var turn,particle;

function setup() {
  createCanvas(550,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(200,790,700,20);


  for (var k = 10; k <=width; k = k + 80)
  { 
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var m = 10; m <=width; m = m + 60)
  { 
    balls.push(new Ball(m,350,20));
  }

  for (var l = 30; l<=width; l = l + 70)
  { 
    balls.push(new Ball(l,270,20));
  }

  for (var c = 10; c<=width; c = c + 70)
  { 
    balls.push(new Ball(c,200,20));
  }

  for (var l = 30; l<=width; l = l + 70)
  { 
    balls.push(new Ball(l,130,20));
  }

}

function draw() {
    background("black");
    Engine.update(engine);
  
    for (var i= 0; i < divisions.length; i++) 
    { 
      divisions[i].display(); 
    }
    for (var m= 0; m< balls.length; m++) 
    { 
      balls[m].display(); 
    }
    
    ground.display();

    if(particle!=null){
      particle.display();
    }
  
}


function mousePressed(){
  particle=new Particle(mouseX,10, 10,10);
  turn=turn+1;
}


