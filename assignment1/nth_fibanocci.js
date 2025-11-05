const n = 8;
let currentTerm = 0;
let nextTerm = 1;
let futureTerm ;

for(let term = 1; term < n ; term++) {
  futureTerm = currentTerm + nextTerm;
  currentTerm = nextTerm;
  nextTerm = futureTerm;
}

console.log(currentTerm);
