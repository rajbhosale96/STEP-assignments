// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
// do not modify input parameters

function mapLengths(words) {
  const mapLengthsOfWords = [];

  for (let index = 0; index < words.length; index++) {
    mapLengthsOfWords[index] = words[index].length;
  }

  return mapLengthsOfWords;
}

function createMSG(mark, array, expected, actual) {
  const segment = " Map Lengths of : [" + array + "]";
  const expectation = "\n Expected : " + expected;
  const actualOutput = " | Result : " + actual;

  return mark + segment + expectation + actualOutput + '\n';
}

function isEqual(char1, char2) {
  return char1 === char2;
}

function areElementsEqual(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    if (!isEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return areElementsEqual(array1, array2);
}

function getMark(actual, expected) {
  return areEqual(actual, expected) ? '✅' : '❌';
}

function testMapLengths(array, expected) {
  const actual = mapLengths(array);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, array, expected, actual));
}

function testCases() {
  testMapLengths(["a"], [1]);
  testMapLengths(["a", "ab"], [1, 2]);
  testMapLengths(["a", ""], [1, 0]);
  testMapLengths(["a", " "], [1, 1]);
  testMapLengths(["a", " "], [1, 1]);
}

testCases();
