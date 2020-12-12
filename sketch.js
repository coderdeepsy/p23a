var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
var Box1,Box2,Box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    helicopterIMG=loadImage("helicopter.png")
    packageIMG=loadImage("package.png")
}

function setup() {
    createCanvas(700, 600);
    rectMode(CENTER);
    

    packageSprite=createSprite(width/2, 80, 10,10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale=0.2

    helicopterSprite=createSprite(width/2, 200, 10,10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale=0.6
    

    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color(255)

    Box1=createSprite(330,555,150,10)
    Box1.shapeColor="red"
    
    Box2=createSprite(252,535,8,50)
    Box2.shapeColor="red"

    Box3=createSprite(405,535,8,50)
    Box3.shapeColor="red"
    
    engine = Engine.create();
    world = engine.world;

    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
    World.add(world, packageBody);
    

    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);

    //  box1=Bodies.rectangle(width/10,200,width,5,{isStatic:true})
    //   World.add(world,box1);
      box1=Bodies.rectangle(330,555,150,50,{isStatic:true})
    World.add(world,box1);
    box2=Bodies.rectangle(252,535,8,50,{isStatic:true})
    World.add(world,box2);
    box3=Bodies.rectangle(405,535,8,50,{isStatic:true})
    World.add(world,box3);
    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  Engine.update(engine);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
restitution=0.3;
  }
  if(packageBody.y-Box1.y<packageBody.height/2+Box1.height/2){
Matter.Body.setStatic(packageBody,true)

  }
}
