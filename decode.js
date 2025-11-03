function decode(input) {
  const decodedData = input.slice(1, input.length);
  return parseInt(decodedData);
}

function composeMessage(description, actual, expected) {
  const emoji = actual === expected ? "✅" : "❌";
  let message = `\n${emoji} ${description} \n`;

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

function testsToDecode() {
  console.log("Decoding");
  console.log(underline("Decoding"));
  testsForIntegers();
}

testsToDecode();
