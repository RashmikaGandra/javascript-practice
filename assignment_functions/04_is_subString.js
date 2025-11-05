function isSubstring(string, subString) {
  // Implementation here.
  let x = subString.length > 0 ? 0: -1;
  let isSubString = false;
  const stringLen = string.length;
  const subStringLen = subString.length;
  
  for (let indexForString = 0; indexForString < stringLen; indexForString++) {
    x = 0;
    if(string[indexForString] === subString[x]) {
      let index = indexForString;
      while (string[index] === subString[x] && x < subStringLen && index < stringLen) {
        x++;
        index++;
      }
      if (x === subString.length) {
        isSubString = true;
      }
    }
  }
  return isSubString;
}

function compareExpectation(expectedValue, subString) {
  return (expectedValue === subString) ? "✅" : "❌";
}

function subStringOrNot(string, subString, expectedValue) {
  const subStringIs = isSubstring(string, subString);
  const comparedResult = compareExpectation(expectedValue, subStringIs);
  const message = "result should be | " + expectedValue + " | and it is ";
  const finalMessage = comparedResult + message + " | " + subStringIs + "|";

  console.log(finalMessage);

}

function valuesToTest() {
  console.log("Is substring result");

  subStringOrNot("a", "a",true);
  subStringOrNot("a", "b",false);
  subStringOrNot("ab", "a",true);
  subStringOrNot("ab", "ab",true);
  subStringOrNot("abc", "ab",true);
  subStringOrNot("abc", "abc",true);
  subStringOrNot("abc", "bc",true);
  subStringOrNot("abc", "b",true);
  subStringOrNot("a aa", "aa", true);
  subStringOrNot("ab aa", "aa", true);
  subStringOrNot("aba", "aa", false);
  subStringOrNot("hello world", "lo", true);
  subStringOrNot("repeating iiiii",  "iii", true);
  subStringOrNot("not found", "for", false);
  subStringOrNot("abc", "", false);
}

valuesToTest();


