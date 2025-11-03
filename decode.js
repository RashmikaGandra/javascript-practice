function decodeNumber(input) {
  const decodedData = input.slice(1, input.length - 1);
  return parseInt(decodedData);
}

function decodeString(input) {
  const index = input.indexOf(":");
  return input.slice(index + 1);
}

function decodeList(input) {
  const decodedArray = [];
  return decodedArray;
}

function decode(input) {
  switch (input[0]) {
    case "i" : return decodeNumber(input);
    case "l" : return decodeList(input);
    default : return decodeString(input);
  }
}

function isArray(x) {
  return typeof x === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

function composeMessage(description, actual, expected) {
  const emoji = areDeepEqual(actual, expected) ? "✅" : "❌";
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

function testsForArrays() {
  console.log("Arrays");
  console.log(underline("arrays"));
  decodeTheInput("empty list", "le", []);
  decodeTheInput("empty list", "l1:ae", ["a"]);
}

function testsToDecode() {
  console.log("Decoding");
  console.log(underline("Decoding"));
  testsForIntegers();
  testsForStrings();
  testsForArrays();
}

testsToDecode();
