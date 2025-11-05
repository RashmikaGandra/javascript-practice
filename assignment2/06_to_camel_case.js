function caseChange(text) {
  const upperCase = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = " abcdefghijklmnopqrstuvwxyz";
  let modifiedString = text;

  for (let index = 0; index < lowerCase.length; index++) {
    if (text === upperCase[index]) {
      modifiedString = lowerCase[index];
    }
  }

  return modifiedString;
}

function toUpperCase(text) {
  const upperCase = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = " abcdefghijklmnopqrstuvwxyz";
  const numerals = "0123456789";

  for (let index = 0; index < lowerCase.length; index++) {
    if (text === lowerCase[index]) {
      return upperCase[index];
    }

    if (text === numerals[index]) {
      return numerals[index];
    }
  }
}

function removeUnderScores(text) {
  let modifiedString = "";

  for (let index = 0; index < text.length; index++) {
    if (text[index] === "_" && text[index + 1] !== "_") {
      modifiedString += text[index];
    }

    if (text[index] !== "_") {
      modifiedString += text[index];
    }
  }
  return modifiedString;
}

function changeToCamelCase(text, length) {
  let camelCase = "";

  for (let index = 0; index < length; index++) {
    if (text[index] === "_") {
      if (index !== 0) {
        camelCase = camelCase + toUpperCase(text[index + 1]);
        index++;
      }
    } else {
      camelCase = camelCase + text[index];
    }
  }
  return camelCase;
}

function toCamelCase(sentence) {
  let modifiedString = "";

  for (let index = 0; index < sentence.length; index++) {
    modifiedString = modifiedString + caseChange(sentence[index]);
  }

  let text = removeUnderScores(modifiedString);
  let length = text.length;

  length = text[length - 1] === "_" ? length - 1 : length;

  return changeToCamelCase(text, length);
}

function compareExpectation(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function changeCase(string, expectedValue) {
  const camelCase = toCamelCase(string);
  const comparedResult = compareExpectation(expectedValue, camelCase);
  const message = "camelCase should be |" + expectedValue + "| and it is";
  const finalMessage = comparedResult + message + " | " + camelCase + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  changeCase("a", "a");
  changeCase("a_b", "aB");
  changeCase("a_BC", "aBc");
  changeCase("a_BC", "aBc");
  changeCase(" ", " ");
  changeCase("", "");
  changeCase("hello_wORLd__p_ro1gram", "helloWorldPRo1gram");
  changeCase("Abc", "abc");
  changeCase("__abc", "abc");
  changeCase("abc__", "abc");
  changeCase("__", "");
  changeCase("  _  ", "    ");
  changeCase("HELLO", "hello");
  changeCase("_Hello_1orld1", "hello1orld1");

}

valuesToTest();
