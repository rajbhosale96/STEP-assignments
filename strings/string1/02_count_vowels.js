// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'abcdefghi';
// Print the number of vowles in given string. Consider case sensitivity.
// If string = "abcdefghi" then output should be 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let numberOfVowels = 0;
const vowelsList = "aeiouAEIOU";

for (let indexOfString = 0; indexOfString < string.length; indexOfString++) { 
    for (let indexOfVowelList = 0; indexOfVowelList < vowelsList.length; indexOfVowelList++) {
        if (string[indexOfString] === vowelsList[indexOfVowelList]) {
            numberOfVowels++;
        }
    }   
} 
console.log(numberOfVowels);
