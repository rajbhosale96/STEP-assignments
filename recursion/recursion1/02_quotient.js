function quotient(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  return 1 + quotient(dividend - divisor, divisor);
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

function testQuotient(dividend, divisor, expected) {
  const actual = quotient(dividend, divisor);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, dividend, divisor, expected, actual));
}

function testCases() {
  testQuotient(1, 1, 1);
  testQuotient(2, 2, 1);
  testQuotient(3, 6, 0);
  testQuotient(25, 4, 6);
  testQuotient(120, 5, 24);
  testQuotient(0, 120, 0);
}

testCases();
