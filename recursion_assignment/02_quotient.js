function quotient(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  return 1 + quotient(dividend - divisor, divisor);
}

function compareExpectation(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function division(dividend, divisor, expectedValue) {
  const result = quotient(dividend, divisor);
  const comparedResult = compareExpectation(expectedValue, result);
  const message = "result should be |" + expectedValue + "| and it is";
  const finalMessage = comparedResult + message + " | " + result + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  division(0, 1, 0);
  division(1, 1, 1);
  division(2, 1, 2);
  division(2, 2, 1);
  division(4, 2, 2);
  division(6, 2, 3);
}

valuesToTest();
