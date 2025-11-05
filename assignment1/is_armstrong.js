const a = 1;
let checkingDigits = a;
let result = 0;
let numberOfDigits = 0;
let toCheckArmstrong = a;

while (checkingDigits !== 0) {
  const reminder = checkingDigits % 10;
  checkingDigits = (checkingDigits - (checkingDigits % 10)) / 10;
  numberOfDigits = numberOfDigits + 1;
}

while (toCheckArmstrong !==0) {
  const reminder = toCheckArmstrong % 10;
  result = result + reminder ** numberOfDigits;
  toCheckArmstrong = (toCheckArmstrong - (toCheckArmstrong % 10)) / 10;
}

const isArmstrong = (result === a) ? true : false;
console.log(isArmstrong);

