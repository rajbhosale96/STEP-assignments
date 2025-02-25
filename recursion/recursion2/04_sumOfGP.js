function sumOfGP(currentTerm, ratio, nthTerm) {
  if (nthTerm === 0) {
    return 0;
  }

  return currentTerm + sumOfGP((currentTerm * ratio), ratio, nthTerm - 1);
}

function createMSG(mark, firstTerm, ratio, nthTerm, expected, actual) {
  const segmentOne = ' Sum of GP - a:' + firstTerm + ' r:' + ratio;
  const segmentTwo = segmentOne + ' n:' + nthTerm;
  const expectation = ' Expected : ' + expected + '.\n';
  const actualOutput = ' And the Output is : ' + actual;

  return mark + segmentTwo + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testSumOfGP(firstTerm, ratio, nthTerm, expected) {
  const actual = sumOfGP(firstTerm, ratio, nthTerm);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, firstTerm, ratio, nthTerm, expected, actual));
}

function testCases() {
  testSumOfGP(2, 3, 1, 2);
  testSumOfGP(2, 3, 2, 8);
  testSumOfGP(2, 3, 3, 26);
  testSumOfGP(2, 0, 3, 2);
  testSumOfGP(-2, 3, 3, -26);
  testSumOfGP(10, 3, 3, 130);
}

testCases();
