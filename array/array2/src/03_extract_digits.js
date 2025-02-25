// Give an number extract its digit into array
// Number can positive, negative, floating point.
// extractDigits(123) => [1, 2, 3]
// extractDigits(-123) => [1, 2, 3]
// extractDigits(12.3) => [1, 2, 3]

function getWholeNumber(number) {
  while (number % 1 !== 0) {
    number = number * 10;
  }

  return number;
}

function createArray(number) {
  const numberArray = [];

  while (number > 0) {
    numberArray.unshift(number % 10);
    number = Math.floor(number / 10);
  }

  return numberArray;
}

export function extractDigits(number) {
  if (number === 0) {
    return [0];
  }

  const positiveNumber = Math.abs(number);
  const wholeNumber = getWholeNumber(positiveNumber);

  return createArray(wholeNumber);
}

function createMSG(mark, number, expected, actual) {
  const segment = "Number: (" + number + ") into Array";
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

function testExtractDigits(number, expected) {
  const actual = extractDigits(number);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, number, expected, actual));
}

function testCases() {
  testExtractDigits(123, [1, 2, 3]);
  testExtractDigits(1, [1]);
  testExtractDigits(-1, [1]);
  testExtractDigits(6, [6]);
  testExtractDigits(17, [1, 7]);
  testExtractDigits(-123, [1, 2, 3]);
  testExtractDigits(12.2, [1, 2, 2]);
  testExtractDigits(12.212, [1, 2, 2, 1, 2]);
  testExtractDigits(120, [1, 2, 0]);
  testExtractDigits(0, [0]);
}

// testCases();
