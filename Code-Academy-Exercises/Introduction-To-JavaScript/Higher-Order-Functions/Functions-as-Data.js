const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// Write your code below
const is2p2 =
      checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();

console.log(is2p2.name);

/*I learned that I can change the variable name and then search for the original
variable name in the future.  By reassigning a new variable name using the old,
and then using the ".name" function for the new name, we can access is console.log, the
original name of the variable.*/
