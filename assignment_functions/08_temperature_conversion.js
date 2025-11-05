function fromKelvin(from, to, value) {
  const toCelsius = (value * 1) - 273.15;

  if (to === 'C') {
    return toCelsius;
  }
  if (to === 'F') {
    return (toCelsius * 9/5) + 32;
  }
  if (from === to) {
    return value * 1;
  }

  return NaN;
}

function fromCelsius(from, to, value) {
  if (to === 'F') {
    return ((value * 1 )* 9/5) + 32;
  }
  if (to === 'K') {
    return (value * 1) + 273.15;
  }
  if (from === to) {
    return value * 1;
  }

  return NaN;
}

function fromFahrenheit(from, to, value) {
  const toCelsius = ((value * 1) - 32) * 5/9 ;

  if (to === 'C') {
    return toCelsius;
  }
  if (to === 'K') {
    return toCelsius + 273.15;
  }
  if (from === to) {
    return value * 1;
  }
  return NaN;

}

function convert(from, to, value) {
  // Implementation here.
  if (from === 'C') {
    return fromCelsius(from, to, value);
  }
  if (from === 'K') {
    return fromKelvin(from, to, value);
  }
  if (from === 'F') {
    return fromFahrenheit(from, to, value);
  }

  return NaN;
}

function checkApproximate(expectedValue) {
  const greaterNumber = expectedValue + 0.05;
  const smallestNumber = expectedValue - 0.05;
  return (expectedValue < greaterNumber && expectedValue > smallestNumber);

}

function compareExpectation(expectedValue, finalTemperature) {
  return checkApproximate(expectedValue, finalTemperature) ? "✅" : "❌";
}

function convertTemperature(from, to, value, expectedValue) {
  const temperature = convert(from, to, value);
  const comparedResult = compareExpectation(expectedValue, temperature);
  const message = "Temperature should be | " + expectedValue + " | and it is ";
  const finalMessage = comparedResult + message + " | " + temperature + "|";

  console.log(finalMessage);

}

function valuesToTest() {
  console.log("converted temperature");

  convertTemperature('C', 'K', 0, 273.15);
  convertTemperature('C', 'F', 37, 98.6);
  convertTemperature('K', 'C', 100, -173.15);
  convertTemperature('K', 'F', 100, -279.67);
  convertTemperature('F', 'K', 98.6, 310.15);
  convertTemperature('F', 'C', -40, -40);
  convertTemperature('K', 'K', 0, 0);
  convertTemperature('H', 'K', 15, NaN);
  convertTemperature('C', 'C', 0, 0);
}

valuesToTest();
