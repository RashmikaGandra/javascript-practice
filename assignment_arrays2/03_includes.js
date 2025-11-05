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

function composeMessage(description, actual, expected, input) {
  const emoji = actual === expected ? "✅" : "❌";
  let message = `${emoji} ${description} \n`;

  if (actual !== expected) {
    message += `\n input is : ${input}
    expected is : ${expected}
    actual is : ${actual} \n`;
  }

  return message;
}

function testIncludes(description, array, target, expected) {
  const actual = includes(array, target);
  console.log(composeMessage(description, actual, expected, array, target));
}

function testsToCheckIncludes() {
  testIncludes("single element", [1], 1, true);
  testIncludes("target not in array", [], 1, false);
  testIncludes("multiple element array", [1, 2, 3], 2, true);
  testIncludes("target not in array", [1, 2, 3], 4, false);
  testIncludes("target not in array", [1, 2, [3]], 3, false);
  testIncludes("nested array", [1, 2, [3]], [3], true);
  testIncludes("nested array", [[]], [], true);
  testIncludes("target empty array", [1], [], false);
  testIncludes("target empty array", [1,[2,[3,[4]]]], [4], false);
  testIncludes("target empty array", [1,[2,[3,[4]]]], [4], false);
}

testsToCheckIncludes();
