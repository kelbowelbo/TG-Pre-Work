const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

/*In this section, similar to the previous, I learned how to use .findIndex to cosntruct
a function to select a specific element from an array that fits a certain condition.
I also learned that I'm not a huge fan of ternary operators. */
