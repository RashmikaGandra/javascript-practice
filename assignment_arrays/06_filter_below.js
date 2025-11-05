function filterBelow(array, threshold) {
  const arrayOfFilteredElements = [];
  
  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
      arrayOfFilteredElements.push(array[index]);
    }
  }

  return arrayOfFilteredElements;
}

function areArraysEqual(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let index = 0; index < actual.length; index ++) {
    if (actual[index] !== expected[index]) {
      return false;
    }
  }

  return true;
}

function composeMessage(description, actual, expected, input) {
  const emoji = areArraysEqual(actual, expected, 0) ? "✅" : "❌";
  let message = `${emoji} ${description} \n`;

  if (!areArraysEqual(actual, expected, 0)) {
    message += `\n input is : ${input}`;
    message += `\n expected is : ${expected}`;
    message += `\n actual is : ${actual} \n`;
  }

  return message;
}

function filterbelowELement(description, array, threshold, expected) {
  const actual = filterBelow(array, threshold);

  console.log(composeMessage(description, actual, expected, array, threshold));
}

function testsToFilterBelowElement() {
  filterbelowELement("single element array", [2], 1, []);
  filterbelowELement("single element array", [0], 1, [0]);
  filterbelowELement("random elements", [1, 2, 3, 4], 4, [1, 2, 3]);
  filterbelowELement("multiple elements", [1, 2, 3, 4], 1, []);
  filterbelowELement("random elements", [1, 2, 3, 4], 0, []);
  filterbelowELement("random elements", [6, 2, 3, 1, 4, 7], 3, [2, 1]);
}

testsToFilterBelowElement();
