function remainder(dividend, divisor) {
  if (dividend < divisor) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}

function createMSG(mark, dividend, divisor, expected, actual) {
  const segment = mark + ' Division : ' + dividend + ' / ' + divisor;
  const expectation = ' = ' + expected + '.\n';
  const actualOutput = '   Output is : ' + actual;

  return segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testRemainder(dividend, divisor, expected) {
  const actual = remainder(dividend, divisor);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, dividend, divisor, expected, actual));
}

function testForDivisorIsGreater() {
  testRemainder(0, 1, 0);
  testRemainder(1, 2, 1);
  testRemainder(2, 4, 2);
}

function testCaseForRemainderZero() {
  testRemainder(1, 1, 0);
  testRemainder(4, 2, 0);
  testRemainder(10, 5, 0);
}

function testCaseForRemainder() {
  testRemainder(10, 3, 1);
  testRemainder(10, 4, 2);
  testRemainder(15, 10, 5);
}

function testCases() {
  testForDivisorIsGreater();
  testCaseForRemainderZero();
  testCaseForRemainder();
}

testCases();
