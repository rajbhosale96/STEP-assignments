/*
  Write a function that tells if a string ends with a specific substring
  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false
  **Your function must return a value**
  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isStringEndsWith(string, substring, index, subIndex) {

  while (subIndex >= 0 && (string[index] === substring[subIndex])) {
    subIndex--;
    index--;
  }

  return subIndex < 0;
}

function endsWith(string, substring) {
  const index = string.length - 1;
  const subIndex = substring.length - 1;

  return isStringEndsWith(string, substring, index, subIndex);
}

function createMessage(isPassed, text, target, actual, expected) {
  const context = isPassed + '| Text : "' + text;
  const toFind = '"| Find : "' + target;
  const expectation = '"| Expected : "' + expected;
  const actualOutput = '"| Actual : "' + actual + '"';

  return context + toFind + expectation + actualOutput;
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testEndsWith(string, subString, expected) {
  const actual = endsWith(string, subString);
  const mark = getMark(actual, expected);

  console.log(createMessage(mark, string, subString, actual, expected));
}

function testCases() {
  testEndsWith('abc', 'c', true);
  testEndsWith('abc', 'x', false);
  testEndsWith('abc', 'ab', false);
  testEndsWith('', '', true);
  testEndsWith('abd', '', true);
}

testCases();
