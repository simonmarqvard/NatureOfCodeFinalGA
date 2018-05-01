class Car {
  constructor(x, y, w, h, wheel) {
    var options = {
      display: true,
      fillStyle: 'orange',
      strokeStyle: 'blue',
      lineWidth: 3
    }

    this.car = Composites.car(x, y, w, h, wheel, options)


    //   render: {
    //     visible: true,
    //     fillStyle: 'orange',
    //     strokeStyle: 'black'
    //   }
    // });


    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.w = w;
    this.h = h;
    this.wheel = wheel
    World.add(world, this.car);
  }

  show() {
    var pos = this.car.position;
    var angle = this.car.angle;



    console.log("This function is running")
    push();
    // translate(pos.x, pos.y);
    // rotate(angle)

    fill(0, 100, 100)
    // rect(50, 50)
    // rect for the car body?
    // ellipses for the wheels?
    //Composites.car(0, 0, this.w, this.h, this.wheel)
    pop()
  }
}
