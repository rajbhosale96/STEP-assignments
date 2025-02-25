// Given an array of numbers return a new array containing only odd elements of
// the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.

function isOdd(number) {
  return number % 2 !== 0;
}

function selectOdds(numbers) {
  const arrayOfOddNumbers = [];

  for (let index = 0; index < numbers.length; index++) {
    if (isOdd(numbers[index])) {
      arrayOfOddNumbers[arrayOfOddNumbers.length] = numbers[index];
    }
  }

  return arrayOfOddNumbers;
}

function createMSG(mark, array, expected, actual) {
  const segment = " Odd elements of array : [" + array + "]";
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
  const actual = selectOdds(array);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, array, expected, actual));
}

function testCases() {
  testMapLengths([1], [1]);
  testMapLengths([1, 2], [1]);
  testMapLengths([1, 2, 3, 4], [1, 3]);
  testMapLengths([2, 4, 6, 8], []);
  testMapLengths([1, 3, 5], [1, 3, 5]);
  testMapLengths([], []);
}

testCases();
