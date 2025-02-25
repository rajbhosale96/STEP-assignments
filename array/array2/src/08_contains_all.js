// Return true if all elements are present in the array regardless of their
// order.
// Otherwise, return false.
// containsAll([1, 2, 3], [2, 1]) => true
// containsAll([1, 2, 3], [2, 1, 4]) => false

function isElementPresent(element, array) {
  for (let index = 0; index < array.length; index++) {
    if (element === array[index]) {
      return true;
    }
  }

  return false;
}

function containsAll(array, elements) {
  for (let index = 0; index < elements.length; index++) {
    if (!isElementPresent(elements[index], array)) {
      return false;
    }
  }

  return true;
}

function createMSG(mark, array, elements, expected, actual) {
  const segment = "Are elements [" + elements + "] present in [" + array;
  const expectation = "]\n Expected : " + expected;
  const actualOutput = " |Result : " + actual;

  return mark + segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testContainsAll(array, elements, expected) {
  const actual = containsAll(array, elements);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, array, elements, expected, actual));
}

function testCases() {
  testContainsAll([1, 2, 3], [2, 3, 4], false);
  testContainsAll([1, 2, 3], [1, 2, 3], true);
  testContainsAll([1, 2, 4], [4, 2, 1], true);
  testContainsAll([1, 2, 4], [1, 2], true);
  testContainsAll([1, 2, 4], [], false);
}

// testCases();
