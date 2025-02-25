function slice(text, start) {
  let slicedString = '';

  for (let index = start; index < text.length; index++) {
    slicedString += text[index];
  }

  return slicedString;
}

function replaceChar(char, target, replacement) {
  if (char === target) {
    return replacement
  }
  return char;
}

function replace(text, target, replacement) {
  if (text.length === 0) {
    return '';
  }

  const getChar = replaceChar(text[0], target, replacement);
  const newText = slice(text, 1);

  return getChar + replace(newText, target, replacement);
}

function createMSG(mark, text, target, replacement, expected, actual) {
  const segment = 'Replace :"' + text + '" with "' + replacement + '"';
  const segmentTwo = segment + ' where "' + target + '"  is present ';
  const expectation = '"  Expected :"' + expected;
  const actualOutput = '". Calculated : ' + actual;

  return mark + segmentTwo + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testReplace(text, target, replacement, expected) {
  const actual = replace(text, target, replacement);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, text, target, replacement, expected, actual));
}

function testCases() {
  testReplace('quilt', 'q', 'b', 'built');
  testReplace('quality', 'q', 'd', 'duality');
  testReplace('hello ', '', 'j', 'hello ');
  testReplace(' ', 'k', 'l', ' ');
}

testCases();
