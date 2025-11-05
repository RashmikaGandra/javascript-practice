let leapYear;
const year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  leapYear = true;
} else {
  leapYear = false;
}

console.log(leapYear);
