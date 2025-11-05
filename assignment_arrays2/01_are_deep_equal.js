function isArray(array1, array2) {
  return typeof array1 === "object" && typeof array2 === "object";
}

function checkAreElementsEqual(array1, array2, index) {
  if (index > array1.length) {
    return true;
  }
  if (isArray(array1[index], array2[index])) {
    return checkAreElementsEqual(array1[index], array2[index], 0);
  }
  if (array1[index] !== array2[index]) {
    return false;
  }

  return checkAreElementsEqual(array1, array2, index + 1);
}

function areDeepEqual(array1, array2) {
  if (!isArray(array1, array2)) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }

  return checkAreElementsEqual(array1, array2, 0);
}

function composeMessage(description, actual, expected, array1, array2) {
  const emoji = actual === expected ? "✅" : "❌";
  let message = `${emoji} ${description} \n`;

  if (actual !== expected) {
    message += `\n input is : ${array1} \n ${array2}
    expected is : ${expected}
    actual is : ${actual} \n`;
  }

  return message;
}

function testAreDeepEqual(description, array1, array2, expected) {
  const actual = areDeepEqual(array1, array2);
  console.log(composeMessage(description, actual, expected, array1, array2));
}

function testsToCheckDeepEquality() {
  testAreDeepEqual("single element array", [1], [1], true);
  testAreDeepEqual("same type of elements", [1, 2, 3], [1, 2, 3], true);
  testAreDeepEqual("same type of elements", [1, 2, 3], [1, 2], false);
  testAreDeepEqual("same type of elements", [1], [1, 2], false);
  testAreDeepEqual("different elements", [1, [2, 3]], [1, [3, 2]], false);
  testAreDeepEqual("different elements", [1, [2, 3]], [1, [2, 3]], true);
  testAreDeepEqual("different lengths", [1, [2, 3]], [1, [2]], false);
  testAreDeepEqual("different lengths", [1, [2]], [1, [2, 3]], false);
  testAreDeepEqual("different lengths", [1, [2, [3]]], [1, [2, [3]]], true);
  testAreDeepEqual("different types", "abc", ['a', 'b', 'c'], false);
  testAreDeepEqual("empty arrays", [], [[]], false);
  testAreDeepEqual("not object type", 1, 1, false);
  testAreDeepEqual("different types", ["a", "b", "c"], "abc", false);
  testAreDeepEqual("not an object type", undefined, [1,2], false);
  testAreDeepEqual("not an object type", undefined, undefined, false);
  testAreDeepEqual("different dimensions", [1,[2,[3,[4]]]], [1,[2,[3,[4]]]], true);
  testAreDeepEqual("different dimensions", [1,[2,[3,[4]]]], [1,[2,[3,4]]], false);
}

testsToCheckDeepEquality();
