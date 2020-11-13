//Create variables here
var dog,happydog,database,foodS,food,foodStock;
function preload()
{
  //load images here
  dog-loadImage("images/dogImage.png")
  happydog=loadImage("images/happyImg1.png")
}

function setup() {
  createCanvas(500, 500);
 foodStock=database.ref('food');
 foodStock.on("value",readStock);

  
  
}


function draw() {  
background(46,139,87);
if(KeyWentDown(UP_ARROW))
{
  writeStock(foodS)
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
text("Press UP_ARROW key to feed Drago milk")
textSize(35)
fill("red")
stroke("white")
}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x+1
  }
  
  database.ref('/').update({
    food:x
  })
}


