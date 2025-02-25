/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function getSlice(string, subString, index) {
  const endOfSubString = index + subString.length;
  let subStringCandidate = '';

  for (let subIndex = index; subIndex < endOfSubString; subIndex++) {
    subStringCandidate += string[subIndex];
  }

  return subStringCandidate;
}

function isSubStringFound(slice, subString) {
  return slice === subString;
}

function occurrences(string, subString) {
  let subStringCount = 0;

  for (let index = 0; index < string.length; index++) {
    const slice = getSlice(string, subString, index);

    if (isSubStringFound(slice, subString)) {
      subStringCount++;
    }
  }

  return subStringCount;
}

function createMessage(isPassed, text, target, actual, expected) {
  const context = isPassed + '| Text : "' + text;
  const toFind = '"| Find : "' + target;
  const expectation = '"| Expected : "' + expected;
  const actualOutput = '"| Actual : "' + actual + '"|';

  return context + toFind + expectation + actualOutput;
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testOccurrences(string, subString, expected) {
  const actual = occurrences(string, subString);
  const mark = getMark(actual, expected);

  console.log(createMessage(mark, string, subString, actual, expected));
}

function testCases() {
  testOccurrences('a', 'a', 1);
  testOccurrences('a', 'b', 0);
  testOccurrences('ab', 'b', 1);
  testOccurrences('abb', 'b', 2);
  testOccurrences('abcbc', 'abc', 1);
  testOccurrences('', ' ', 0);
  testOccurrences('', '', 0);
  testOccurrences('abc', 'abc', 1);
  testOccurrences('abcabc', 'abc', 2);
}

testCases();
