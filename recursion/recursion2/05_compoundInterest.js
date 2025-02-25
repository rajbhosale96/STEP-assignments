function compoundInterest(principle, rate, time) {
  if (time === 0) {
    return 0;
  }

  const simpleInterest = principle * rate / 100;
  const amount = principle + simpleInterest;

  return simpleInterest + compoundInterest(amount, rate, time - 1);
}

function createMSG(mark, principle, rate, time, expected, actual) {
  const segment = ' Compound interest: ' + principle + '*' + rate + '*' + time;
  const expectation = ' = ' + expected + '.\n';
  const actualOutput = ' Calculated : ' + actual;

  return mark + segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testCompoundInterest(principle, rate, time, expected) {
  const actual = compoundInterest(principle, rate, time);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, principle, rate, time, expected, actual));
}

function testCases() {
  testCompoundInterest(1200, 6, 2, 148.32);
  testCompoundInterest(1000, 5, 1, 50);
  testCompoundInterest(1000, 5, 2, 102.5);
  testCompoundInterest(1000, 5, 3, 157.625);
}

testCases();
