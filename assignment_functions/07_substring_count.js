function occurrences(string, substring) {
  // Implementation here.
  let x = substring.length > 0 ? 0: -1;
  let count = 0;
  const stringLen = string.length;
  const subStringLen = substring.length;
  
  for (let indexForString = 0; indexForString < stringLen; indexForString++) {
    x = 0;
    if(string[indexForString] === substring[x]) {
      let index = indexForString;
      while (string[index] === substring[x] && x < subStringLen && index < stringLen) {
        x++;
        index++;
      }
      if (x === substring.length) {
        count++;
      }
    }
  }
  return count;

}

function compareExpectation(expectedValue, count) {
  return (expectedValue === count) ? "✅" : "❌";
}

function subStringCount(string, subString, expectedValue) {
  const count = occurrences(string, subString);
  const comparedResult = compareExpectation(expectedValue, count);
  const message = "count should be | " + expectedValue + " | and it is ";
  const finalMessage = comparedResult + message + " | " + count + "|";

  console.log(finalMessage);

}

function valuesToTest() {
  console.log("substring count:");

  subStringCount("a", "a", 1);
  subStringCount("ab", "a", 1);
  subStringCount("ab", "b", 1);
  subStringCount("aa", "a", 2);
  subStringCount("aba", "a", 2);
  subStringCount("aaba", "aa", 1);
  subStringCount("ab", "", 0);
  subStringCount("ab", "c", 0);
  subStringCount("abc", "c", 1);
  subStringCount("abc", "b", 1);
  subStringCount("hello world", "l", 3);
  subStringCount("hello world", "ll", 1);
  subStringCount("hello world", "zebra", 0);
  subStringCount("hello world", "world", 1);
}

valuesToTest();


