var movingObject,stableObject
var box1 , box2



function setup() {
  createCanvas(800,600);


box1 =  createSprite(300, 400, 50, 50);
box1.shapeColor = "green";
box2 =  createSprite(300, 100, 50, 50);
box2.shapeColor = "yellow";

// for the velocity
box1.velocityY = -2;
box2.velocityY =  2;


movingObject =  createSprite(400, 400, 50, 50);
movingObject.shapeColor = "green";
stableObject =  createSprite(400, 100, 50, 50);
stableObject.shapeColor = "yellow";

// for the velocity
movingObject.velocityY = -2;
stableObject.velocityY =  2;

}

function draw() {

  background(0);  
  
  // for the movement of the object
  //movingObject.x = mouseX;
  //movingObject.y = mouseY;
  
  console.log(movingObject.x-stableObject.x);
  
  // for the object when touch should change color
if(Bounce(movingObject,stableObject)){
  movingObject.velocityY=movingObject.velocityY*(-1);
  stableObject.velocityY=stableObject.velocityY*(-1);
}

  if(Bounce(box1,box2)){
    box1.velocityY=box1.velocityY*(-1);
        box2.velocityY=box2.velocityY*(-1);
  }
  drawSprites();

}