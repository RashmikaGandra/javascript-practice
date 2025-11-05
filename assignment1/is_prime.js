const a = 4;
let hasNoFactors = true;
let valueToCheck = 2;
let isPrime = true;

while (valueToCheck !== a) {
  if(a % valueToCheck === 0){
    hasNoFactors = false;
  }

  valueToCheck = valueToCheck + 1;
  isPrime = hasNoFactors ? true : false; 
}

console.log(isPrime);
