// Given an array of numbers true if numbers are in strictly descending order
// otherwise false.
// isStrictlyDescending([5, 4, 2, 1]) => true
// isStrictlyDescending([5, 4, 6, 1]) => false
// isStrictlyDescending([5, 4, 4, 1]) => false

export function isStrictlyDescending(numbers) {
  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] <= numbers[index + 1]) {
      return false;
    }
  }

  return true;
}

function createMSG(mark, array, expected, actual) {
  const segment = " Is Array: [" + array + "] in Descending?";
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

function testIsStrictlyDescending(array, expected) {
  const actual = isStrictlyDescending(array);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, array, expected, actual));
}

function testCases() {
  testIsStrictlyDescending([1], true);
  testIsStrictlyDescending([2, 1], true);
  testIsStrictlyDescending([16, 5, 4, 3, 1], true);
  testIsStrictlyDescending([], true);

  testIsStrictlyDescending([5, 4, 6, 1], false);
  testIsStrictlyDescending([5, 4, 4, 1], false);
  testIsStrictlyDescending(["a", "a"], false);
  testIsStrictlyDescending(["a", "b"], false);
}

// testCases();
