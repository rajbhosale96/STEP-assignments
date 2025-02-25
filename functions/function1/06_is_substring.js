/*
  Implement the below function that tells if a string is substring of 
  another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function getSlice(string, subString, index) {
  const lastIndex = index + subString.length;
  let subStringCandidate = '';

  for (let subIndex = index; subIndex < lastIndex; subIndex++) {
    subStringCandidate += string[subIndex];
  }

  return subStringCandidate;
}

function isSubStringFound(slice, subString) {
  return slice === subString;
}

function isSubstring(string, subString) {
  if(subString === '') {
    return false;
  }
  
  for (let index = 0; index < string.length; index++) {
    const slice = getSlice(string, subString, index);

    if (isSubStringFound(slice, subString)) {
      return true;
    }
  }

  return false;
}

function createMessage(isPassed, text, target, actual, expected) {
  const context = isPassed + '| Text : "' + text;
  const find = '"| Find : "' + target;
  const expectation = '"| Expected : "' + expected;
  const actualOutput = '"| Actual : "' + actual + '"';

  return context + find + expectation + actualOutput;
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testIsSubstring(string, subString, expected) {
  const actual = isSubstring(string, subString);
  const mark = getMark(actual, expected);

  console.log(createMessage(mark, string, subString, actual, expected));
}

function testCases() {
  testIsSubstring('a', 'a', true);
  testIsSubstring('a', 'b', false);
  testIsSubstring('ab', 'b', true);
  testIsSubstring('abc', 'bc', true);
  testIsSubstring('ab c', ' ', true);
  testIsSubstring('', ' ', false);
  testIsSubstring('', '', false);
  testIsSubstring('abc', 'abc', true);
  testIsSubstring('abc', '', false);
}

testCases();
