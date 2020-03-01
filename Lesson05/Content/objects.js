const dog = {
  name: 'Fido',
  age: 4,
  speak: function() {
    console.log('Woof!');
    console.log(this.name);
  },
  owner: {
    firstName: 'Mary',
    lastName: 'Smith'
  }
};

console.log(dog.name);

const key = 'name';
console.log(dog[key]);

dog.speak();
