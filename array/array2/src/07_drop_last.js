// Remove last n elements from the array
// dropLast([1, 2, 3], 1) => [1, 2]
// dropLast([1, 2, 3], 4) => []
// Do not modify the original array

function dropLast(array, noOfElements) {
  const newArray = [];

  for (let index = 0; index < array.length - noOfElements; index++) {
    newArray.push(array[index]);
  }

  return newArray;
}

function createMSG(mark, array, noOfElements, expected, actual) {
  const segment = "Remove first '" + noOfElements + "' elements from [" + array;
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

function testLastDrop(array, noOfElements, expected) {
  const actual = dropLast(array, noOfElements);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, array, noOfElements, expected, actual));
}

function testCases() {
  testLastDrop([1, 2, 3], 1, [1, 2]);
  testLastDrop([1, 2, 3], 4, []);
  testLastDrop([], 1, []);
  testLastDrop([1, 2, 3], 2, [1]);
}

// testCases();
