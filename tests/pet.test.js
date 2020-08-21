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
  xit("increases fitness by 4", () => {
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
  it("checks hunger and fitness of pet", () => {
    const pet = new Pet("fido");

    pet.fitness = 3;
    pet.hunger = 6;
    pet.checkUp();

    expect(pet.checkUp()).toEqual("I need a walk and I am hungry");
  });
});

describe("checkup", () => {
  it("checks hunger and fitness of pet", () => {
    const pet = new Pet("fido");

    pet.fitness = 4;
    pet.checkup();

    expect(pet.checkup()).toEqual("I feel great");
  });
});
