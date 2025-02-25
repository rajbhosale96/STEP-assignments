// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]

function isElementPresent(element, array) {
  for (let index = 0; index < array.length; index++) {
    if (element === array[index]) {
      return true;
    }
  }
  return false;
}

function difference(array1, array2) {
  const elementsNotInArray2 = [];

  for (let index = 0; index < array1.length; index++) {
    if (!isElementPresent(array1[index], array2)) {
      elementsNotInArray2.push(array1[index]);
    }
  }

  return elementsNotInArray2;
}

function createMSG(mark, array1, array2, expected, actual) {
  const segment = "Element not present in [" + array2 + "] of [" + array1;
  const expectation = "]\n Expected : " + expected;
  const actualOutput = " |Result : " + actual;

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

function testDifference(array1, array2, expected) {
  const actual = difference(array1, array2);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, array1, array2, expected, actual));
}

function testCases() {
  testDifference([1, 2, 3], [2, 3, 4], [1]);
  testDifference([1, 2, 3], [1, 2, 3], []);
  testDifference([1, 2, 3], [4, 5, 6], [1, 2, 3]);
}

// testCases();
