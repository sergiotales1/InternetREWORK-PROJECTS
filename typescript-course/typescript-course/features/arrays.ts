const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2001-12-23'];
const importantDates1: (Date | string)[] = []; // same thing as above

importantDates.push('Strings');
importantDates.push(new Date());
