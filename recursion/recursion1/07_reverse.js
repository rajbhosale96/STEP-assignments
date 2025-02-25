function getReversedString(string, start, end) {
  if (start === end) {
    return string[start];
  }

  return string[start] + getReversedString(string, start - 1, end);
}

function reverse(string) {
  if (string === '') {
    return '';
  }

  return getReversedString(string, string.length - 1, 0);
}

function createMSG(mark, string, expected, actual) {
  const segment = ' Reverse of "' + string + '" : ';
  const expectation = expected + '.\n';
  const actualOutput = ' Calculated : ' + actual;

  return mark + segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testReverse(string, expected) {
  const actual = reverse(string);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, string, expected, actual));
}

function testCases() {
  testReverse('a', 'a');
  testReverse('ab', 'ba');
  testReverse('abc', 'cba');
  testReverse(' ', ' ');
  testReverse('', '');
}

testCases();
