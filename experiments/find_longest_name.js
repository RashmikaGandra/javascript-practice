function findLongestName(names, longestName = "", lengthToCompare = 0) {
  for (let index = 0; index < names.length; index++) {
    if (lengthToCompare < names[index].length) {
      lengthToCompare = names[index].length;
      longestName = names[index];
    }
  }

  return "Longest name among all is :" + longestName;
}

function takeNamesFromUser() {
  const names = prompt("Enter names to find largest one:");
  const allNames = names.split(" ");
  const longestName = findLongestName(allNames);
  return longestName;
}

console.log(takeNamesFromUser()); 

