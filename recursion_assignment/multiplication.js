function multiply(multiplier, multiplicand) {
  if (multiplier === 0) {
    return 0;
  }

  return multiplicand + multiply(multiplier - 1, multiplicand);
}

function compareExpectation(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function multiplication(multiplier, multiplicand, expectedValue) {
  const result = multiply(multiplier, multiplicand);
  const comparedResult = compareExpectation(expectedValue, result);
  const message = "result should be |" + expectedValue + "| and it is";
  const finalMessage = comparedResult + message + " | " + result + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  multiplication(0, 1, 0);
  multiplication(1, 1, 1);
  multiplication(2, 1, 2);
  multiplication(2, 2, 4);
  multiplication(3, 2, 6);
}

valuesToTest();
