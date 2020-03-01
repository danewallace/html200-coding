//const dogToParse = '{"dog": "Husky", "name": "Dubs}';

try {
  const dogToParse = '{"dog": "Husky", "name": "Dubs}';
  const parsedDog = JSON.parse(dogToParse);
  console.log(dog.name);
} catch (error) {
  console.log('invalid dog object');
  throw error;
} finally {
  console.log('Program finished');
}
