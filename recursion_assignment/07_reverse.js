function restOfString(string) {
  let restOfTheString = "";

  for (let index = 1; index < string.length; index++) {
    restOfTheString = restOfTheString + string[index];
  }

  return restOfTheString;
}

function reverse(string) {
  if (string === "") {
    return "";
  }

  return reverse(restOfString(string)) + string[0];
}

function compareExpectation(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function reverseString(string, expectedValue) {
  const result = reverse(string);
  const comparedResult = compareExpectation(expectedValue, result);
  const message = "result should be |" + expectedValue + "| and it is";
  const finalMessage = comparedResult + message + "|" + result + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  reverseString("a", "a");
  reverseString("ab", "ba");
  reverseString("abc", "cba");
  reverseString("", "");
  reverseString("madam", "madam");
  reverseString("NaN", "NaN");
}

valuesToTest();
