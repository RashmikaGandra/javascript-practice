const startOfRange = 2;
const endOfRange = 17;
for (let currentTerm = startOfRange; currentTerm <= endOfRange; currentTerm++) {
  let hasNoFactors = currentTerm >= 2;
  let valueToCheck = 2;

  while (valueToCheck < currentTerm) {
    if (currentTerm % valueToCheck === 0) {
      hasNoFactors = false;
    }

    valueToCheck = valueToCheck + 1;
  }

  if (hasNoFactors === true) {
    let primeNumber = currentTerm;
    console.log(primeNumber);
  }
}
