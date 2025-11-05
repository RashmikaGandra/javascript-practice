function padZeros(text, length) {
  return text.padStart(length, '0');
}

function formatDate(date, month, year) {
  const paddedDate = padZeros(date + '', 2);
  const paddedMonth = padZeros(month + '', 2);
  const paddedYear = padZeros(year + '', 4);

  return `${paddedDate}-${paddedMonth}-${paddedYear}`;
}

function nextYear(date, month, year) {
  if (year < 9999 && year >= 0) {
    return formatDate(date, month, year + 1);
  }
}

function nextMonth(date, month, year) {
  if (month === 12) {
    return nextYear(date, 1, year);
  }

  return formatDate(date, month + 1, year);
}

function isLeapYear(year) {
  if (year === 0) {
    return false;
  }

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }

  return false;
}

function daysInMonth(month, year) {
  let noOfDays = 0;

  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }

  if (month % 2 === 0) {
    noOfDays = month < 8 ? 30 : 31;
  } else {
    noOfDays = month > 7 ? 30 : 31;
  }

  return noOfDays;
}

function incrementDate(date, month, year, noOfDays) {
  if (date === noOfDays) {
    return nextMonth(1, month, year);
  }

  return formatDate(date + 1, month, year);
}

function isValidDate(date, month, year, noOfDays) {
  const validDate = date <= noOfDays && date > 0;
  const validMonth = month <= 12 && month > 0;
  const validYear = year <= 9999 && year >= 0;

  return validDate && validMonth && validYear;
}

function nextDate(date) {
  const dateIs = parseInt(date.slice(0, 2));
  const month = parseInt(date.slice(3, 5));
  const year = parseInt(date.slice(6, date.length));
  const noOfDays = daysInMonth(month, year);

  if (!isValidDate(dateIs, month, year, noOfDays)) {
    return "Invalid Date";
  }

  return incrementDate(dateIs, month, year, noOfDays);
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

function findNextDate(description, input, expected) {
  const actual = nextDate(input);

  console.log(composeMessage(description, actual, expected, input));
}

function testForSimpleIncrement() {
  findNextDate("simple increment", "01-01-2001", "02-01-2001");
  findNextDate("Increment in feb(leap year)", "28-02-2024", "29-02-2024");
  findNextDate("simple increment", "30-07-2024", "31-07-2024");
}

function testForLastDays() {
  findNextDate("end of the month", "30-11-2001", "01-12-2001");
  findNextDate("end of the year", "31-12-2001", "01-01-2002");
  findNextDate("end of feb (non leap year)", "28-02-2025", "01-03-2025");
  findNextDate("end of the month (leap year)", "29-02-2024", "01-03-2024");
  findNextDate("last day in april", "30-04-2024", "01-05-2024");
  findNextDate("last date in feb(non leap year)", "28-02-0000", "01-03-0000");
  findNextDate("last date in feb(non leap year)", "28-02-9999", "01-03-9999");
  findNextDate("last date in the month", "31-01-2021", "01-02-2021");
  findNextDate("aug 31", "31-08-2020", "01-09-2020");
  findNextDate("july 31", "31-07-2020", "01-08-2020");
  findNextDate("last date in th year", "31-12-0000", "01-01-0001");
}

function testForInvalidCases() {
  findNextDate("feb last day (non leap year)", "29-02-1990", "Invalid Date");
  findNextDate("Invalid Month", "31-00-2020", "Invalid Date");
  findNextDate("invalid date in month", "31-04-2024", "Invalid Date");
  findNextDate("invalid date in the year", "29-02-2025", "Invalid Date");
  findNextDate("invalid month", "31-20-2000", "Invalid Date");
  findNextDate("invalid date", "32-01-2020", "Invalid Date");
  findNextDate("invalid date", "30-02-2021", "Invalid Date");
  findNextDate("invalid month", "12-00-2020", "Invalid Date");
  findNextDate("invalid date", "00-01-2020", "Invalid Date");
}

function valuesToTest() {
  testForSimpleIncrement();
  testForLastDays();
  testForInvalidCases();
}

valuesToTest();
