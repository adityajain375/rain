var rain;
var rand;
var rand2;
var rand3;
var cloud1,cloud2,cloud3,cloud4;
var cloud1_img,cloud2_img,cloud3_img,cloud4_img;

function preload(){
cloud1_img = loadImage("cloud.png");
cloud2_img = loadImage("cloud.png");
cloud3_img = loadImage("cloud.png");
cloud4_img = loadImage("cloud.png");
}

function setup() {
  createCanvas(800,600);
}

function draw() {
  background("black");  
  rainfall();
  clouds();
  drawSprites();
}

function rainfall(){
if(frameCount%1 === 0){
  rand = random(2,798);
  rand2 = random(3,10);
  rand3 = random(5,9);
  rain = createSprite(rand,100,3,rand2);
  rain.velocityY = rand3;
  rain.shapeColor="skyblue";

  rain.lifetime = 50;
}
}

function clouds(){
  cloud1 = createSprite(100,50);
  cloud2 = createSprite(300,50);
  cloud3 = createSprite(500,50);
  cloud4 = createSprite(700,50);

  cloud1.addImage("cloud1",cloud1_img);
  cloud2.addImage("cloud2",cloud2_img);
  cloud3.addImage("cloud3",cloud3_img);
  cloud4.addImage("cloud4",cloud4_img);
}