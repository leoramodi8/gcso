var car,wall;
var speed,weight;





function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX= speed;

  wall = createSprite(1500,200,60,height/2);
  wall.shpeColor = color(80,80,80);













}

function draw() {
  background(255,255,255); 
  
  if (wall.x - car.x < car.width/2 + wall.width/2 ){
    var deformation = 0.5*weight*speed*speed/22500

    if (deformation>180){
      car.shapeColor = color(208,1,105);
    }

    if (deformation<180 && deformation >100){
      car.shapeColor = color(100,260,1);
    }

    if (deformation<100){
      car.shapeColor = color (56,105,235)
    }
  }



















  















  drawSprites();
}