const x = 25;
const y = 3;
let result = 0;

function multiplier(firstNumber, secondNumber) {
  result = firstNumber * secondNumber;
}

multiplier(x, y);

console.log(result);



// returning a value allows us to wrap everything in console.log

const lapLength = 5;
const laps = 23;

function raceLength(x, y){
  return x * y;
}

console.log(raceLength(lapLength, laps));


//callbacks - pass a function into another function as an argument

function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
