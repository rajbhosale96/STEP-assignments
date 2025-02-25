function cToK(temperature) {
  return temperature + 273.15;
}

function kToF(temperature) {
  return ((temperature - 273.15) * 9 / 5) + 32;
}

function fToC(temperature) {
  return (temperature - 32) * 5 / 9;
}

function isUnitValid(unit) {
  return unit === 'C' || unit === 'K' || unit === 'F';
}

function getConvertedValue(from, to, value) {
  switch (from) {
    case 'C':
      return to === 'K' ? cToK(value) : kToF(cToK(value));

    case 'K':
      return to === 'F' ? kToF(value) : fToC(kToF(value));

    case 'F':
      return to === 'C' ? fToC(value) : cToK(fToC(value));
  }
}

function convert(from, to, value) {
  const temperature = +value;

  if (!isUnitValid(from) || !isUnitValid(to)) {
    return NaN;
  }

  if (from === to) {
    return temperature;
  }

  return getConvertedValue(from, to, temperature);
}

function areEqual(expected, actual) {
  if (isNaN(expected) && isNaN(actual)) {
    return true;
  }

  return expected === actual;
}

function createMessage(isPassed, from, to, actual, expected) {
  const context = isPassed + " Convert " + from + " -> " + to;
  const expectation = "| Expected : " + expected;
  const actualOutput = "| Actual : " + actual;

  return context + expectation + actualOutput;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testConvert(from, to, value, expected) {
  const actual = convert(from, to, +value);
  const isPassed = areEqual(actual, expected);
  const mark = getMark(isPassed);

  console.log(createMessage(mark, from, to, actual, expected));
}

function convertFromCelsiusTestCases() {
  testConvert('C', 'K', 100, 373.15);
  testConvert('C', 'K', '100', 373.15);
  testConvert('C', 'C', 100, 100);
  testConvert('C', 'C', '100', 100);
  testConvert('C', 'F', -40, -40);
  testConvert('C', 'F', 26, 78.80000000000001);
  testConvert('C', 'F', '37', 98.6);
}

function convertFromKelvinTestCases() {
  testConvert('K', 'K', 90, 90);
  testConvert('K', 'F', 373.15, 212);
  testConvert('K', 'C', 0, -273.15);
}

function convertFromFahrenheitTestCases() {
  testConvert('F', 'F', 26, 26);
  testConvert('F', 'C', 98, 36.666666666666664);
  testConvert('F', 'K', 32, 273.15);
}

function invalidTestCases() {
  testConvert('j', 'C', 56, NaN);
  testConvert('K', 'j', 90, NaN);
  testConvert('h', 'j', 86, NaN);
  testConvert('', 'j', 54, NaN);
  testConvert('', 'j', 43, NaN);
  testConvert('K', 'C', 'hi', NaN);
}

function testCases() {
  convertFromCelsiusTestCases();
  convertFromKelvinTestCases();
  convertFromFahrenheitTestCases();
  invalidTestCases();
}

testCases();
