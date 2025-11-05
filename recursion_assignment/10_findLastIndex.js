function findingIndex(string, char, index) {
  if (string[index] === char) {
    return index;
  }

  if (string[index] !== char && index < 0) {
    return -1;
  }

  return findingIndex(string, char, index - 1);
}

function findLastIndex(string, char) {
  const index = string.length - 1;
  return findingIndex(string, char, index);
}

function compareExpectation(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function indexIs(string, char, expectedValue) {
  const result = findLastIndex(string, char);
  const comparedResult = compareExpectation(expectedValue, result);
  const message = "result should be |" + expectedValue + "| and it is";
  const finalMessage = comparedResult + message + " | " + result + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  indexIs("a", "a", 0);
  indexIs("ab", "b", 1);
  indexIs("aba", "a", 2);
  indexIs("aba", "c", -1);
  indexIs("aba", "", -1);
  indexIs("", "", -1);
  indexIs("abaa", "a", 3);
}

valuesToTest();
