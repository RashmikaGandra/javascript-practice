const n = 0;
let factorial = 1;

for (let currentTerm = n; currentTerm > 0; currentTerm--) {
  factorial = factorial * currentTerm;
}

console.log(factorial);
