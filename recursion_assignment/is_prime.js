function hasFactors(primeCandidate, divisor) {
  if (primeCandidate === divisor) {
    return false;
  }

  const remainderIs = primeCandidate % divisor;

  if (remainderIs === 0) {
    return true;
  }
  
  return hasFactors(primeCandidate, divisor + 1);
}

function isPrime(primeCandidate) {
  const divisor = 2;

  if (primeCandidate < 2) {
    return false;
  }

  return !hasFactors(primeCandidate, divisor);
}

function compareExpectation(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function primeOrNot(primeCandidate, expectedValue) {
  const result = isPrime(primeCandidate);
  const comparedResult = compareExpectation(expectedValue, result);
  const message = "result should be |" + expectedValue + "| and it is";
  const finalMessage = comparedResult + message + " | " + result + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  primeOrNot(0, false);
  primeOrNot(1, false);
  primeOrNot(2, true);
  primeOrNot(3, true);
  primeOrNot(4, false);
  primeOrNot(5, true);
  primeOrNot(6, false);
  primeOrNot(7, true);
  primeOrNot(8, false);
  primeOrNot(9, false);
}

valuesToTest();
