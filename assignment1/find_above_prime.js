const a = 37;
let valueToCheck = 2;
let aboveNumber = a + 1;
let primeNumber;

while (valueToCheck <= aboveNumber) {
  let hasNoFactors = false;

  while (hasNoFactors !== true && valueToCheck !== aboveNumber) {
    if (aboveNumber % valueToCheck === 0) {
      hasNoFactors = true;
      valueToCheck = 2;
      aboveNumber = aboveNumber + 1;
      break;
    }

    valueToCheck = valueToCheck + 1;
  }

  if (hasNoFactors === false) {
    primeNumber = aboveNumber;
    aboveNumber = aboveNumber + 1
    break;
  }
} 

console.log(primeNumber)
