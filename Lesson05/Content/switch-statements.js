const myDogBreed = 'golden retriever';

function getSheddingAmount(breed) {
  switch(breed) {
    case 'golden retriever': {
      return 'lots of shedding';
      break;
    }
    case 'portugese water dog': {
      return 'no shedding';
      break;
    }
    default: {
      return 'not found';
    }
  }
}

console.log(getSheddingAmount(myDogBreed));
