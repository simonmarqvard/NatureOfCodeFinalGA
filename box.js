class Box {
  constructor(location, dna_) {


    var options = {
      friction: dna_.genes[2],
      restitution: 0.4,
      collisionFilter: {
        category: 0x0002,
        group: -2
      }
    }

    this.body = Bodies.rectangle(location.x, location.y, dna_.genes[1], dna_.genes[0], options);


    // this.x = x;
    // this.y = y;
    this.location = location.copy()
    this.w = dna_.genes[1];
    this.h = dna_.genes[0];
    this.dna = dna_;
    this.hitTarget = false


    World.add(world, this.body, {
      collisionFilter: {
        mask: 0x0003
      }
    })
  }


  calcFitness() {
    let d = dist(this.body.position.x, this.body.position.y, target.x, target.y)
    this.fitness = pow(1 / d, 2)
    // console.log(this.fitness)
  }

  checkTarget(target) {
    let d = dist(this.body.position.x, this.body.position.y, target.x, target.y)
    if (d < 12) {
      background(0)
    }
  }


  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push()
    translate(pos.x, pos.y);
    rotate(angle)
    rectMode(CENTER);
    strokeWeight(2)
    fill('rgba(255, 100, 150, 0.4)');
    rect(0, 0, this.w, this.h)
    pop()
  }

  getFitness() {
    return this.fitness;
  }

  getDNA() {
    return this.dna;
  }
}
