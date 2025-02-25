function getNthTerm(term, currentTerm, nextTerm) {
  if (term === 1) {
    return currentTerm;
  }

  return getNthTerm(term - 1, nextTerm, nextTerm + currentTerm);
}

function nthFibonacciTerm(term) {
  return getNthTerm(term, 0, 1);
}

function createMSG(mark, term, expected, actual) {
  const segment = mark + ' Fibonacci term : ' + term + ' is ';
  const expectation = expected;
  const actualOutput = ' And the Output is : ' + actual;

  return segment + expectation + actualOutput;
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testnthFibonacciTerm(term, expected) {
  const actual = nthFibonacciTerm(term);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, term, expected, actual));
}

function testCases() {
  console.log("\nTesting NthFibonacci Function:");
  testnthFibonacciTerm(1, 0);
  testnthFibonacciTerm(2, 1);
  testnthFibonacciTerm(3, 1);
  testnthFibonacciTerm(4, 2);
  testnthFibonacciTerm(5, 3);
  testnthFibonacciTerm(6, 5);
}

testCases();
