function reverseString(sentence) {
  let reversedString = "";

  for (let index = sentence.length - 1; index >= 0; index--) {
    reversedString = reversedString + sentence[index];
  }

  return reversedString;
}

function compareExpectation(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function stringReverse(string, expectedValue) {
  const reverse = reverseString(string);
  const comparedResult = compareExpectation(expectedValue, reverse);
  const message = "reverse should be |" + expectedValue + "| and it is";
  const finalMessage = comparedResult + message + " | " + reverse + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  stringReverse("a", "a");
  stringReverse("ab", "ba");
  stringReverse("abc", "cba");
  stringReverse(" ", " ");
  stringReverse("", "");
  stringReverse("hello", "olleh");
  stringReverse(" hello", "olleh ");
  stringReverse("1234", "4321");
}

valuesToTest();
