function isDivisibleBy(dividend, divisor) {
  if (dividend % divisor === 0) {
    return dividend === divisor;
  }

  return isDivisibleBy(dividend, divisor + 1);
}

function isPrime(primeCandidate) {
  if (isDivisibleBy(primeCandidate, 2)) {
    return primeCandidate;
  }

  return isPrime(primeCandidate + 1);
}

function firstPrimeAbove(number) {
  if (number < 2) {
    return 2;
  }

  return isPrime(number + 1);
}

function createMSG(mark, primeCandidate, expected, actual) {
  const segment = mark + ' First Prime Above ' + primeCandidate + ' is ';
  const expectation = expected + '.\n';
  const actualOutput = ' And the Output is : ' + actual;

  return segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testIsFirstPrimeAbove(primeCandidate, expected) {
  const actual = firstPrimeAbove(primeCandidate);
  const mark = getMark(actual, expected);
  console.log(createMSG(mark, primeCandidate, expected, actual));
}

function testCases() {
  testIsFirstPrimeAbove(0, 2);
  testIsFirstPrimeAbove(1, 2);
  testIsFirstPrimeAbove(2, 3);
  testIsFirstPrimeAbove(3, 5);
  testIsFirstPrimeAbove(4, 5);
  testIsFirstPrimeAbove(5, 7);
  testIsFirstPrimeAbove(6, 7);
  testIsFirstPrimeAbove(7, 11);
}

testCases();
