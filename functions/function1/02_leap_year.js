/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false
  *Your function must return a value*
  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  const isDivisibleBy400 = isDivisible(year, 400);
  const isDivisibleBy4 = isDivisible(year, 4);
  const isDivisibleBy100 = isDivisible(year, 100);

  return isDivisibleBy400 || (isDivisibleBy4 && !isDivisibleBy100);
}

function createMessage(isPassed, year, actual, expected) {
  const context = isPassed + ' Is ' + year + ' a Leap year? :';
  const expectation = expected;
  const actualOutput = '. We got ' + actual;

  return context + expectation + actualOutput;
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testIsLeap(year, expected) {
  const actual = isLeapYear(year);
  const mark = getMark(actual, expected);

  console.log(createMessage(mark, year, actual, expected));
}

function testCases() {
  testIsLeap(1, false);
  testIsLeap(4, true);
  testIsLeap(100, false);
  testIsLeap(400, true);
  testIsLeap(1000, false);
  testIsLeap(2000, true);
  testIsLeap(2004, true);
}

testCases();
