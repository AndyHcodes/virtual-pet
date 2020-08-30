class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
  }

  get isAlive() {
    if (this.fitness <= 0 || this.hunger >= 10 || this.age >= 30) {
      return false;
    } else {
      return true;
    }
  }

  growUp() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  }

  adoptChild(name) {
    let child = new Pet(name);
    this.children.push(child);
  }

  walk() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    if (this.fitness + 4 <= 10) {
      this.fitness += 4;
    } else {
      this.fitness = 10;
    }
  }

  feed() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    if (this.hunger - 3 >= 0) {
      this.hunger -= 3;
    } else {
      this.hunger = 0;
    }
  }

  checkUp() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    if (this.fitness <= 3 && this.hunger >= 5) {
      return "I am hungry and I need a walk";
    }
    if (this.fitness <= 3) {
      return "I need a walk";
    }
    if (this.hunger >= 5) {
      return "I am hungry";
    } else {
      return "I feel great";
    }
  }
}

module.exports = Pet;
