function findStart(text) {
  for (let index = 0; index < text.length; index++) {
    if (text[index] !== " " && text[index] !== "\t" && text[index] !== "\n") {
      return index;
    }
  }
}

function findEnd(text) {
  for (let index = text.length - 1; index >= 0; index--) {
    if (text[index] !== " " && text[index] !== "\t" && text[index] !== "\n") {
      return index;
    }
  }
}

function trim(sentence) {
  let trimedString = "";
  const start = findStart(sentence);
  const end = findEnd(sentence);

  for (let index = start; index <= end; index++) {
    trimedString = trimedString + sentence[index];
  }

  return trimedString;
}

function compareExpectation(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function stringTrim(string, expectedValue) {
  const trimedString = trim(string);
  const comparedResult = compareExpectation(expectedValue, trimedString);
  const message = "trimed string should be |" + expectedValue + "| and it is";
  const finalMessage = comparedResult + message + " | " + trimedString + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  stringTrim(" a", "a");
  stringTrim("a ", "a");
  stringTrim("a", "a");
  stringTrim("a ", "a");
  stringTrim(" ab", "ab");
  stringTrim(" ", "");
  stringTrim(" ab\n", "ab");
  stringTrim(" ab ", "ab");
  stringTrim(" ", "");
  stringTrim("", "");
  stringTrim("     ", "");
  stringTrim("     ", "");
  stringTrim("sk y ", "sk y");
  stringTrim("  hello world", "hello world");
  stringTrim(" hello world\n", "hello world");
  stringTrim("\t strength", "strength");
  stringTrim(" hello world\n", "hello world");
  stringTrim(" hello world\t\t", "hello world");
  stringTrim("hello      ", "hello");
}

valuesToTest();
