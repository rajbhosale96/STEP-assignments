function getCharLastOccurrence(string, char, endIndex) {
  if (endIndex < 0) {
    return -1;
  }

  if (string[endIndex] === char) {
    return endIndex;
  }

  return getCharLastOccurrence(string, char, endIndex - 1);
}

function findLastIndex(string, char) {
  return getCharLastOccurrence(string, char, string.length - 1);
}

function createMSG(mark, string, char, expected, actual) {
  const segment = ' Last Index of "' + char + '" in "' + string + '" is : ';
  const expectation = expected + '.\n';
  const actualOutput = ' Calculated : ' + actual;

  return mark + segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFindLastIndex(string, char, expected) {
  const actual = findLastIndex(string, char);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, string, char, expected, actual));
}

function testCases() {
  testFindLastIndex('a', 'a', 0);
  testFindLastIndex('aba', 'a', 2);
  testFindLastIndex('abccc', 'c', 4);
  testFindLastIndex('abc', 'd', -1);
  testFindLastIndex('a b ', ' ', 3);
  testFindLastIndex('', '', -1);
  testFindLastIndex('abc', '', -1);
  testFindLastIndex('', 'a', -1);
}

testCases();
