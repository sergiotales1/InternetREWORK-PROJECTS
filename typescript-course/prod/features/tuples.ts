const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias

type Drink = [string, boolean, number];
const pepsi: [string, boolean, number] = ['brown', true, 40];

const sprite: Drink = ['clear', true, 20];
const tea: Drink = ['brown', false, 0];

// Why Tuples ?

const carSpecs: [number, number] = [393, 2022];

const carSpecs1 = {
  horsePower: 393,
  weight: 2022, // pretty much more descriptive about these numbers than a tuple
};
