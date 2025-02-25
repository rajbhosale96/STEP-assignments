// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'we    aee  f u';
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let numberOfWords = 0;
const updatedString = string + " ";

for (let currentIndex = 0; currentIndex < updatedString.length; currentIndex++) {

    if (updatedString[currentIndex] !== " " && updatedString[currentIndex + 1] === " ") {
        numberOfWords++;
    }
}
console.log(numberOfWords);
