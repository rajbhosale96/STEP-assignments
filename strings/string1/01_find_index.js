// Do not rename string and charToFind, use them as input for your program.
// While testing we will change their values.
const string = 'abefc';
const charToFind = 'c';
// Print the first index of the character in given string. Consider case sensitivity.
// If character not present in string print -1
// If string = "abccdef" and charToFind = "c", then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const stringLength = string.length;
let isFound = false;
let index = 0;

while (!isFound && index < stringLength ) {
    isFound = string[index] === charToFind ? true : false;
    index++;
}

if (isFound) {
    console.log(index - 1);
} else {
    console.log(-1);
}
