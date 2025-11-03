function decodeNumber(input) {
  const decodedData = input.slice(1, input.length - 1);
  return parseInt(decodedData);
}

function decodeString(input) {
  const index = input.indexOf(":");
  return input.slice(index + 1);
}

function decode(input) {
  switch (input[0]) {
    case "i" : return decodeNumber(input);
    case "l" : return decodeList(input);
    default : return decodeString(input);
  }
}

function composeMessage(description, actual, expected) {
  const emoji = actual === expected ? "✅" : "❌";
  let message = `${emoji} ${description} \n`;

  if (actual !== expected) {
    message += `expected is : ${expected}
    actual is : ${actual} \n`;
  }

  return message;
}

function decodeTheInput(description, input, expected) {
  const acutal = decode(input);
  console.log(composeMessage(description, acutal, expected));
}

function underline(x) {
  return "-".repeat(x.length);
}

function testsForIntegers() {
  console.log("Integers");
  console.log(underline("Integers"));
  decodeTheInput("zero", "i0e", 0);
  decodeTheInput("positive single digit", "i1e", 1);
  decodeTheInput("positive two digit", "i12e", 12);
  decodeTheInput("negative numbers", "i-45e", -45);
}

function testsForStrings() {
  console.log("Strings");
  console.log(underline("Strings"));
  decodeTheInput("empty string", "0:", "");
  decodeTheInput("string", "5:hello", "hello");
  decodeTheInput("string with spaces", "11:hello world", "hello world");
  decodeTheInput("including special characters", "7:!hello#", "!hello#");
}

function testsToDecode() {
  console.log("Decoding");
  console.log(underline("Decoding"));
  testsForIntegers();
  testsForStrings();
}

testsToDecode();
