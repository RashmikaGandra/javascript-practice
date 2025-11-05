function findNthTerm(term, nextTerm, nthTerm, noOfTimes) {
  if (noOfTimes === nthTerm) {
    return term;
  }

  const futureTerm = term + nextTerm;

  return findNthTerm(nextTerm, futureTerm, nthTerm, noOfTimes + 1);
}        

function nthFibonacciTerm(n) {
  const noOfTimes = 1;

  if (n === 1) {
    return 0;
  }

  return findNthTerm(0, 1, n, noOfTimes);
}

function generateEmoji(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function nthTerm(n, expectedValue) {
  const result = nthFibonacciTerm(n);
  const emoji = generateEmoji(expectedValue, result);
  const message = "nth term should be |" + expectedValue + "| and it is";
  const finalMessage = emoji + message + " | " + result + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  nthTerm(1, 0);
  nthTerm(2, 1);
  nthTerm(3, 1);
  nthTerm(4, 2);
  nthTerm(5, 3);
}

valuesToTest();
