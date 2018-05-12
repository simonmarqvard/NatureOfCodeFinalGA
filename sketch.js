var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.body,
  Composites = Matter.Composites,
  Composite = Matter.Composite


var engine;
var world;


let lifetime = 90
var ground = []
let population;
let lifeCounter = 0;
let numberOfWalls = 7



function setup() {
  createCanvas(800, 1000)
  engine = Engine.create();
  world = engine.world; //add engine to world - add world to world
  Engine.run(engine)
  rectMode(CENTER)


  let mutationRate = 0.05;
  population = new Population(mutationRate, 20)


  target = createVector(width / 2, height / 1.32, 12, 12)



  for (let i = 0; i < numberOfWalls; i++) {
    //top ground
    ground.push(new Boundary(width / 3, height / 6, 10, 450, -PI / 2.8));
    //second ground
    ground.push(new Boundary(width / 1.5, height / 2.8, 10, 450, PI / 3.1))
    //third ground
    ground.push(new Boundary(width / 3, height / 1.8, 10, 450, -PI / 2.8));

    ground.push(new Boundary(width / 1.6, height / 1.4, 10, 450, PI / 3.1))
    //right wall
    ground.push(new Boundary(width, height / 2, 10, height, 0));
    //left wall
    ground.push(new Boundary(0, height / 2, 10, height, 0))
  }
}


function draw() {
  background(216, 192, 175);
  fill(0)
  //target visual
  ellipse(width / 2, height / 1.32, 12, 12) // target

  if (lifeCounter < lifetime) {
    population.live()
    lifeCounter += 0.2
  } else {
    lifeCounter = 0;
    population.fitness();
    population.selectMatingPool();
    population.reproduction();

  }

  for (let i = 0; i < numberOfWalls; i++) {
    ground[i].show()
  }

  createTxt()
}



function createTxt() {

  textSize(16)
  text("Generation : " + population.getGenerations(), width / 1.2, height / 2)
  text("Time left: " + (int(lifetime) - int(lifeCounter)), width / 1.2, height / 2 + 20);

}
