function reverse(fibonacciSeries) {
  const reversedSeries = [];

  for (let index = fibonacciSeries.length - 1; index >= 0; index--) { 
    reversedSeries.push(fibonacciSeries[index]);
  }

  return reversedSeries;
}

function findSeries(term, nextTerm, nthTerm) {
  const fibonacciSeries = [];
  let futureTerm = 0;

  for (let noOfTimes = 0; noOfTimes < nthTerm; noOfTimes++) {
    fibonacciSeries.push(term);
    futureTerm = term + nextTerm;
    term = nextTerm;
    nextTerm = futureTerm;
  }

  return reverse(fibonacciSeries);
}

function reverseFibonacci(nthTerm) {
  const term = 0;
  const nextTerm = 1;

  return findSeries(term, nextTerm, nthTerm);
}

function areArraysEqual(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let index = 0; index < actual.length; index ++) {
    if (actual[index] !== expected[index]) {
      return false;
    }
  }

  return true;
}

function composeMessage(description, actual, expected, input) {
  const emoji = areArraysEqual(actual, expected, 0) ? "✅" : "❌";
  let message = `${emoji} ${description} \n`;

  if (!areArraysEqual(actual, expected, 0)) {
    message += `\n input is : ${input}`;
    message += `\n expected is : ${expected}`;
    message += `\n actual is : ${actual} \n`;
  }

  return message;
}

function findReverseSeries(description, input, expected) {
  const actual = reverseFibonacci(input);

  console.log(composeMessage(description, actual, expected, input));
}

function testsToFindReverseSeries() {
  findReverseSeries("1 st term", 1, [0]);
  findReverseSeries("2 terms", 2, [1, 0]);
  findReverseSeries("3 terms", 3, [1, 1, 0]);
  findReverseSeries("4 terms", 4, [2, 1, 1, 0]);
  findReverseSeries("5 terms", 5, [3, 2, 1, 1, 0]);
}

testsToFindReverseSeries();
