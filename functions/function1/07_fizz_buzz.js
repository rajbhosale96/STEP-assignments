/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function divisibleBy(number, divider) {
  return number % divider === 0;
}

function fizzBuzz(number) {

  if (divisibleBy(number, 15)) {
    return 'fizzbuzz';
  }
  if (divisibleBy(number, 3)) {
    return 'fizz';
  }
  if (divisibleBy(number, 5)) {
    return 'buzz';
  }

  return '' + number;
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

function testFizzBuzz(number, expected) {
  const actual = fizzBuzz(number);
  const mark = getMark(actual, expected);

  console.log(createMessage(mark, number, actual, expected));
}

function testCases() {
  testFizzBuzz(3, 'fizz');
  testFizzBuzz(5, 'buzz');
  testFizzBuzz(15, 'fizzbuzz');
  testFizzBuzz(0, 'fizzbuzz');
  testFizzBuzz(1, '1');
}

testCases();
