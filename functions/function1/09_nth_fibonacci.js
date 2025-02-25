/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function getNthTerm(currentTerm, nextTerm, number) {
  let nextToNextTerm = 0;

  for (let term = 1; term < number; term++) {
    nextToNextTerm = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = nextToNextTerm;
  }

  return currentTerm;
}

function nthFibonacciTerm(number) {
  const firstTerm = 0;
  const secondTerm = 1;

  return getNthTerm(firstTerm, secondTerm, number);
}

function createMessage(isPassed, number, actual, expected) {
  const context = isPassed + '| Nth Term : "' + number;
  const expectation = '"| Expected : "' + expected;
  const actualOutput = '"| Actual : "' + actual + '"';

  return context + expectation + actualOutput;
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFibonacciTerm(number, expected) {
  const actual = nthFibonacciTerm(number);
  const mark = getMark(actual, expected);

  console.log(createMessage(mark, number, actual, expected));
}

function testCases() {
  testFibonacciTerm(1, 0);
  testFibonacciTerm(2, 1);
  testFibonacciTerm(3, 1);
  testFibonacciTerm(4, 2);
  testFibonacciTerm(5, 3);
  testFibonacciTerm(6, 5);
  testFibonacciTerm(7, 8);
  testFibonacciTerm(8, 13);
}

testCases();
