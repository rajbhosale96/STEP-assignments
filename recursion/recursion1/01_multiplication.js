function multiply(multiplier, multiplicand) {
  if (multiplier === 0) {
    return 0;
  }

  return multiplicand + multiply(multiplier - 1, multiplicand);
}

function createMSG(mark, multiplicand, multiplier, expected, actual) {
  const segment = ' Multiplication of  ' + multiplicand + ' * ' + multiplier;
  const expectation = ' = ' + expected + '.\n';
  const actualOutput = ' Calculated : ' + actual;

  return mark + segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testMultiply(multiplier, multiplicand, expected) {
  const actual = multiply(multiplier, multiplicand);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, multiplicand, multiplier, expected, actual));
}

function testCases() {
  testMultiply(0, 0, 0);
  testMultiply(0, 1, 0);
  testMultiply(1, 1, 1);
  testMultiply(1, 2, 2);
  testMultiply(2, 2, 4);
  testMultiply(1, 0, 0);
  testMultiply(1, -8, -8);
}

testCases();
