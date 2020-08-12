const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31;
var player;
var slingShot;

function setup() {
var canvas = createCanvas(800,700);
engine = Engine.create();
world = engine.world;

ground = new Ground(450,550,270,20);
ground2 = new Ground(650,250,260,20);

box1 = new Box(335,525,30,30);
box2 = new Box(365,525,30,30);
box3 = new Box(395,525,30,30);
box4 = new Box(425,525,30,30);
box5 = new Box(455,525,30,30);
box6 = new Box(485,525,30,30);
box7 = new Box(515,525,30,30);
box8 = new Box(545,525,30,30);
box9 = new Box(395,496,30,30);
box10= new Box(425,496,30,30);
box11= new Box(455,496,30,30);
box12= new Box(485,496,30,30);
box13= new Box(425,466,30,30); 
box14= new Box(455,466,30,30);
box15= new Box(443,436,30,30);

box16= new Box(535,227,25,25);
box17= new Box(560,227,25,25);
box18= new Box(585,227,25,25);
box19= new Box(610,227,25,25);
box20= new Box(635,227,25,25);
box21= new Box(660,227,25,25);
box22= new Box(685,227,25,25);
box23= new Box(710,227,25,25);
box24= new Box(735,227,25,25);
box25= new Box(610,202,25,25);
box26= new Box(635,202,25,25);
box27= new Box(660,202,25,25);
box28= new Box(685,202,25,25);
box29= new Box(635,177,25,25);
box30= new Box(660,177,25,25);
box31= new Box(646,152,25,25);

player = new Shooter(50,200,20);

slingShot = new SlingShot(player.body,{x:100,y:200});
}


function draw() {
  Engine.update(engine);
  background(0,0,0);  

  ground.display();
  ground2.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display(); 
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();

  player.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(player.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   slingShot.fly();
}