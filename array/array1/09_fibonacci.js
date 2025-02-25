// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters

function fibonacci(noOfTerms) {
  const twoTermsofFibo = [0, 1];
  const fibonacciArray = [];

  for (let term = 0; term < noOfTerms; term++) {
    fibonacciArray[term] = twoTermsofFibo[term];
    twoTermsofFibo[term + 2] = twoTermsofFibo[term] + twoTermsofFibo[term + 1]
  }

  return fibonacciArray;
}

function createMSG(mark, term, expected, actual) {
  const segment = " Fibonacci series of " + term + " ";
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

function testFibonacci(term, expected) {
  const actual = fibonacci(term);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, term, expected, actual));
}

function testCases() {
  testFibonacci(1, [0]);
  testFibonacci(2, [0, 1]);
  testFibonacci(3, [0, 1, 1]);
  testFibonacci(4, [0, 1, 1, 2]);
}

testCases();
