function __isPalindrome(string, start, end) {
  if (start > end) {
    return true;
  }

  if (string[start] !== string[end]) {
    return false;
  }

  return __isPalindrome(string, start + 1, end - 1);
}

function isPalindrome(palindromeCandidate) {
  return __isPalindrome(palindromeCandidate, 0, palindromeCandidate.length - 1);
}

function createMSG(mark, palindromeCandidate, expected, actual) {
  const segment = ' Is "' + palindromeCandidate + '" palindrome : ';
  const expectation = expected + '.\n';
  const actualOutput = ' Calculated : ' + actual;

  return mark + segment + expectation + actualOutput + '\n';
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testIsPalindrome(palindromeCandidate, expected) {
  const actual = isPalindrome(palindromeCandidate);
  const mark = getMark(actual, expected);

  console.log(createMSG(mark, palindromeCandidate, expected, actual));
}

function testCases() {
  testIsPalindrome('heleh', true);
  testIsPalindrome('helel', false);
  testIsPalindrome('a', true);
  testIsPalindrome('aa', true);
  testIsPalindrome(' ', true);
  testIsPalindrome('', true);
  testIsPalindrome('hehaheh', true);
  testIsPalindrome('hehaaheh', true);
}

testCases();
