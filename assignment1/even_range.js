const startOfTheRange = 24;
const endOfTheRange = 40;
let term = (startOfTheRange % 2 === 0) ? startOfTheRange : startOfTheRange + 1;

while (term <= endOfTheRange) {
  console.log(term);
  term = term + 2;
}
