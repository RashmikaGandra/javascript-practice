function slicing(text, start, end) {
  let slicedString = "";
  let textLength = end > text.length ? text.length - 1 : end;

  if (text === " " || text === ' ') {
    return slicedString;
  }
  for (let index = start; index <= textLength; index++) {
    slicedString = slicedString + text[index];
  }

  return slicedString;
}

function slice(text, start, end) {
  // Implementation here.
  if (start < 0) {
    start = 0;
  }
  if (start < 0 && end < 0) {
    return " ";
  }

  return slicing(text, start, end);
}

function compareExpectation(expectedValue, slicedString) {
  return (expectedValue === slicedString) ? "✅" : "❌";
}

function sliceString(string, start, end, expectedValue) {
  const slicedString = slice(string, start, end);
  const comparedResult = compareExpectation(expectedValue, slicedString);
  const message = "replaced string should be | " + expectedValue + " | and it is ";
  const finalMessage = comparedResult + message + " | " + slicedString + "|";

  console.log(finalMessage);

}

function valuesToTest() {
  console.log("sliced string");

  sliceString("hello world", 0, 4, "hello");
  sliceString("negative", -1, 4, "negat");
  sliceString(' ', 1 , 10 , ' ');
  sliceString("bottle", 0, 3, "bott");
  sliceString("finder", 0, 3, "find");
  sliceString("abc", 0, 100, "abc");
  sliceString("abc", -1, -4, '');
  sliceString("", 1, 2,"");
  sliceString("abc", 50, 100, "");
  sliceString("abcd", 1, 3, "bcd");
  sliceString("abc", -1, 100, "abc");
}

valuesToTest();


