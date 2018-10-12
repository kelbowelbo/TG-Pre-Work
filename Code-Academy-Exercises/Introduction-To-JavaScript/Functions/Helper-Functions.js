function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) *200;
}

const totalCost = costOfMonitors(5,4);

console.log(totalCost);

/*Even though this section took some concentration, I learned how functions within
a function, called helper functions, can aid in translation issues.*/
