function encode(input) {
  return "i" + input + "e";
}

function composeMessage(description, actual, expected) {
  const emoji = actual === expected ? "✅" : "❌";
  let message = `\n${emoji} ${description} \n`;

  if (actual !== expected) {
    message += `\n style is : ${style}
    expected is : ${expected}
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

testsForIntegers();
