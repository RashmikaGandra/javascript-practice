function findLongestName(names, longestName = "", lengthToCompare = 0) {
  for (let index = 0; index < names.length; index++) {
    if (lengthToCompare < names[index].length) {
      lengthToCompare = names[index].length;
      longestName = names[index];
    }
  }

  return "Longest name among all is :" + longestName;
}
 
function isValidInfo(names) {
  if (names[0] === "") {
    console.log("Enter valid names");
    return takeNamesFromUser();
  }

  return findLongestName(names);
}

function takeNamesFromUser() {
  const names = prompt("Enter names to find largest one:");
  const allNames = names.split(" ");
  const longestName = isValidInfo(allNames);
  return longestName;
}

console.log(takeNamesFromUser()); 

