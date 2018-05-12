class Population {
  constructor(m, num) {
    this.mutationRate = m;
    this.population = [];
    this.matingPool = [];
    this.generations = [];


    for (var i = 0; i < num; i++) {
      var location = createVector(width / 2, 0);

      this.population[i] = new Box(location, new DNA());
    }
  }

  live() {
    for (var i = 0; i < this.population.length; i++) {
      this.population[i].show();
      this.population[i].checkTarget(target)
      // console.log(this.population[i].checkTarget(target))
      // console.log(this.population);
    }
  }

  fitness() {
    for (var i = 0; i < this.population.length; i++) {
      this.population[i].calcFitness();
    }
  }

  selectMatingPool() {
    this.matingPool = []
    console.log("MATINGPOOL RESET", this.matingPool.length)
    var maxFitness = this.getMaxFitness();
    // console.log(maxFitness);
    console.log(this.population.length)
    for (var i = 0; i < this.population.length; i++) {
      var fitnessNormalized = map(this.population[i].getFitness(), 0, maxFitness, 0, 1)
      var n = floor(fitnessNormalized * 100);
      console.log(n)
      for (var j = 0; j < n; j++) {
        this.matingPool.push(this.population[i])
      }
    }
    console.log(this.matingPool.length)
  }

  reproduction() {
    // console.log('_______________________')
    // console.log('starting reproduction');
    // console.log('_______________________')
    this.childPopulation = []
    for (var i = 0; i < this.population.length; i++) {
      var m = floor(random(this.matingPool.length));
      var d = floor(random(this.matingPool.length));

      //choose random gene from matingpool for mom and random gene for dad
      var mom = this.matingPool[m];
      var dad = this.matingPool[d];


      //get the genes from the two parents
      var momgenes = mom.getDNA();
      var dadgenes = dad.getDNA();
      var childGenes = momgenes.crossover(dadgenes);
      // console.log(this.mutationRate)
      //use mutation on childGenes
      childGenes.mutate(this.mutationRate)

      // Fill the new population with the new child
      var location = createVector(width / 2, 0);
      // console.log(this.population)
      // this.population[i] = new Box(location, child);
      this.childPopulation.push(new Box(location, childGenes));
      // console.log('Adding child : ' + i);
    }
    this.population = this.childPopulation
    this.generations++;
    // console.log("Generation : " + this.generations)

  }

  getGenerations() {
    return this.generations;
  }

  getMaxFitness() {
    var record = 0;
    for (var i = 0; i < this.population.length; i++) {
      if (this.population[i].getFitness() > record) {
        record = this.population[i].getFitness();
      }
    }
    return record;
  }

}
