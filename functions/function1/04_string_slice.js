/*
  Implement the below function that
  creates a slice/substring using start and end indices
  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''
  **Your function must return a value**
  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function getStartIndex(start) {
  return start < 0 ? 0 : start;
}

function getEndIndex(end, textLength) {
  return end >= textLength ? textLength - 1 : end;
}

function slice(text, start, end) {
  const startFrom = getStartIndex(start);
  const endsWith = getEndIndex(end, text.length);

  let subString = '';

  for (let index = startFrom; index <= endsWith; index++) {
    subString += text[index];
  }

  return subString;
}

function createMessage(isPassed, text, from, to, actual, expected) {
  const context = isPassed + ' Text : "' + text;
  const fromTo = '"| Start : " ' + from + ' -> ' + to;
  const expectation = '"| Expected : "' + expected;
  const actualOutput = '"| Actual : "' + actual + '"';

  return context + fromTo + expectation + actualOutput;
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testSlice(text, start, end, expected) {
  const actual = slice(text, start, end);
  const mark = getMark(actual, expected);

  console.log(createMessage(mark, text, start, end, actual, expected));
}

function testCases() {
  testSlice('a', 0, 0, 'a');
  testSlice('a', 2, 3, '');
  testSlice('ab', -1, 0, 'a');
  testSlice('ab', -1, 2, 'ab');
  testSlice('ab', -1, 3, 'ab');
  testSlice('ab ', -1, 3, 'ab ');
  testSlice('', 0, 5, '');
}

testCases();
