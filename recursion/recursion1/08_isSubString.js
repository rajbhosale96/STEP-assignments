function slice(string, startIndex, endIndex) {
  let slicedSting = '';

  for (let index = startIndex; index < endIndex; index++) {
    slicedSting += string[index];
  }

  return slicedSting;
}

function isSubStringPresent(string, otherString) {
  for (let index = 0; index < otherString.length; index++) {
    if (string[index] !== otherString[index]) {
      return false;
    }
  }

  return true;
}

function isSubString(string, otherString) {
  if (otherString === '' || string === '') {
    return false;
  }

  if (isSubStringPresent(string, otherString)) {
    return true;
  }

  return isSubString(slice(string, 1, string.length), otherString);
}

function createMSG(mark, string, otherString, expected, actual) {
  const segment = ' Is "' + otherString + '" present in "' + string;
  const expectation = '" : ' + expected + '.\n';
  const actualOutput = ' Calculated : ' + actual;

  return mark + segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testIsSubString(string, otherString, expected) {
  const actual = isSubString(string, otherString);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, otherString, string, expected, actual));
}

function testCases() {
  testIsSubString('a', 'a', true);
  testIsSubString('ab', 'ab', true);
  testIsSubString('ab', 'b', true);
  testIsSubString('abc', 'c', true);
  testIsSubString('abc', '', false);
  testIsSubString('abc', 'd', false);
  testIsSubString('abc', 'abct', false);
  testIsSubString('abca', 'ad', false);
  testIsSubString('', '', false);
  testIsSubString('', '12', false);
}

testCases();
