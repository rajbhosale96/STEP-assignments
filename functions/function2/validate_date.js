const HYPHEN = '-';
const DMY = 'dd-mm-yyyy';
const MDY = 'mm-dd-yyyy';
const YMD = "yyyy-mm-dd";
const invalidYear = 'invalid year';
const invalidMonth = 'invalid month';
const invalidDay = 'invalid day';
const valid = 'valid';

function isDivisibleBy(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisibleBy(year, 400)) {
    return true;
  }

  return !isDivisibleBy(year, 100) && isDivisibleBy(year, 4);
}

function isHyphenInRightPosition(date, format) {
  if (format === DMY || format === MDY) {
    return date[2] === HYPHEN && date[5] === HYPHEN;
  }

  return date[4] === HYPHEN && date[7] === HYPHEN;
}

function isDateFormatValid(date, format) {
  if (date.length !== 10) {
    return false;
  }
  let hyphenNSpaces = 0;

  for (let index = 0; index < date.length; index++) {
    if (date[index] === HYPHEN || date[index] === ' ') {
      hyphenNSpaces++;
    }
  }

  return isHyphenInRightPosition(date, format) && hyphenNSpaces === 2;
}

function slice(string, startIndex, endIndex) {
  let slicedString = '';

  for (let index = startIndex; index <= endIndex; index++) {
    slicedString += string[index];
  }
  return +slicedString;
}

function isFormatValid(format) {
  let isvalid = format === DMY || format === MDY;
  return isvalid || format === YMD;
}

function isInRange(startRange, endRange, number) {
  return number >= startRange && number <= endRange;
}

function isDayValid(day, month, year) {
  if (day < 1 || day > 31) {
    return false;
  }
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return isInRange(1, 30, day);
  }
  if (month === 2) {
    return isLeapYear(year) ? isInRange(1, 29, day) : isInRange(1, 28, day);
  }

  return isInRange(1, 31, day);
}

function validateDate(day, month, year) {
  if (!isInRange(1, 9999, year)) {
    return invalidYear;
  }
  if (!isInRange(1, 12, month)) {
    return invalidMonth;
  }
  if (!isDayValid(day, month, year)) {
    return invalidDay;
  }

  return valid;
}

function validateDateForDMY(date) {
  const day = slice(date, 0, 1);
  const month = slice(date, 3, 4);
  const year = slice(date, 6, 9);

  return validateDate(day, month, year);
}

function validateDateForMDY(date) {
  const day = slice(date, 3, 4);
  const month = slice(date, 0, 1);
  const year = slice(date, 6, 9);

  return validateDate(day, month, year);
}

function validateDateForYMD(date) {
  const day = slice(date, 8, 9);
  const month = slice(date, 5, 6);
  const year = slice(date, 0, 3);

  return validateDate(day, month, year);
}

function isDateValid(date, format) {
  if(format === DMY) {
    return validateDateForDMY(date);
  }
  if(format === MDY) {
    return validateDateForMDY(date);
  }

  return validateDateForYMD(date);
}

function validate(format, date) {
  if (!isFormatValid(format)) {
    return 'invalid format';
  }
  if (!isDateFormatValid(date, format)) {
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
  testValidate('dd-mm-yyyy', '11- 1-1111', 'date not according to format');
  testValidate('dd-mm-yyyy', '1-11-1111', 'date not according to format');
  testValidate('yyyy-mm-dd', '1111-11-1', 'date not according to format');
  testValidate('yyyy-mm-dd', '1111-1-11', 'date not according to format');
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
