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

function includes(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      return true;
    }
    if (isArray(array[index])) {
      return areDeepEqual(array[index], target);
    }
  }

  return false;
}

function difference(array1, array2) {
  const differentElements = [];

  for (let index = 0; index < array1.length; index++) {
    if (!includes(array2, array1[index])) {
      differentElements.push(array1[index]);
    }
  }

  return differentElements;
}

function composeMessage(description, actual, expected, array1, array2) {
  const emoji = areDeepEqual(actual, expected) ? "✅" : "❌";
  let message = `${emoji} ${description} \n`;

  if (!areDeepEqual(actual, expected)) {
    message += `\n input is : ${array1} \n ${array2}
    expected is : ${expected}
    actual is : ${actual} \n`;
  }

  return message;
}

function testDifference(description, array1, array2, expected) {
  const actual = difference(array1, array2);
  console.log(composeMessage(description, actual, expected, array1, array2));
}

function testsToFindDifference() {
  testDifference("single element", [1], [2], [1]);
  testDifference("single element", [2], [3], [2]);
  testDifference("single element", [2], [2], []);
  testDifference("multiple elements", [1, 2], [2, 3], [1]);
  testDifference("multiple elements", [1, 2, 3], [2, 3, 4], [1]);
  testDifference("multiple elements", [1, 2, [3]], [1, 2, 3], [[3]]);
  testDifference("empty array to compare", [1, 2, [3]], [], [1, 2, [3]]);
}

testsToFindDifference();
