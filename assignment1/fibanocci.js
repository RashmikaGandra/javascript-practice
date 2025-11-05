const n = 10;
let currentTerm = 0;
let nextTerm = 1;
let futureTerm;

for (let term = 0; term < n; term++) {
  console.log(currentTerm);
  futureTerm = currentTerm + nextTerm;
  currentTerm = nextTerm;
  nextTerm = futureTerm;
}
