// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters

function isEqual(char1, char2) {
  return char1 === char2;
}

function findLastIndex(array, element) {
  for (let index = array.length - 1; index >= 0; index--) {
    if (isEqual(array[index], element)) {
      return index;
    }
  }

  return -1;
}

function createMSG(mark, array, element, expected, actual) {
  const segment = " Last Index of : " + element + " from array : " + array;
  const expectation = "\n Expected : " + expected;
  const actualOutput = " | Result : " + actual;

  return mark + segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFindLastIndex(array, element, expected) {
  const actual = findLastIndex(array, element);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, array, element, expected, actual));
}

function testCases() {
  testFindLastIndex([1, 2], 2, 1);
  testFindLastIndex([1, 2, 1], 1, 2);
  testFindLastIndex([1, 2], 3, -1);
  testFindLastIndex(["a"], "a", 0);
  testFindLastIndex(["a", "b"], "b", 1);
  testFindLastIndex(["a", " "], " ", 1);
  testFindLastIndex(["a", "b", "a"], "a", 2);
  testFindLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea", 4);
}

testCases();
