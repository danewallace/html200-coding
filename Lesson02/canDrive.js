const firstName = 'Dane';
const lastName = 'Wallace';
let personsAge = 32;
const drivingAge = 16;
let drivingSince = personsAge - drivingAge;

if (personsAge === drivingAge) {
  console.log(`${firstName} ${lastName} has been old enough to drive for less than one year.`);
} else if (personsAge > drivingAge) {
  console.log(`${firstName} ${lastName} has been old enough to drive for ${drivingSince} years.`);
} else {
  for (i = 5; i >= 0; i--) {
    console.log(i);
  }
}
