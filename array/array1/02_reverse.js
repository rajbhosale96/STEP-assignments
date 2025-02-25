// Given an array return reverse of array.
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters

function reverse(array) {
  const reversedArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray[reversedArray.length] = array[index];
  }

  return reversedArray;
}

function createMSG(mark, array, expected, actual) {
  const segment = " Reverse of array : [" + array + "]";
  const expectation = "\n Expected : " + expected;
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

function testReverse(array, expected) {
  const actual = reverse(array);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, array, expected, actual));
}

function testCases() {
  testReverse([1], [1]);
  testReverse([1, 2], [2, 1]);
  testReverse([], []);
  testReverse(["a"], ["a"]);
  testReverse(["a", "b"], ["b", "a"]);
}

testCases();
