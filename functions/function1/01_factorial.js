/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1
  *Your function must return a value*
  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function factorial(number) {
  let product = 1;

  for (let multiplier = 2; multiplier <= number; multiplier++) {
    product = product * multiplier;
  }

  return product;
}

function addQuotes(content) {
  return '"' + content + '"';
}

function createMessage(mark, number, expected, actual) {
  const context = mark + ' Factorial of ' + addQuotes(number);
  const expectation = '\n Expected: ' + addQuotes(expected);
  const actualOutput = '\n Actual: ' + addQuotes(actual) + '\n';

  return context + expectation + actualOutput;
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFactorial(number, expected) {
  const actual = factorial(number);
  const mark = getMark(actual, expected);

  console.log(createMessage(mark, number, expected, actual));
}

function testCases() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(4, 24);
  testFactorial(5, 120);
}

testCases();
