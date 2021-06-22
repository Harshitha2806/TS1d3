const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 




function preload()
{

    polygonIMG = loadImage("polygon.png");

}

function setup()
{

    

    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;


    ground = new ground(300,200,300,10);
    ground1 = new ground(500,400,300,10);

    //top structure 
    //ground level 
    block1 = new block(300,180,30,40);
    block2 = new block(330,180,30,40);
    block3 = new block(360,180,30,40);
    block4 = new block(390,180,30,40);
    block5 = new block(270,180,30,40);
    block6 = new block(240,180,30,40);
    block7 = new block(210,180,30,40);

    //second level 
    block8 = new block(300,140,30,40);
    block9 = new block(330,140,30,40);
    block10 = new block(360,140,30,40);
    block11 = new block(270,140,30,40);
    block12 = new block(240,140,30,40);

    //third level 
    block13 = new block(300,100,30,40);
    block14 = new block(330,100,30,40);
    block15 = new block(270,100,30,40);

    //4th level 
    block16 = new block(300,60,30,40); 

    //bottom structure 
    //ground level 
    block17 = new block(500,380,30,40);
    block18 = new block(530,380,30,40);
    block19 = new block(560,380,30,40);
    block20 = new block(590,380,30,40);
    block21 = new block(470,380,30,40);
    block22 = new block(440,380,30,40);
    block23 = new block(410,380,30,40); 

    //second level 
    block24 = new block(500,340,30,40);
    block25 = new block(530,340,30,40);
    block26 = new block(560,340,30,40);
    block27 = new block(470,340,30,40);
    block28 = new block(440,340,30,40);

    //third level 
    block29 = new block(500,300,30,40);
    block30 = new block(530,300,30,40);
    block31 = new block(470,300,30,40);

    //4th level 
    block32 = new block(500,280,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon); 

Slingshot = new slingShot(this.polygon,{x: 200, y:100});


   
}

function draw()
{

Engine.update(engine);
background(0);

ground.display();
ground1.display();

//top structure
//ground level 
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display(); 

//second level 
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();


//thrid level 
block13.display();
block14.display();
block15.display();

//4th level 
block16.display();

//bottom structure 
//ground level 
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display(); 

//second level 
block24.display();
block25.display();
block26.display();
block27.display();
block28.display(); 

// thrid level 
block29.display();
block30.display();
block31.display();

//4th level 
block32.display();

Slingshot.display();


}




function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x: mouseX, y: mouseY});
    
    }
    
    function mouseReleased(){
    
        slingShot.fly();
    }