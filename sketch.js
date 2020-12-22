var dog,happyDog,dataBase,foodS,foodStock


//Create variables here

function preload()

{
  dogimg1 = loadImage("images/dogImg.png")
  dogimg2 = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(1000, 500);
  database = firebase.database();
  console.log(database);

  foodStock=dataBase.ref('food');
  foodStock.on("value,readStock")
 
  foodobject=new Food()
  dog = createSprite(550,250,10,10);
  dog.addImage(dogimg1)
  dog.scale=0.2
 
function draw(){
 background(46,139,87);
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dog happy);
 }

 
 
 drawSprites();
 

drawSprites();
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    
  })
}


function showError(){
  console.log("Error in writing to the database");
}

