// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "abc ba";
// Replace all spaces with underscore "_"
// If string = "statement with spaces"
// Then print "statement_with_spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let stringWithoutSpace = '';

for (let currentIndex = 0; currentIndex < string.length; currentIndex++) {
    const currentCharacter = string[currentIndex] === " " ? "_" : string[currentIndex];
    stringWithoutSpace += currentCharacter;
}

console.log(stringWithoutSpace);
