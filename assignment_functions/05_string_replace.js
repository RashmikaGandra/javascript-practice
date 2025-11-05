function replace(text, match, replacement) {
  // Implementation here.
  let replacedString = "";

  for (let index = 0; index < text.length; index++) {
    if (text[index] === match) {
      replacedString = replacedString + replacement;
    } else {
      replacedString = replacedString + text[index];
    }
  }

  return replacedString;
}

function compareExpectation(expectedValue, replacedString) {
  return (expectedValue === replacedString) ? "✅" : "❌";
}

function sliceString(string, match, replacement, expectedValue) {
  const replacedString = replace(string, match, replacement);
  const comparedResult = compareExpectation(expectedValue, replacedString);
  const message = "replaced string should be | " + expectedValue + " | and it is ";
  const finalMessage = comparedResult + message + " | " + replacedString + "|";

  console.log(finalMessage);

}

function valuesToTest() {
  console.log("Replacing string");

  sliceString("hello world", 'l', 'n', "henno wornd");
  sliceString("no spaces in here", " ", "_", "no_spaces_in_here");
  sliceString(" ", "d", "e", " ");
  sliceString("book", "o", "a", "baak");
  sliceString("bottle", "o", "a", "battle");
  sliceString(" ", " ", "r", "r");
  sliceString("string", "o", "r", "string");
}

valuesToTest();
