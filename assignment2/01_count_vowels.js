function isVowel(ch) {
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    return true;
  }

  if (ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U") {
    return true;
  }

  return false;

}

function countVowels(sentence) {
  let count = 0;

  for (let index = 0; index < sentence.length; index++) {
    if (isVowel(sentence[index])) {
      count++;
    }
  }

  return count;
}

function compareExpectation(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function vowelsCount(string, expectedValue) {
  const count = countVowels(string);
  const comparedResult = compareExpectation(expectedValue, count);
  const message = "count should be |" + expectedValue + "| and it is";
  const finalMessage = comparedResult + message + " | " + count + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  vowelsCount("a", 1);
  vowelsCount("A", 1);
  vowelsCount("Ab", 1);
  vowelsCount("AB", 1);
  vowelsCount("B", 0);
  vowelsCount("aeiou", 5);
  vowelsCount("hello world", 3);
  vowelsCount("hEllo wOrld", 3);
}

valuesToTest();
