// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual() => true
// do not modify input parameters

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

function createMSG(mark, array1, array2, expected, actual) {
  const segment = " Is array1 [" + array1 + "] equals to array2 [" + array2;
  const expectation = "] \n Expected : " + expected;
  const actualOutput = " |Result : " + actual;

  return mark + segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testAreEqual(array1, array2, expected) {
  const actual = areEqual(array1, array2);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, array1, array2, expected, actual));
}

function testCases() {
  testAreEqual([1], [1], true);
  testAreEqual([], [], true);
  testAreEqual(["a"], ["a"], true);
  testAreEqual([""], [""], true);

  testAreEqual([1], [2], false);
  testAreEqual([1, 2], [1], false);
  testAreEqual(["b"], ["a"], false);
  testAreEqual([""], [" "], false);
  testAreEqual([1], ["1"], false);
}

testCases();
