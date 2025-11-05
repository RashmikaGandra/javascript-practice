const a = 0;
const b = 3;
let hcf;

const largeNumber = a > b ? a : b;
for (let currentTerm = 1; currentTerm <= largeNumber; currentTerm++) {
  if (a % currentTerm === 0 && b % currentTerm === 0) {
    hcf = currentTerm;
  }
}

console.log(hcf);
