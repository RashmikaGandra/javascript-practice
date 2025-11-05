function addNumbers(sum, d, nthTerm, noOfTimes) {
  if (noOfTimes === nthTerm) {
    return sum;
  }

  return sum + addNumbers (sum + d, d, nthTerm, noOfTimes + 1);
}

function sumOfAP(a, d, n) {
  const noOfTimes = 1;

  if (n === 0) {
    return 0;
  }

  return addNumbers(a, d, n, noOfTimes);
}

function generateEmoji(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function findSum(firstTerm, difference, noOfTerms, expectedValue) {
  const result = sumOfAP(firstTerm, difference, noOfTerms);
  const emoji = generateEmoji(expectedValue, result);
  const message = "result should be |" + expectedValue + "| and it is";
  const finalMessage = emoji + message + " | " + result + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  findSum(0, 0, 0, 0);
  findSum(0, 1, 2, 1);
  findSum(2, 2, 5, 30);
  findSum(0, 2, 5, 20);
  findSum(10, 10, 5, 150);
  findSum(-1, 1, 2, -1);
  findSum(1, 1, 5, 15);
}

valuesToTest();
