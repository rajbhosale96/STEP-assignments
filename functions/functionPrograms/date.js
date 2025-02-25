const HYPHEN = '-';
const DMY = 'dd-mm-yyyy';
const MDY = 'mm-dd-yyyy';
const YMD = 'yyyy-mm-dd';
const invalidFormat = 'invalid format';
const dateNotAccording = 'date not according to format';
const invalidYear = 'invalid year';
const invalidMonth = 'invalid month';
const invalidDay = 'invalid day';
const valid = 'valid';

function isFormatValid(format) {
  return format === DMY || format === MDY || format === YMD;
}

function isHyphen(char) {
  return char === HYPHEN;
}

function isDigit(char) {
  return char >= 0 && char <= 9;
}
function isDateNotAccordingToFormat(format, date) {
  if (format.length !== date.length) {
    return false;
  }
  const isHyphenNotInDate = isHyphen(format[index]) && !isHyphen(date[index]);
  const isDigitNotInDate = !isHyphen(format[index]) && !isDigit(date[index]);

  if (isHyphenNotInDate || isDigitNotInDate) {
    return false;
  }

  return true;
}
function slice(start, end, date) {

}

function getStandardizedFormat(format, date) {
  if (format === YMD) {
    return date;
  }

}

function validate(format, date) {
  if (!isFormatValid(format)) {
    return invalidFormat;
  }
  if (!isDateNotAccordingToFormat(format, date)) {
    return dateNotAccording;
  }
  getStandardizedFormat(format, date);
  return valid;
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function invalidFormatTestCases() {
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('xx yy zzzz', '01-01-2020', 'invalid format');
  testValidate('xx/yy/zzzz', '01-01-2020', 'invalid format');
  testValidate('xxxx-yy-zz', '2020-01-01', 'invalid format');
  testValidate('xxx-yy-zz', '2020-01-01', 'invalid format');
  testValidate('xxxx yy zz', '2020-01-01', 'invalid format');
}

function invalidDateFormatTestCases() {
  testValidate('dd-mm-yyyy', '11-11-111', 'date not according to format');
  testValidate('dd-mm-yyyy', '1111-11-11', 'date not according to format');
  testValidate('dd-mm-yyyy', '11-1-1111', 'date not according to format');
  testValidate('dd-mm-yyyy', ' 1-11-1111', 'date not according to format');
  testValidate('yyyy-mm-dd', '1111-11-1', 'date not according to format');
  testValidate('yyyy-mm-dd', '1111-1-11', 'date not according to format');
  testValidate('yyyy-mm-dd', '11111-1-11', 'date not according to format');
  testValidate('yyyy-mm-dd', '11-11-1111', 'date not according to format');
  testValidate('yyyy-mm-dd', '11- 1-1111', 'date not according to format');
  testValidate('dd-mm-yyyy', '01-1a-0001', 'date not according to format');
  testValidate('yyyy-mm-dd', '0001-1a-01', 'date not according to format');
  testValidate('mm-dd-yyyy', '1a-01-0001', 'date not according to format');
  testValidate('mm-dd-yyyy', '11-11-yyyy', 'date not according to format');
  testValidate('yyyy-mm-dd', 'yyyy-11-11', 'date not according to format');
  testValidate('dd-mm-yyyy', '11-11-yyyy', 'date not according to format');
}

function invalidYearTestCases() {
  testValidate('yyyy-mm-dd', '0000-11-11', 'invalid year');
  testValidate('dd-mm-yyyy', '11-11-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '11-11-0000', 'invalid year');
}

function invalidMonthTestCases() {
  testValidate('yyyy-mm-dd', '0001-00-01', 'invalid month');
  testValidate('yyyy-mm-dd', '0001-13-01', 'invalid month');
  testValidate('mm-dd-yyyy', '00-01-0001', 'invalid month');
  testValidate('mm-dd-yyyy', '13-01-0001', 'invalid month');
  testValidate('dd-mm-yyyy', '01-00-0001', 'invalid month');
  testValidate('dd-mm-yyyy', '01-13-0001', 'invalid month');
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
  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
  testValidate('mm-dd-yyyy', '01-01-2020', 'valid');
  testValidate('yyyy-mm-dd', '2020-01-01', 'valid');
  testValidate('yyyy-mm-dd', '2020-02-29', 'valid');
  testValidate('dd-mm-yyyy', '29-02-2020', 'valid');
  testValidate('mm-dd-yyyy', '02-29-2020', 'valid');
}

function testAll() {
  invalidFormatTestCases();
  invalidDateFormatTestCases();
  // invalidYearTestCases();
  // invalidMonthTestCases();
  // invalidDayTestCases();
  validTestCases();
}

testAll();