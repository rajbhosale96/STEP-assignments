const HYPHEN = '-';
const formatDMY = 'dd-mm-yyyy';
const formatMDY = 'mm-dd-yyyy';
const formatYMD = "yyyy-mm-dd";
const invalidYear = 'invalid year';
const invalidMonth = 'invalid month';
const invalidDay = 'invalid day';
const valid = 'valid';

function isFormatValid(format) {
  return format === formatDMY || format === formatMDY || format === formatYMD;
}

function isHyphenInRightPosition(date, format) {
  const isLength = date.length === 10;

  if (format === formatDMY || format === formatMDY) {
    return date[2] === HYPHEN && date[5] === HYPHEN && isLength;
  }
  return date[4] === HYPHEN && date[7] === HYPHEN && isLength;
}

function isDivisibleBy(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  const isDivBy4 = isDivisibleBy(year, 4);
  const isDivBy100 = isDivisibleBy(year, 100);
  const isDivBy400 = isDivisibleBy(year, 400);

  return isDivBy400 || (!isDivBy100 && isDivBy4);
}

function getYear(date, format) {
  let year = 0;

  if (format === formatYMD) {
    year = date[0] + date[1] + date[2] + date[3];
    return +year;
  }

  year = date[6] + date[7] + date[8] + date[9];
  return +year;
}

function getMonth(date, format) {
  let month = 0;

  if (format === formatYMD) {
    month = date[5] + date[6];
    return +month;
  }
  if (format === formatDMY) {
    month = date[3] + date[4];
    return +month;
  }

  month = date[0] + date[1];
  return +month;
}

function getDay(date, format) {
  let day = 0;

  if (format === formatYMD) {
    day = date[8] + date[9];
    return +day;
  }
  if (format === formatDMY) {
    day = date[0] + date[1];
    return +day;
  }

  day = date[3] + date[4];
  return +day;
}

function isYearValid(year) {
  return year > 0 && year < 10000;
}

function isMonthValid(month) {
  return month > 0 && month < 13;
}

function getDaysInMonth(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  }

  return 31;
}

function isDayValid(day, month, year) {
  const daysInMonth = getDaysInMonth(month, year);

  return day > 0 && day <= daysInMonth;
}

function isdate(year, month, day) {
  if (!isYearValid(year)) {
    return invalidYear;
  }
  if (!isMonthValid(month)) {
    return invalidMonth;
  }
  if (!isDayValid(day, month, year)) {
    return invalidDay;
  }

  return valid;
}

function isDateValid(date, format) {
  const year = +getYear(date, format);
  const month = +getMonth(date, format);
  const day = +getDay(date, format);

  return isdate(year, month, day);
}

function validate(format, date) {
  if (!isFormatValid(format)) {
    return 'invalid format';
  }

  if (!isHyphenInRightPosition(date, format)) {
    return 'date not according to format';
  }

  return isDateValid(date, format);
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function invalidFormatTestCases() {
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('dd-mm-mmmm', '01-01-2020', 'invalid format');
  testValidate('yy-dd-mmmm', '01-01-2020', 'invalid format');
  testValidate('mm-yy-dddd', '01-01-2020', 'invalid format');
  testValidate('dd-dd-dddd', '01-01-2020', 'invalid format');
}

function invalidDateFormatTestCases() {
  testValidate('dd-mm-yyyy', '11-11-111', 'date not according to format');
  testValidate('dd-mm-yyyy', '1111-11-11', 'date not according to format');
  testValidate('dd-mm-yyyy', '11-1-1111', 'date not according to format');
  testValidate('dd-mm-yyyy', '1-11-1111', 'date not according to format');
  testValidate('yyyy-mm-dd', '1111-11-1', 'date not according to format');
  testValidate('yyyy-mm-dd', '1111- 1-11', 'date not according to format');
  testValidate('yyyy-mm-dd', '11111-1-11', 'date not according to format');
  testValidate('yyyy-mm-dd', '11-11-1111', 'date not according to format');
}

function invalidYearTestCases() {
  testValidate('yyyy-mm-dd', '0000-11-11', 'invalid year');
  testValidate('yyyy-mm-dd', 'tada-11-11', 'invalid year');
  testValidate('yyyy-mm-dd', 'yyyy-11-11', 'invalid year');
  testValidate('dd-mm-yyyy', '11-11-0000', 'invalid year');
  testValidate('dd-mm-yyyy', '11-11-tasa', 'invalid year');
  testValidate('dd-mm-yyyy', '11-11-yyyy', 'invalid year');
  testValidate('mm-dd-yyyy', '11-11-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '11-11-tasa', 'invalid year');
  testValidate('mm-dd-yyyy', '11-11-yyyy', 'invalid year');
}

function invalidMonthTestCases() {
  testValidate('yyyy-mm-dd', '0001-00-01', 'invalid month');
  testValidate('yyyy-mm-dd', '0001-13-01', 'invalid month');
  testValidate('yyyy-mm-dd', '0001-1a-01', 'invalid month');
  testValidate('yyyy-mm-dd', '0001-aa-01', 'invalid month');
  testValidate('mm-dd-yyyy', '00-01-0001', 'invalid month');
  testValidate('mm-dd-yyyy', '13-01-0001', 'invalid month');
  testValidate('mm-dd-yyyy', '1a-01-0001', 'invalid month');
  testValidate('mm-dd-yyyy', 'aa-01-0001', 'invalid month');
  testValidate('dd-mm-yyyy', '01-00-0001', 'invalid month');
  testValidate('dd-mm-yyyy', '01-13-0001', 'invalid month');
  testValidate('dd-mm-yyyy', '01-1a-0001', 'invalid month');
  testValidate('dd-mm-yyyy', '01-aa-0001', 'invalid month');
}
function invalidDayTestCases() {
  testValidate('dd-mm-yyyy', '29-02-2023', 'invalid day');
  testValidate('dd-mm-yyyy', '30-02-2023', 'invalid day');
  testValidate('dd-mm-yyyy', '32-09-2023', 'invalid day');
  testValidate('dd-mm-yyyy', '31-04-2023', 'invalid day');
  testValidate('dd-mm-yyyy', '31-11-2023', 'invalid day');

  testValidate('mm-dd-yyyy', '02-29-2023', 'invalid day');
  testValidate('mm-dd-yyyy', '02-30-2023', 'invalid day');
  testValidate('mm-dd-yyyy', '09-32-2023', 'invalid day');
  testValidate('mm-dd-yyyy', '04-31-2023', 'invalid day');
  testValidate('mm-dd-yyyy', '11-31-2023', 'invalid day');

  testValidate('yyyy-mm-dd', '2023-02-29', 'invalid day');
  testValidate('yyyy-mm-dd', '2023-02-30', 'invalid day');
  testValidate('yyyy-mm-dd', '2023-09-32', 'invalid day');
  testValidate('yyyy-mm-dd', '2023-04-31', 'invalid day');
  testValidate('yyyy-mm-dd', '2023-11-31', 'invalid day');
}

function validTestCases() {
  testValidate('yyyy-mm-dd', '2023-11-30', 'valid');
  testValidate('yyyy-mm-dd', '2023-12-31', 'valid');
  testValidate('yyyy-mm-dd', '2024-02-29', 'valid');
  testValidate('yyyy-mm-dd', '1900-02-28', 'valid');
  testValidate('yyyy-mm-dd', '1900-02-28', 'valid');
  testValidate('yyyy-mm-dd', '0001-01-01', 'valid');

  testValidate('dd-mm-yyyy', '30-11-2023', 'valid');
  testValidate('dd-mm-yyyy', '31-12-2023', 'valid');
  testValidate('dd-mm-yyyy', '29-02-2024', 'valid');
  testValidate('dd-mm-yyyy', '28-02-1900', 'valid');
  testValidate('dd-mm-yyyy', '28-02-1900', 'valid');
  testValidate('dd-mm-yyyy', '01-01-0001', 'valid');

  testValidate('mm-dd-yyyy', '11-30-2023', 'valid');
  testValidate('mm-dd-yyyy', '12-31-2023', 'valid');
  testValidate('mm-dd-yyyy', '02-29-2024', 'valid');
  testValidate('mm-dd-yyyy', '02-28-1900', 'valid');
  testValidate('mm-dd-yyyy', '02-28-1900', 'valid');
  testValidate('mm-dd-yyyy', '01-01-0001', 'valid');
}

function testAll() {
  invalidFormatTestCases();
  invalidDateFormatTestCases();
  invalidYearTestCases();
  invalidMonthTestCases();
  invalidDayTestCases();
  validTestCases();
}

testAll();