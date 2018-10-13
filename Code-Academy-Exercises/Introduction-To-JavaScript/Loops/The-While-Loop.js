const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

/*I learned that a while loop is used when you aren't sure how many times you should
loop through. However, you do know that you would like to loop as long as a certain
condition is met.*/
