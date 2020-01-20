
// for loop syntax
for (let i = 0; i < 3; i++) {
  console.log('hi');
}

//while loop syntax
let x = 0;

while (x < 3) {
  console.log(x);
  x++;
}

//do while syntax
let y = 0;
do {
  console.log('Hi there');
  y++;
} while (y > 8);


//nested loops
for (let i = 0; i < 4; i++) {
  console.log('Outer loop');
  for (let j = 1; j < 6; j++) {
    console.log(i, j);
  }
}
