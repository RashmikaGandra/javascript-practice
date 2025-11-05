function findLastIndex(array, element) {
  for (let index = array.length - 1; index >= 0; index--) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

function composeMessage(description, actual, expected, input) {
  const emoji = actual === expected ? "✅" : "❌";
  let message = `${emoji} ${description} \n`;

  if (actual !== expected) {
    message += `\n input is : ${input}`;
    message += `\n expected is : ${expected}`;
    message += `\n actual is : ${actual} \n`;
  }

  return message;
}

function findTheLastIndex(description, array, element, expected) {
  const actual = findLastIndex(array, element);
  console.log(composeMessage(description, actual, expected, array, element));
}

function testsToFindTheLastIndex() {
  findTheLastIndex("single element", [1], 1, 0);
  findTheLastIndex("two element", [1, 2], 2, 1);
  findTheLastIndex("same elements", ["a", "a"], "a", 1);
  findTheLastIndex("different length of elements", ["ab", "a"], "a", 1);
  findTheLastIndex(
    "different length",
    ["apple", "cake", "tea", "coffee", "tea"],
    "tea",
    4
  );
  findTheLastIndex("element is not in array", ["apple", "cake"], "tea", -1);
}

testsToFindTheLastIndex();
