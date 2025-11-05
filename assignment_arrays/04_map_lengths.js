function mapLengths(words) {
  const arrayOfLengths = [];
  
  for (let index = 0; index < words.length; index++) {
    const string = words[index];
    arrayOfLengths.push(string.length);
  }

  return arrayOfLengths;
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

function mapTheLength(description, input, expected) {
  const actual = mapLengths(input);

  console.log(composeMessage(description, actual, expected, input));
}

function testsToMapLength() {
  mapTheLength("single element array", ["a"], [1]);
  mapTheLength("double element array", ["a", "b"], [1, 1]);
  mapTheLength("different length of strings", ["ab", "b"], [2, 1]);
  mapTheLength("different length of strings", ["ab", "bcd"], [2, 3]);
  mapTheLength("different length strings", ["apple", "cat", "four"], [5, 3, 4]);
}

testsToMapLength();
