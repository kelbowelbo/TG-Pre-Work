// Write your code below
let bobsFollowers = ['Kelly', 'Gary', 'Fauna', 'Tater'];
let tinasFollowers = ['Bob', 'Fauna', 'Tater'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
console.log(mutualFollowers);

/*I learned that you can nest multiple loops.  In this example, we wanted to discover
mutual elements in two arrays and push those elements to a new array. */
