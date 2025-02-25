function slice(string, startIndex, endIndex) {
  let sliceString = '';

  for (let index = startIndex; index < endIndex; index++) {
    sliceString += string[index];
  }

  return sliceString;
}

function convertStringToNumber(string) {
  if (string === '') {
    return 0;
  }

  const number = string[0] * (10 ** (string.length - 1));

  return number + convertStringToNumber(slice(string, 1, string.length));
}

function stringToNumber(string) {
  if (string[0] === '-') {
    return -convertStringToNumber(slice(string, 1, string.length));
  }

  return convertStringToNumber(string);
}

function createMSG(mark, string, expected, actual) {
  const segment = ' String : "' + string + '"  into : "';
  const expectation = expected + '".\n';
  const actualOutput = ' Calculated : ' + actual;

  return mark + segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testStringToNumber(string, expected) {
  const actual = stringToNumber(string);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, string, expected, actual));
}

function testCases() {
  testStringToNumber('1', 1);
  testStringToNumber('0', 0);
  testStringToNumber('-1', -1);
  testStringToNumber('-100', -100);
  testStringToNumber('', 0);
  testStringToNumber(' ', 0);
  testStringToNumber('660', 660);
}

testCases();
