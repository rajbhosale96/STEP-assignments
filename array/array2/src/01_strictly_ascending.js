// Given an array of numbers true if numbers are in strictly ascending order
// otherwise false.
// isStrictlyAscending([1, 3, 4, 5, 16]) => true
// isStrictlyAscending([1, 3, 2, 4]) => false
// isStrictlyAscending([1, 3, 3, 4]) => false

export function isStrictlyAscending(numbers) {
  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] >= numbers[index + 1]) {
      return false;
    }
  }

  return true;
}

function createMSG(mark, array, expected, actual) {
  const segment = " Is Array: [" + array + "] in Ascending?";
  const expectation = "\n Expected : " + expected;
  const actualOutput = " |Result : " + actual;

  return mark + segment + expectation + actualOutput + "\n";
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
  return areEqual(actual, expected) ? "✅" : "❌";
}

function testIsStrictlyAscending(array, expected) {
  const actual = isStrictlyAscending(array);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, array, expected, actual));
}

function testCases() {
  testIsStrictlyAscending([1, 2], true);
  testIsStrictlyAscending([1], true);
  testIsStrictlyAscending([1, 3, 4, 5, 16], true);
  testIsStrictlyAscending([], true);

  testIsStrictlyAscending([1, 3, 2, 4], false);
  testIsStrictlyAscending([1, 3, 3, 4], false);
  testIsStrictlyAscending(["a", "a"], false);
  testIsStrictlyAscending(["a", "b"], false);
}

// testCases();
