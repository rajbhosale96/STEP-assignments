// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers above the threshold.
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
// do not modify input parameters

function filterAbove(array, threshold) {
  const filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      filteredArray[filteredArray.length] = array[index];
    }
  }

  return filteredArray;
}

function createMSG(mark, array, threshold, expected, actual) {
  const segment = " Array having  : [" + array + "] above " + threshold;
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

function testFilterAbove(array, threshold, expected) {
  const actual = filterAbove(array, threshold);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, array, threshold, expected, actual));
}

function testCases() {
  testFilterAbove([1, 2], 1, [2]);
  testFilterAbove([1, 2], 2, []);
  testFilterAbove([1, 5, 3, 2], 2, [5, 3]);
  testFilterAbove([6, 2, 3, 1, 4, 7], 3, [6, 4, 7]);
  testFilterAbove([1, 2, 3], 4, []);
}

testCases();
