//if else statement
const isDogHungry = true;

if (isDogHungry) {
  console.log('The dog is hungry');
} else {
  console.log('You can feed the dog later');
}

// else if statement
const hairLengthInInches = 10;

if (hairLengthInInches < 2) {
  console.log('short hair');
} else if (hairLengthInInches >= 2 && hairLengthInInches < 5) {
  console.log('medium hair');
} else {
  console.log('long hair');
}

//guard statement
function makeDogRollover(dog) {
  if (!dog) {
    console.log('you need to bring your dog first');
    return;
  }

  console.log(`Trainer: Hello, you asked ${dog} to roll over`);
  console.log(`Trainer: Hey ${dog}, roller over!`);
  console.log(`${dog}: Woof! (rolls over)`);
  console.log(`Trainer: Good dog!`);
}

makeDogRollover('Fido');

//ternary statement
const dogAgeInHumanYears = 1;
//let puppy;
//
// if (dogAgeInHumanYears <= 2) {
//   puppy = true;
// } else {
//   puppy = false;
// }

const puppy = dogAgeInHumanYears <= 2 ? true : false;

console.log(puppy);
