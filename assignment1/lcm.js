const a = 0;
const b = 6;
let multiplier = 1;
let lcm;

const largestNumber = a > b ? a : b;
if (a === 0 || b=== 0) {
  lcm = 0;
  console.log(lcm);
} else {
  while (multiplier !== 0) {
  let product = largestNumber * multiplier;

  if (product % a === 0 && product % b === 0) {
    lcm = product;
    console.log(lcm);
    break;
  }

  multiplier = multiplier + 1;
}
}
