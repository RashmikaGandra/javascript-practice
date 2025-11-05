function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index ++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function composeMessage(description, actual, expected, array1, array2) {
  const emoji = actual === expected ? "✅" : "❌";
  let message = `${emoji} ${description} \n`;

  if (actual !== expected) {
    message += `\n input is : ${array1} & ${array2}
    expected is : ${expected}
    actual is : ${actual} \n`;
  }

  return message;
}

function areArraysEqual(description, array1, array2, expected) {
  const actual = areEqual(array1, array2);

  console.log(composeMessage(description, actual, expected, array1, array2));
}

function testArraysEqualOrNot() {
  areArraysEqual("single element array", [1], [1], true);
  areArraysEqual("single element array", [1], [2], false);
  areArraysEqual("different length of arrays", [1, 2], [2], false);
  areArraysEqual("elements in different positions", [1, 2], [2, 1], false);
  areArraysEqual("different length of arrays", [1, 2, 3], [1, 2], false);
  areArraysEqual("different length of arrays", [1, 2, 3], [], false);
  areArraysEqual("one array is empty", [1, 2, 3], [], false);
  areArraysEqual("one array is empty", [], [1, 2, 3], false);
}

testArraysEqualOrNot();
