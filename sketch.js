var playerhouse,energy = 0 ,gameState = "start",player1group  ,enemy1group;
var enemy1health = [],ehealth =100,phealth =100   ;


var EnemyObjectGroup=[];
var PlayerObjectGroup = [];
var player1;

function preload() {
  robotImg = loadImage("Images/fighting robo.png");
  enemyrobotImg = loadImage("Images/1.jpg");
  playerhouseImg = loadImage("Images/gothic-architecture-gothic-art-dark-fantasy-castle.jpg");
  enemyhouseImg = loadImage("Images/enemy castle.jpg");
}

function setup() {
  createCanvas(1000,600);
  playerhouse = createSprite(100, 300,50,400);
  playerhouse.addImage("apnaghar",playerhouseImg);  
  playerhouse.scale = 0.4;
  enemyhouse = createSprite(900,300,50,400);
  enemyhouse.addImage("dushmankaghar",enemyhouseImg);
  enemyhouse.scale = 0.2;
  player1group = new Group();
  enemy1group = new Group();
}


function draw() { 
story();
//textSize(20);
if(keyDown("y")){
  gameState = "play";
}
if(gameState === "play"){
  background(0);
  createpath();    
  spawnenemy();
  createEnergy();
  fightbwe1np1();
  e1touchpqhouse();
  p1touche1house();
  drawSprites();
  swpaningins();
  kuchbi();
  victory();
  //swpanbigsoilder();
  text("enemyhealth:"+ehealth,860,90);
  text("your house's health" + phealth,50,95);
}
}
function keyPressed(){
  robos();
}
