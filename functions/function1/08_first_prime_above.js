/*
  Write a function that returns the first prime number above given number
  
  Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isPrime(candidate) {
  for (let factor = 2; factor <= Math.sqrt(candidate); factor++) {
    if (candidate % factor === 0) {
      return false;
    }
  }

  return true;
}

function firstPrimeAbove(number) {
  let primeCandidate = number + 1;

  if (number < 2) {
    return 2;
  }

  while (!isPrime(primeCandidate)) {
    primeCandidate++;
  }

  return primeCandidate;
}

function createMessage(isPassed, number, actual, expected) {
  const context = isPassed + '| Number : "' + number;
  const expectation = '"| Expected : "' + expected;
  const actualOutput = '"| Actual : "' + actual + '"|';

  return context + expectation + actualOutput;
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFirstPrimeAbove(number, expected) {
  const actual = firstPrimeAbove(number);
  const mark = getMark(actual, expected);

  console.log(createMessage(mark, number, actual, expected));
}

function testCases() {
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(3, 5);
  testFirstPrimeAbove(4, 5);
  testFirstPrimeAbove(5, 7);
  testFirstPrimeAbove(6, 7);
  testFirstPrimeAbove(7, 11);
}

testCases();
