// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = " spaces at the start and the end ";
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let startIndex = 0;
let lastIndex = string.length - 1;
let updatedString = "";

while (string[startIndex] === " ") {
    startIndex++;
}
while (string[lastIndex] === " ") {
    lastIndex--;
}

for (let index = startIndex; index <= lastIndex; index++) {
    updatedString = updatedString + string[index];
}
console.log(updatedString);
