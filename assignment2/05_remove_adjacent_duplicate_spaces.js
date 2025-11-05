function removeAdjacentDuplicateSpaces(sentence) {
  const text = sentence;
  let modifiedString = "";

  for (let index = 0; index < text.length; index++) {
    if (text[index] === " " && text[index + 1] !== " ") {
      modifiedString += text[index];
    }
    
    if (text[index] !== " ") {
      modifiedString += text[index];
    }
  }

  return modifiedString;
}

function compareExpectation(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function removeSpaces(string, expectedValue) {
  const modifiedString = removeAdjacentDuplicateSpaces(string);
  const comparedResult = compareExpectation(expectedValue, modifiedString);
  const message = "modifiedString should be |" + expectedValue + "| and it is";
  const finalMessage = comparedResult + message + " | " + modifiedString + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  removeSpaces(" a", " a");
  removeSpaces("  a", " a");
  removeSpaces("  ab", " ab");
  removeSpaces("ab  ", "ab ");
  removeSpaces("   hello world   ", " hello world ");
  removeSpaces("statement   with   two spaces", "statement with two spaces");
}

valuesToTest();


