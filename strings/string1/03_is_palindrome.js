// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "abcba";
// Print true if the given string is palindrome otherwise false
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let isPalindrome = true;
let index = 0;
let stringLength = string.length;

while (isPalindrome && index < (stringLength / 2)) {
    if (string[index] !== string[stringLength - 1]) {
        isPalindrome = false;
    }
    stringLength--;
    index++;
}

console.log(isPalindrome);
