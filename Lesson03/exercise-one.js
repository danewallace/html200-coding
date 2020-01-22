let arrayOne = ['first', 'second', 'third', 'fourth', 'fifth'];
console.log(arrayOne);

arrayOne.push('sixth');
console.log(arrayOne);

arrayOne.splice(2, 1);
console.log(arrayOne);

const arrayItems = arrayOne.join(', ');
console.log(arrayItems);
