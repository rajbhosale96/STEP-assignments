function getCharFirstOccurrence(string, char, startIndex) {
  if (startIndex > string.length) {
    return -1;
  }

  if (string[startIndex] === char) {
    return startIndex;
  }

  return getCharFirstOccurrence(string, char, startIndex + 1);
}

function findIndex(string, char) {
  return getCharFirstOccurrence(string, char, 0);
}

function createMSG(mark, string, char, expected, actual) {
  const segment = ' Index of "' + char + '" in "' + string + '" is : ';
  const expectation = expected + '.\n';
  const actualOutput = ' Calculated : ' + actual;

  return mark + segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFindIndex(string, char, expected) {
  const actual = findIndex(string, char);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, string, char, expected, actual));
}

function testCases() {
  testFindIndex('a', 'a', 0);
  testFindIndex('ab', 'b', 1);
  testFindIndex('abccc', 'c', 2);
  testFindIndex('abc', 'd', -1);
  testFindIndex(' ', ' ', 0);
  testFindIndex('', '', -1);
}

testCases();
