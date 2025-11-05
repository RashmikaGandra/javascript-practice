function isDivisibleBy(number , divisior) {
  return number % divisior === 0;
}


function fizzBuzz(number) {
  // Implementation here.
  let string = "";

  if (isDivisibleBy(number, 3) && isDivisibleBy(number, 5)) {
    return "fizzbuzz";
  }
  if (isDivisibleBy(number, 3)) {
    return "fizz";
  }
  if (isDivisibleBy(number, 5)) {
    return "buzz";
  }

  return string + number;
}

function compareExpectation(expectedValue, finalString) {
  return (expectedValue === finalString) ? "✅" : "❌";
}

function findString(number, expectedValue) {
  const finalString = fizzBuzz(number);
  const comparedResult = compareExpectation(expectedValue, finalString);
  const message = "string should be | " + expectedValue + " | and it is ";
  const finalMessage = comparedResult + message + " | " + finalString + "|";

  console.log(finalMessage);
}

function valuesToTest() {
  console.log("stirng is");
  
  findString(15, "fizzbuzz");
  findString(27, "fizz");
  findString(0, "fizzbuzz");
  findString(40, "buzz");
  findString(39, "fizz");
  findString(17, "17")
}

valuesToTest();

