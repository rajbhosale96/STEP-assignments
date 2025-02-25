// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters

function reverseFibonacci(term) {
  const fibonacciArray = [];
  let currentTerm = 0;
  let nextTerm = 1;

  for (let index = term - 1; index >= 0; index--) {
    fibonacciArray[index] = currentTerm;

    const futureTerm = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = futureTerm;
  }

  return fibonacciArray;
}

function createMSG(mark, term, expected, actual) {
  const segment = " Reverse Fibonacci series of term" + term + " ";
  const expectation = "\n Expected : " + expected;
  const actualOutput = " | Result : " + actual;

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

function testReverseFibonacci(term, expected) {
  const actual = reverseFibonacci(term);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, term, expected, actual));
}

function testCases() {
  testReverseFibonacci(1, [0]);
  testReverseFibonacci(2, [1, 0]);
  testReverseFibonacci(3, [1, 1, 0]);
  testReverseFibonacci(4, [2, 1, 1, 0]);
}

testCases();
