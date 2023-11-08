// arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// function declaration
function divide(a: number, b: number): number {
  return a / b;
}

// function expression
const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// destructuring with functions
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

// ES2015 - JS - destructuring
const logsWeather = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
