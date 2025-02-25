function repeat(string, times) {
  if (times === 0) {
    return '';
  }

  return string + repeat(string, times - 1);
}

function createMSG(mark, string, times, expected, actual) {
  const segment = ' Repeat : "' + string + '" for "' + times;
  const expectation = '"  Expected :"' + expected + '".\n';
  const actualOutput = ' Calculated : ' + actual;

  return mark + segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testRepeat(string, times, expected) {
  const actual = repeat(string, times);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, string, times, expected, actual));
}

function testCases() {
  testRepeat('hello', 0, '');
  testRepeat('hello', 1, 'hello');
  testRepeat('hello', 2, 'hellohello');
}

testCases();
