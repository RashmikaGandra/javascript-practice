const a = 12;
let decimalNumber = a;
let bit = 0;

if (decimalNumber === 0) {
  console.log(bit);
} 

while (decimalNumber > 0) {
  bit = decimalNumber % 2;
  decimalNumber = (decimalNumber - (decimalNumber % 2)) / 2;
  console.log(bit);
}
