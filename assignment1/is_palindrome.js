const a = 121;
let numberToCheck = a;
let result = 0;

while (numberToCheck !== 0) {
  let reminder = numberToCheck % 10;
  result = result * 10 + reminder;
  numberToCheck = (numberToCheck - (numberToCheck % 10)) / 10;
}

const isPalindrome = (result === a) ? true : false;
console.log(isPalindrome);
