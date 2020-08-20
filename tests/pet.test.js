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
  it("sets the name property", () => {
    const pet = new Pet("Fido");

    expect(pet.name).toEqual("Fido");
  });
});
