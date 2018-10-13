const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
  newArr.pop()
}

removeElement(concept);
console.log(concept);

/*I learned that an array mutated inside a function remains mutated outside of the
function.*/
