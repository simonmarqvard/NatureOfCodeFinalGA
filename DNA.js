class DNA {
  //DNA should be working now

  //Trying to create genes that instead of Vector angle has friction width and height

  constructor(newgenes) {
    if (arguments.length > 0) {
      this.genes = newgenes;
    } else {
      var height = random(250);
      var width = random(250);
      var friction = random(1);
      this.genes = [height, width, friction];
    }
    // console.log(this.genes)
  }

  crossover(partner) {
    let child = [];
    //choose a midpoint
    let crossover = floor(random(this.genes.length));
    //use half of the genes from one and half of the genes from another
    for (let i = 0; i < this.genes.length; i++) {
      if (i > crossover) {
        child[i] = this.genes[i];
      } else {
        // console.log('partner genes', partner.genes[i]);
        child[i] = partner.genes[i];
      }
    }

    //newgenes (DNA constructor) is now based on the new child DNA
    let newgenes = new DNA(child);
    //    console.log(newgenes)
    return newgenes

  }

  mutate(m) {
    for (let i = 0; i < this.genes.length; i++) {
      if (Math.random(1) < m) {
        console.log("MUTATE")
        if (i < 2) {
          this.genes[i] = random(250);
        } else {
          this.genes[i] = random(1);

        }
      }
    }
  }
}
