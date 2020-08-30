const Pet = require("../src/pet");

describe("constructor", () => {
  xit("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
});

describe("constructor", () => {
  xit("has a initial age of 0", () => {
    const pet = new Pet("Fido");

    expect(pet.age).toEqual(0);
  });
});

describe("growUp", () => {
  xit("increments the age by 1", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.age).toEqual(1);
  });
});

describe("constructor", () => {
  xit("sets the name property", () => {
    const pet = new Pet("Fido");

    expect(pet.name).toEqual("Fido");
  });
});

describe("constructor", () => {
  xit("Increments the age by 1, hunger by 5 and fitness by -3", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
});

describe("walk", () => {
  it("increases fitness by 4", () => {
    const pet = new Pet("fido");

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });
});

describe("hunger", () => {
  xit("decrease hunger by 3 to a minimum of 0", () => {
    const pet = new Pet("fido");

    pet.hunger = 3;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });
});

describe("checkup", () => {
  xit("checks hunger and fitness of pet", () => {
    const pet = new Pet("fido");

    pet.fitness = 3;
    pet.hunger = 6;
    pet.checkUp();

    expect(pet.checkUp()).toEqual("I am hungry and I need a walk");
  });
});

describe("checkup", () => {
  xit("checks hunger and fitness of pet", () => {
    const pet = new Pet("fido");

    pet.fitness = 4;
    pet.checkup();

    expect(pet.checkup()).toEqual("I feel great");
  });
});

describe("is alive", () => {
  xit("if the pet is alive", () => {
    const pet = new Pet("fido");

    pet.age = 29;
    pet.isAlive;

    expect(pet.isAlive).toEqual(false);
  });
});

describe("feed", () => {
  xit("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
});

describe("feed", () => {
  xit("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 31;

    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });
});

describe("children", () => {
  it("creates a child pet", () => {
    const cat = new Pet("Dave");
    //create pet
    //pet adopts a child
    cat.adoptChild("Amelia");
    //check children attribute of pet is an array

    expect(cat.children).toEqual(
      expect.arrayContaining([
        { name: "Amelia", age: 0, hunger: 0, fitness: 10, children: [] },
      ])
    );
  });
});
