var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var turn = 0 ;
var divisionHeight=300;
var score =0;
var gameState = "start";
var particle;
var count = 0 ;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  //creating the divisions array.

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

//creating the plinkos line 1
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }
//creating the plinkos line 2
    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }
//creating the plinkos line 3
     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }
//creating the plinkos line 4
     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  Engine.update(engine);
 //display plinkos
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //display divison
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   //display score for divisions
   text("500",15,550);
   text("500",95,550);
   text("500",175,550);
   text("500",255,550);
   text("100",335,550);
   text("100",415,550);
   text("100",495,550);
   text("200",575,550);
   text("200",655,550);
   text("200",735,550);
   //to display particle only when created and when number of turns is not more than 5
   if(count > 0 && count <=5){
    particle.display();
    //increment score only when crossed threshold Y axis 
    if(particle.body.position.y > 450 && turn == 0 ){
    if(particle.body.position.x<=300){
      score = score + 500;
      turn = 1;
    }
    else if(particle.body.position.x > 300 && particle.body.position.x<= 600){
        score = score + 100;
        turn = 1;
    }
    else if(particle.body.position.x > 600 && particle.body.position.x < 900){
        score = score + 200;
        turn = 1;
    }
  }
}//game end of 5 turns reached.
else if(count >5){
  text("Game Over",300,300);
  gameState ="end";
}
   text("SCORE: "+ score,650,50);
  }
  

   
//when mouse pressed create particle till gameend.
function mousePressed(){
  if(gameState !=="end"){
    count++;
    turn = 0 ;
    particle = new Particle(mouseX,10,10,10);
  }
  
}