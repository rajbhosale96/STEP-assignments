// concat the given arrays.
// concat([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]

export function concat(array1, array2) {
  const concatenatedArray = [];

  for (let index = 0; index < array1.length; index++) {
    concatenatedArray.push(array1[index]);
  }

  for (let index = 0; index < array2.length; index++) {
    concatenatedArray.push(array2[index]);
  }

    return concatenatedArray;
}

function createMSG(mark, array1, array2, expected, actual) {
  const segment = "Concat [" + array1 + "] and [" + array2;
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

function testConcat(array1, array2, expected) {
  const actual = concat(array1, array2);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, array1, array2, expected, actual));
}

function testCases() {
  testConcat([1], [2], [1, 2]);
  testConcat([1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]);
  testConcat([1, 2, 3], [], [1, 2, 3]);
  testConcat([], [1, 2, 3], [1, 2, 3]);
  testConcat([], [], []);
}

// testCases();
