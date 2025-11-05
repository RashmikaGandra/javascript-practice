function findStartingIndex(string, substring) {
  const length = string.length - substring.length;

  return length;
}

function seperatingString(string, substring) {
  let seperatedString = "";

  const startingIndex = findStartingIndex(string, substring);
  for (let term = startingIndex; term < string.length; term++) {
    seperatedString = seperatedString + string[term];
  }

  return seperatedString;
}

function endsWith(string, substring) {
  // Implementation here.
  if (substring === '') {
    return false;
  }
  
  const seperatedString = seperatingString(string, substring);

  return substring === seperatedString;
}

function compareExpectation(expectedValue, finalValue) {
  return (expectedValue === finalValue) ? "✅" : "❌";
}

function testSubstring(string, substring, expectedValue) {
  const finalValue = endsWith(string, substring);
  const comparedResult = compareExpectation(expectedValue, finalValue);
  const message = "value should be | " + expectedValue + " | and it is ";
  const finalMessage = comparedResult + message + " | " + finalValue + "|";

  console.log(finalMessage);

}

function valuesToTest() {
  console.log("substring ends with");

  testSubstring("hello", "lo", true);
  testSubstring("summer", "mm", false);
  testSubstring("thoughtworks", "ht", false);
  testSubstring("laptop", "op", true);
  testSubstring('hello world', 'wor', false);
  testSubstring('hello world', 'hello', false);
  testSubstring('hello', '', false);
}

valuesToTest();
