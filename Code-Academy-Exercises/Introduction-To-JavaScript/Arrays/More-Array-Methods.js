const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = (groceryList.indexOf('pasta'));
console.log(pastaIndex);

/*I learned that there are methods avaialble that are non-mutating. In other words
you can use these methods on an array, and while you may be able to console the result,
the original array is not affected by this method.*/
