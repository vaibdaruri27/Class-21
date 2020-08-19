var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObject1 = createSprite(300, 600,80,30);
  gameObject1.shapeColor = "yellow";
  gameObject1.velocityX = +4;

  gameObject2 = createSprite(800, 600,80,30);
  gameObject2.shapeColor = "yellow";
  gameObject2.velocityX = -4;

}

function draw() {
  background(0,0,0);  

  bounceOff(gameObject1,gameObject2);

  drawSprites();
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
 }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
 }
}


