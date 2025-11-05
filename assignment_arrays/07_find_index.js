function findIndex(array, element) {
  for (let index = 0; index <= array.length; index++) {
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

function findTheIndex(description, array, element, expected) {
  const actual = findIndex(array, element);
  console.log(composeMessage(description, actual, expected, array, element));
}

function testsToFindIndex() {
  findTheIndex("single element", [1], 1, 0);
  findTheIndex("two element", [1, 2], 2, 1);
  findTheIndex("same elements", ["a", "a"], "a", 0);
  findTheIndex("same elements", ["a", "a"], "a", 0);
  findTheIndex("different length of elements", ["ab", "a"], "a", 1);
  findTheIndex(
    "different length", 
    ["apple", "cake", "tea", "coffee", "tea"], 
    "tea", 
    2
  );
  findTheIndex("element is not in array", ["apple", "cake"], "tea", -1);
}

testsToFindIndex();
