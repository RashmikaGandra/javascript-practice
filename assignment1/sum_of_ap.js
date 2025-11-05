const a = 9;
const d = 3;
const n = 3;
let sum = 0;
let ap = a;

for(let currentTerm = 1; currentTerm <= n; currentTerm++) {
  sum = sum + ap;
  ap = ap + d;
}

console.log(sum);
