const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

function preload(){
  titleimg=loadImage("title.png");
}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  title=createSprite(396,255,20,20);
  title.addImage(titleimg)
  //title.velocityX=-10;
  title.scale=0.55;
 title.lifetime=100;
  /*g1=new Ground(40,690,60,10)
  g2=new Ground(132,690,60,10)
  g3=new Ground(206,690,60,10)
  g4=new Ground(290,690,60,10)
  g5=new Ground(372,690,60,10)
  g6=new Ground(445,690,60,10)
  g7=new Ground(524,690,60,10)
  g8=new Ground(607,690,60,10)
  g9=new Ground(684,690,60,10)
  g10=new Ground(764,690,60,10)*/

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2+70, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }

  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }


  //create particle objects
  
  
}
 


function draw() {
  background(0,255,213);
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  //g1.display();
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
  
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
   if(frameCount%150===0){
     particles.push(new Particle(random(width/2-10,width/2-100),10,10));
 }
for (var h = 0; h < particles.length; h++) {
  particles[h].display();   
}

push();
fill("Aqua");
stroke("black");
strokeWeight(4);
textSize(20);
text("X"+mouseX+","+"Y"+mouseY,700,100);

pop();
drawSprites();
}