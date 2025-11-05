function findSubString(string, subString, index, subStringIndex) {
  if (subStringIndex === subString.length) {
    return true;
  }

  if (index === string.length) {
    return false;
  }

  if (string[index] === subString[subStringIndex]) {
    return findSubString(string, subString, index + 1, subStringIndex + 1);
  }

  return findSubString(string, subString, index - subStringIndex + 1, 0);
}

function isSubString(string, otherString) {
  if (otherString === "") {
    return false;
  }

  return findSubString(string, otherString, 0, 0);
}

function compareExpectation(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function subString(string, subString, expectedValue) {
  const result = isSubString(string, subString);
  const comparedResult = compareExpectation(expectedValue, result);
  const message = "result should be |" + expectedValue + "| and it is";
  const finalMessage = comparedResult + message + " | " + result + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  subString("a", "a", true);
  subString("a", "", false);
  subString("a", "b", false);
  subString("", "", false);
  subString("ab", "a", true);
  subString("ab", "b", true);
  subString("ab", "ab", true);
  subString("abc", "bc", true);
  subString("abc", "ba", false);
  subString("abc", "d", false);
  subString("abc", "", false);
  subString("hello", "el", true);
  subString("hello", "eo", false);
  subString("    ", "   ", true);
  subString("", "a", false);
  subString("hello world", "lo wo", true);
  subString("hello", "lo", true);
}

valuesToTest();
