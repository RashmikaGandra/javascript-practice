const p = 100;
const t = 2;
const r = 1;
let principleAmount = p;
let compoundInterest = 0;

for (let currentYear = 1; currentYear <= t; currentYear++) {
  const annualInterest = (principleAmount * r) / 100;
  principleAmount = principleAmount + annualInterest;
  compoundInterest = compoundInterest + annualInterest;
}

console.log(compoundInterest);
