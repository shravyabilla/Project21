
var bullet, wall;
var speed, weight, thickness;

function setup() {
 
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color("black");

  bullet = createSprite(500, 200, 20, 7);
  bullet.velocityX = speed;
  bullet.shapeColor = ("white");
}

function draw() {
  background("black");  


  console.log(bullet.velocityX);

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage  = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10) {
      wall.shapeColor = color("red");
    }

    if(damage < 10) {
      wall.shapeColor = color("blue");
    }
  }

  drawSprites();

 }
  
 function hasCollided(bullet, wall) {
 
  bulletRightEdge = bullet.x + bullet.width;

  wallLeftEdge = wall.x;

  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}
