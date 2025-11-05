function findingIndex(string, char, index) {
  if (string[index] === char) {
    return index;
  }

  if (string[index] !== char && index === string.length - 1) {
    return -1;
  }

  return findingIndex(string, char, index + 1);
}

function findIndex(string, char) {
  const index = 0;
  return findingIndex(string, char, index);
}

function compareExpectation(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function indexIs(string, char, expectedValue) {
  const result = findIndex(string, char);
  const comparedResult = compareExpectation(expectedValue, result);
  const message = "result should be |" + expectedValue + "| and it is";
  const finalMessage = comparedResult + message + " | " + result + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  indexIs("a", "a", 0);
  indexIs("ab", "b", 1);
  indexIs("abc", "c", 2);
  indexIs("abc", "b", 1);
  indexIs("a", "b", -1);
  indexIs("aba", "a", 0);
  indexIs("a", "", -1);
  indexIs("", "", -1);
  indexIs("", "a", -1);
  indexIs("abc", undefined, -1);
}

valuesToTest();
