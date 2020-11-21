var monkey,monkeyImage;
var banana, bananaImage;
var stone,stoneImage;
var jungle,jungleImage;
var invisibleGround;
var score;

function preload()
{
  //monkeyImage= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png");

monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  bananaImage = loadImage("banana.png");
  jungleImage = loadImage("jungle.jpg");
  stoneImage = loadImage("stone.png");
  
}

function setup() 
{
  createCanvas(400,400);
  
  jungle = createSprite(200,200,400,400);
  jungle.addImage("background", jungleImage)
  
  monkey = createSprite(60,320,20,20);
  monkey.addAnimation("monkey", monkeyImage);
  
  invisibleGround = createSprite(200,370,900,5);
  invisibleGround.visible = false;

   ObstaclesGroup = createGroup();
   BananaGroup = createGroup();
   score = 0;
  
  
}

function draw() 
{
  background(220);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);
  
  ground.velocityX = -5;
if (ground.x < 0)
{
   ground.x = ground.width/2;
}
  
  if(keyDown("space") && monkey.y <= 370)
{
      monkey.velocityY = -12 ;
}
  
  spawnBananas();
  spawnObstacles();
  
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(invisibleGround);
  
  
  if(bananaGroup.isTouching(monkey))
{
    score = score + 2;
    bananaGroup.destroyEach();
}
  
  if(score % 60 === 0) 
{
    //generate random obstacles
    var score = Math.round(random(10,40));
    switch(score) {
      case 10: monkey.scale = 0.12;
              break;
      case 20: monkey.scale = 0.14;
              break;
      case 30: monkey.scale = 0.16;
              break;
      case 40: monkey.scale = 0.18;
              break;
      default: break;
}
  
  if(obstaclegroup.isTouching(monkey))
{
  monkey.scale = 0.2;
}
    
}



function spawnBananas() 
{
  if (frameCount % 80 === 0) 
  {
    banana = createSprite(380,320,40,10);
    banana.y = randomNumber(120,200);
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -3;
    
    //assign lifetime to the variable
    banana.lifetime = 110;
    
    //add each banana to the group
    BananaGroup.add(banana);
  }
}
  
  function spawnObstacles() 
{
  
  if (frameCount % 300 === 0) 
  {
    stone = createSprite(380,330,40,10);
    stone.addImage(stoneImage);
    stone.scale = 0.15;
    stone.velocityX = -3;
    
    //assign lifetime to the variable
    stone.lifetime = 133;
    
   //add each obstacles to the group
    ObstaclesGroup.add(stone);
  }
}
