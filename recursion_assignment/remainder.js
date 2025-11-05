function remainder(dividend, divisor) {
  if (dividend === divisor) {
    return 0;
  }

  if (dividend < divisor) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}

function compareExpectation(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function division(dividend, divisor, expectedValue) {
  const result = remainder(dividend, divisor);
  const comparedResult = compareExpectation(expectedValue, result);
  const message = "result should be |" + expectedValue + "| and it is";
  const finalMessage = comparedResult + message + " | " + result + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  division(0, 1, 0);
  division(1, 1, 0);
  division(2, 1, 0);
  division(3, 2, 1);
  division(4, 2, 0);
  division(7, 2, 1);
}

valuesToTest();
