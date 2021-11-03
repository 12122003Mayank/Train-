const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;


function preload(){
  bg=loadImage("images/bg.jpg")
}
function setup() {
  createCanvas(1550,750);
  myEngine = Engine.create();
  myWorld= myEngine.world;
 ground=new Ground(775,740,1550,10)
 coach1=new Boggie(50,600,70,70)
 coach2=new Boggie(150,600,70,70)
 coach3=new Boggie(250,600,70,70)
 coach4=new Boggie(350,600,70,70)
 coach5=new Boggie(450,600,70,70)
 coach6=new Boggie(550,600,70,70)
 chain1=new Chain(coach1.body,coach2.body)
 chain2=new Chain(coach2.body,coach3.body)
 chain3=new Chain(coach3.body,coach4.body)
 chain4=new Chain(coach4.body,coach5.body)
 chain5=new Chain(coach5.body,coach6.body)
 rock=new Rock(1100,700,100,100)
 
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  coach1.show();
  coach2.show(); 
  coach3.show();
  coach4.show();
  coach5.show();
  coach6.show();
  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();
  rock.show();
  if(keyDown(RIGHT_ARROW))
  {
    Matter.Body.applyForce(coach6.body,coach6.body.position,{x:0.5,y:0})
  }
}