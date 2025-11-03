function encodeArray(input) {
  let result = "";

  for (let index = 0; index < input.length; index++) {
    let encodedData = encode(input[index]);
    result += encodedData;
  }

  return result;
}

function encode(input) {
  switch (typeof input) {
    case "number" : return "i" + input + "e";
    case "string" : return input.length + ":" + input;
    case "object" : return "l" + encodeArray(input) + "e";
  }
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

function testsForArrays() {
  console.log("Arrays");
  console.log(underline("Arrays"));
  encodeTheInput("empty array", [], "le");
  encodeTheInput("single element array", ["a"], "l1:ae");
  encodeTheInput("two elements array", ["a", 1], "l1:ai1ee");
  encodeTheInput("nested array", ["a", [1]], "l1:ali1eee");
  encodeTheInput("empty nested array", ["a", 1, []], "l1:ai1elee");
  encodeTheInput("two level nested array", ["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee");
}

function testsToEncode() {
  console.log("Encoding");
  console.log(underline("Encoding"));
  testsForIntegers();
  testsForStrings();
  testsForArrays();
}

testsToEncode();
