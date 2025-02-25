// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "this is statement";
const subString = "is";
// const string = "this is statement"; const subString = "is"; const expectedOutput = 2;
// const string = "this is statement"; const subString = "hello"; const expectedOutput = 0;
// const string = "this is statement"; const subString = ""; const expectedOutput = 0;
// const string = "this is statement"; const subString = " "; const expectedOutput = 2;
// const string = "aaa"; const subString = "a"; const expectedOutput = 3;
// const string = "aaa"; const subString = "aa"; const expectedOutput = 2;
// const string = " "; const subString = " "; const expectedOutput = 1;
// const string = ""; const subString = ""; const expectedOutput = 0;

// Print the count of occurences of a substring in the given string
// If string = "duplicate substring statement" and subString = "ate", then print 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let occurences = 0;

for (let indexOfString = 0; indexOfString < string.length; indexOfString++) {
    let subStringCandidate = '';
    const endIndex = indexOfString + subString.length;

    for (let startIndex = indexOfString; startIndex < endIndex; startIndex++) {
        subStringCandidate += string[startIndex];
    }

    if (subStringCandidate === subString && subString !== '') {
        occurences++;
    }
}

console.log(occurences);
