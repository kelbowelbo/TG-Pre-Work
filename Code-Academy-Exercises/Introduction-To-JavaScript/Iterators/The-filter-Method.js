const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})

const favoriteWords = ['supercalafragilisticexpialadoscious', 'hyperbole', 'fervent', 'esoteric', 'whippersnapper'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

console.log(longFavoriteWords);

/*This section taught me how to contruct the .filter on elements in an array in order
to select items that follow a certain condition.*/
