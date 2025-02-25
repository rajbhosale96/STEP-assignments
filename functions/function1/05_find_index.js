/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 
  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1
  **Your function must return a value**
  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function findIndex(text, target) {
  for (let index = 0; index < text.length; index++) {
    if (text[index] === target) {
      return index;
    }
  }

  return -1;
}

function createMessage(isPassed, text, target, actual, expected) {
  const context = isPassed + ' Text : "' + text;
  const toFind = '" Find : ' + target;
  const expectation = '"| Expected : "' + expected;
  const actualOutput = '"| Actual : "' + actual + '"';

  return context + toFind + expectation + actualOutput;
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFindIndex(text, target, expected) {
  const actual = findIndex(text, target);
  const mark = getMark(actual, expected);

  console.log(createMessage(mark, text, target, actual, expected));
}

function testCases() {
  testFindIndex('a', 'a', 0);
  testFindIndex('a', 'b', -1);
  testFindIndex('ab', 'b', 1);
  testFindIndex('', '', -1);
  testFindIndex('ab c', ' ', 2);
  testFindIndex(' ', ' ', 0);
  testFindIndex('aba', 'a', 0);
}

testCases();
