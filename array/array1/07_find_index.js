// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters
function isEqual(char1, char2) {
  return char1 === char2;
}

function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (isEqual(array[index], element)) {
      return index;
    }
  }

  return -1;
}

function createMSG(mark, array, element, expected, actual) {
  const segment = " Index of : " + element + " from array : " + array;
  const expectation = "\n Expected : " + expected;
  const actualOutput = " | Result : " + actual;

  return mark + segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFindIndex(array, element, expected) {
  const actual = findIndex(array, element);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, array, element, expected, actual));
}

function testCases() {
  testFindIndex([1, 2], 2, 1);
  testFindIndex([1, 2], 1, 0);
  testFindIndex([1, 2], 3, -1);
  testFindIndex([1, 2, 1], 1, 0);
  testFindIndex(["a"], "a", 0);
  testFindIndex(["a", "b"], "b", 1);
  testFindIndex(["a", " "], " ", 1);
}

testCases();
