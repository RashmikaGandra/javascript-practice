function checkEquality(string, index, length) {
  if (string[index] !== string[length]) {
    return false;
  }

  if (index >= length) {
    return true;
  }

  return checkEquality(string, index + 1, length - 1);
}

function isPalindrome(palindromeCandidate) {
  if (palindromeCandidate.length === 1) {
    return true;
  }

  return checkEquality(palindromeCandidate, 0, palindromeCandidate.length - 1);
}

function compareExpectation(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function checkPalindrome(string, expectedValue) {
  const result = isPalindrome(string);
  const comparedResult = compareExpectation(expectedValue, result);
  const message = "result should be |" + expectedValue + "| and it is";
  const finalMessage = comparedResult + message + " | " + result + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  checkPalindrome("a", true);
  checkPalindrome("abba", true);
  checkPalindrome("madam", true);
  checkPalindrome("NaN", true);
  checkPalindrome("true", false);
  checkPalindrome("ab", false);
  checkPalindrome("book", false);
}

valuesToTest();
