// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers which are below threshold.
// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
// do not modify input parameters

function filterBelow(array, threshold) {
  const filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
      filteredArray[filteredArray.length] = array[index];
    }
  }

  return filteredArray;
}

function createMSG(mark, array, threshold, expected, actual) {
  const segment = " Array having  : [" + array + "] below " + threshold;
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

function testFilterBelow(array, threshold, expected) {
  const actual = filterBelow(array, threshold);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, array, threshold, expected, actual));
}

function testCases() {
  testFilterBelow([1, 2], 2, [1]);
  testFilterBelow([1, 2], 1, []);
  testFilterBelow([1, 5, 3, 2], 3, [1, 2]);
  testFilterBelow([6, 2, 3, 1, 4, 7], 4, [2, 3, 1]);
  testFilterBelow([1, 2, 3], 4, [1, 2, 3]);

}
