function findSeries(term, nextTerm, nthTerm) {
  const fibonacciSeries = [];
  let futureTerm = 0;

  for (let noOfTimes = 0; noOfTimes < nthTerm; noOfTimes++) {
    fibonacciSeries.push(term);
    futureTerm = term + nextTerm;
    term = nextTerm;
    nextTerm = futureTerm;
  }

  return fibonacciSeries;
}

function fibonacci(nthTerm) {
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

function findFibonacciSeries(description, input, expected) {
  const actual = fibonacci(input);

  console.log(composeMessage(description, actual, expected, input));
}

function testsToFindFibonacciSeries() {
  findFibonacciSeries("1 st term", 1, [0]);
  findFibonacciSeries("2 terms", 2, [0, 1]);
  findFibonacciSeries("3 terms", 3, [0, 1, 1]);
  findFibonacciSeries("4 terms", 4, [0, 1, 1, 2]);
  findFibonacciSeries("5 terms", 5, [0, 1, 1, 2, 3]);
}

testsToFindFibonacciSeries();
