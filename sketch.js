var box;
function setup() {
  createCanvas(600,600);
  
}

function draw() {
 // background(30);
box=createSprite(300,300,10,10);
box.shapeColor="red";

if(keyDown("up")){
  box.y = box.y -2;
}
if (keyDown("space")){
  backhround("black");
}elese{
  background("white");
}
drawSprites();
} 





