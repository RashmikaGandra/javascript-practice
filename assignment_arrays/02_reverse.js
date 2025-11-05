function reverse(array) {
  const reversed = [];
  
  for (let index = array.length - 1; index >= 0; index--) {
    reversed.push(array[index]);
  }
  
  return reversed;
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

function testReverse(description, input, expected) {
  const actual = reverse(input);

  console.log(composeMessage(description, actual, expected, input));
}

function testsToReverseArray() {
  testReverse("single element", [1], [1]);
  testReverse("empty array", [], []);
  testReverse("two elements", [1, 2], [2, 1]);
  testReverse("three elements", [1, 2, 3], [3, 2, 1]);
}

testsToReverseArray();
