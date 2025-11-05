function convertingToNumber(string, index, number) {
  number = number + string[index] * 1;
  
  if (index === string.length - 1) {
    return number;
  }
  
  return convertingToNumber(string, index + 1, number * 10);
}

function stringToNumber(string) {
  let index = 0;
  const number = 0;

  if (string[0] === "-") {
    index = 1;
    return (string[0] + convertingToNumber(string, index, number)) * 1;
  }
  
  return convertingToNumber(string, index, number);
}

function generateEmoji(expectedValue, finalValue) {
  return expectedValue === finalValue ? "✅" : "❌";
}

function convertToNumber(string, expectedValue) {
  const result = stringToNumber(string);
  const emoji = generateEmoji(expectedValue, result);
  const message = "result should be |" + expectedValue + "| and it is";
  const finalMessage = emoji + message + " | " + result + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  convertToNumber("1", 1);
  convertToNumber("2", 2);
  convertToNumber("12", 12);
  convertToNumber("123", 123);
  convertToNumber("1234", 1234);
  convertToNumber("-1234", -1234);
}

valuesToTest();
