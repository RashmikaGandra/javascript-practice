function isOdd(number) {
  return number % 2 !== 0;
}

function selectOdds(numbers) {
  const oddNumbers = [];

  for (let index = 0; index < numbers.length; index++) {
    if (isOdd(numbers[index])) {
      oddNumbers.push(numbers[index]);
    }
  }

  return oddNumbers;
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
    message += `\n input is : ${input}
    expected is : ${expected}
    actual is : ${actual} \n`;
  }

  return message;
}

function testSelectOdds(description, input, expected) {
  const actual = selectOdds(input);
  
  console.log(composeMessage(description, actual, expected, input));
}

function testsToFindOddNumbers() {
  testSelectOdds("numbers till 2", [1, 2], [1]);
  testSelectOdds("numbers till 3", [1, 2, 3], [1, 3]);
  testSelectOdds("only even", [2, 4], []);
  testSelectOdds("numbers till 7", [3, 2, 4, 5, 7], [3, 5, 7]);
}

testsToFindOddNumbers();
