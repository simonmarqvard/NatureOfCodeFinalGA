var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.body,
  Composites = Matter.Composites,
  Composite = Matter.Composite


var engine;
var world;


let lifetime = 80
var ground = []
let population;
let lifeCounter = 0;
let numberOfWalls = 5



function setup() {
  createCanvas(800, 600)
  engine = Engine.create();
  world = engine.world; //add engine to world - add world to world
  Engine.run(engine)
  rectMode(CENTER)


  let mutationRate = 0.1;
  population = new Population(mutationRate, 12)

  target = createVector(width / 2, height / 1.3)

  for (let i = 0; i < numberOfWalls; i++) {
    ground.push(new Boundary(width / 3, height / 8, 10, 450, -PI / 2.8));
    ground.push(new Boundary(width / 1.6, height / 2.4, 10, 450, PI / 3.1))
    ground.push(new Boundary(width / 3, height / 1.4, 10, 450, -PI / 2.8));
    ground.push(new Boundary(width - 10, height / 2, 10, height, 0));
    ground.push(new Boundary(0, height / 2, 10, height, 0))
  }
}


function draw() {
  background(216, 192, 175);
  ellipse(width / 2, height / 1.3, 12, 12) // target

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
