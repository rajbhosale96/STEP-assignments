function isDivisibleBy(dividend, divisor) {
  if (dividend % divisor === 0) {
    return dividend === divisor;
  }

  return isDivisibleBy(dividend, divisor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }

  return isDivisibleBy(primeCandidate, 2);
}

function createMSG(mark, primeCandidate, expected, actual) {
  const segment = mark + ' Is ' + primeCandidate + ' a Prime ? ';
  const expectation = expected + '.\n';
  const actualOutput = ' And the Output is : ' + actual;

  return segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testIsPrime(primeCandidate, expected) {
  const actual = isPrime(primeCandidate);
  const mark = getMark(actual, expected);
  console.log(createMSG(mark, primeCandidate, expected, actual));
}

function testCases() {
  testIsPrime(0, false);
  testIsPrime(1, false);
  testIsPrime(2, true);
  testIsPrime(3, true);
  testIsPrime(4, false);
  testIsPrime(5, true);
  testIsPrime(6, false);
  testIsPrime(7, true);
}

testCases();
