function checkEquality(string, character) {
  return string === character;
}

function compareCharacter(string, character) {
  for (let term = 0; term < string.length; term++) {
    if (checkEquality(string[term], character)) {
      return term;
    }
  }

  return -1;
}

function findIndex(text, target) {
  // Implementation here.
  const index = compareCharacter(text, target);

  return index;
}

function compareExpectation(expectedValue, finalIndex) {
  return (expectedValue === finalIndex) ? "✅" : "❌";
}

function findString(string, character, expectedValue) {
  const finalIndex = findIndex(string, character);
  const comparedResult = compareExpectation(expectedValue, finalIndex);
  const message = "index should be | " + expectedValue + " | and it is ";
  const finalMessage = comparedResult + message + " | " + finalIndex + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  console.log("First index");
  
  findString("hello world", "o", 4);
  findString("summer", "m", 2);
  findString("thoughtworks", "h", 1);
  findString("laptop", "p", 2);
  findString('hello world', ' ', 5);
  findString('hello world', 'l', 2);
  findString('repeating iiiiii', 'i', 6);
  findString('not found', 'z', -1)
}

valuesToTest();

