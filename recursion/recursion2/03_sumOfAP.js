function sumOfAP(currentTerm, differ, nthTerm) {
  if (nthTerm < 1) {
    return 0;
  }

  return currentTerm + sumOfAP(currentTerm + differ, differ, nthTerm - 1);
}

function createMSG(mark, firstTerm, difference, nthTerm, expected, actual) {
  const segmentOne = ' Sum of AP - a:' + firstTerm + ' d:' + difference;
  const segmentTwo = segmentOne + ' n:' + nthTerm;
  const expectation = ' Expected : ' + expected + '.\n';
  const actualOutput = ' And the Output is : ' + actual;

  return mark + segmentTwo + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testSumOfAP(firstTerm, differ, nthTerm, expected) {
  const actual = sumOfAP(firstTerm, differ, nthTerm);
  const mark = getMark(actual, expected);
  console.log(createMSG(mark, firstTerm, differ, nthTerm, expected, actual));
}

function testCases() {
  testSumOfAP(2, 3, 1, 2);
  testSumOfAP(2, 3, 2, 7);
  testSumOfAP(2, 3, 3, 15);
  testSumOfAP(2, 0, 3, 6);
  testSumOfAP(-2, 3, 3, 3);
  testSumOfAP(4, 2, 3, 18);
  testSumOfAP(1, 1, -1, 0);
}

testCases();
