function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function min(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

function getSlice(text, start, end) {
  if (start > end) {
    return '';
  }

  return text[start] + getSlice(text, start + 1, end);
}

function slice(text, start, end) {
  const startIndex = max(start, 0);
  const endIndex = min(end, text.length - 1);

  return getSlice(text, startIndex, endIndex);
}

function createMSG(mark, string, start, end, expected, actual) {
  const segment = 'Slice :"' + string + '" from index "' + start + ' to ' + end;
  const expectation = '"  Expected :"' + expected;
  const actualOutput = '". Calculated : ' + actual;

  return mark + segment + expectation + actualOutput;
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testSlice(string, start, end, expected) {
  const actual = slice(string, start, end);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, string, start, end, expected, actual));
}

function testCases() {
  testSlice('hello', 1, 3, 'ell');
  testSlice('hello', 0, 4, 'hello');
  testSlice('hello ', 5, 5, ' ');
  testSlice('hello', 1, 1, 'e');
  testSlice('hello', -10, 1, 'he');
  testSlice('hello', 1, 10, 'ello');
}

testCases();
