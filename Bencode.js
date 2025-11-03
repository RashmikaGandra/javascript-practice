function encode(input) {
  if (typeof input === "number") {
    return "i" + input + "e";
  }

  return input.length + ":" + input;
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

function encodeTheInput(description, input, expected) {
  const acutal = encode(input);
  console.log(composeMessage(description, acutal, expected));
}

function underline(x) {
  return "-".repeat(x.length);
}

function testsForIntegers() {
  console.log("Integers");
  console.log(underline("Integers"));
  encodeTheInput("zero", 0, "i0e");
  encodeTheInput("one", 1, "i1e");
  encodeTheInput("two digits", 12, "i12e");
  encodeTheInput("negative numbers", -1, "i-1e");
  encodeTheInput("negative two digit", -12, "i-12e");
}

function testsForStrings() {
  console.log("Strings");
  console.log(underline("Strings"));
  encodeTheInput("empty string", "", "0:");
  encodeTheInput("string", "hello", "5:hello");
  encodeTheInput("string with spaces", "hello world", "11:hello world");
  encodeTheInput("including special characters", "!hello#", "7:!hello#");
}

testsForIntegers();
testsForStrings();
