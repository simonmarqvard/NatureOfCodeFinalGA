class Boundary {
  constructor(x, y, w, h, t) {
    var options = {
      friction: 0,
      restitution: 0.8,
      angle: t,
      isStatic: true,
      collisionFilter: {
        category: 0x0003,
        group: 3
      }
    }

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    var angle = this.body.angle
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y);
    rotate(this.body.angle)
    rectMode(CENTER);
    fill(0)
    rect(0, 0, this.w, this.h)
    pop()
  }


}
