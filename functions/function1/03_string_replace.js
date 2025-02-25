/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.
  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''
  **Your function must return a value**
  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function getCharToAdd(character, match, replacement) {
  return character === match ? replacement : character;
}

function replace(text, match, replacement) {
  let string = '';

  for (let index = 0; index < text.length; index++) {
    const charToAdd = getCharToAdd(text[index], match, replacement);
    string = string + charToAdd;
  }

  return string;
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function createMessage(isPassed, replacement, text, actual, expected) {
  const context = isPassed + ' Text : "' + text;
  const replaceWith = '"| Replace with : "' + replacement;
  const expectation = '"| Expected : "' + expected;
  const actualOutput = '"| Actual : "' + actual + '"';

  return context + replaceWith + expectation + actualOutput;
}

function testReplace(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  const mark = getMark(actual, expected);

  console.log(createMessage(mark, replacement, text, actual, expected));
}

function testCases() {
  testReplace('a', 'a', 'b', 'b');
  testReplace('ab', 'a', 'b', 'bb');
  testReplace('aa', 'a', 'b', 'bb');
  testReplace('bb', 'a', 'b', 'bb');
  testReplace('a b', ' ', '_', 'a_b');
  testReplace('a_b', '_', ' ', 'a b');
  testReplace('a b', '', 'c', 'a b');
  testReplace('a b', ' ', '', 'ab');
  testReplace('a b', '', ' ', 'a b');
}

testCases();
