function split(sentence, delimiter) {
  const splitedSentence = [];
  let wordToSplit = "";
  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== delimiter) {
      wordToSplit += sentence[index];
    } else {
      splitedSentence.push(wordToSplit);
      wordToSplit = "";
    }
  }
  splitedSentence.push(wordToSplit);
  return splitedSentence;
}

function areArraysEqual(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let index = 0; index < actual.length; index++) {
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

function testSplit(description, string, element, expected) {
  const actual = split(string, element);
  console.log(composeMessage(description, actual, expected, string, element));
}

function testsToSplitSentence() {
  testSplit("simple sentence", "ab", " ", ["ab"]);
  testSplit("simple sentence", "abc", " ", ["abc"]);
  testSplit("seperateing single char", "a,b,c", ",", ["a", "b", "c"]);
  testSplit("seperateing str", "one:two:three", ":", ["one", "two", "three"]);
  testSplit("empty delimiter", "", ",", [""]);
}

testsToSplitSentence();
