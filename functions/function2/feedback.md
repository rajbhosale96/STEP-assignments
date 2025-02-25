issues:
1. In some places didn't use camelCase
2. Long if statements
3. line 42 : number > startRange - 1 && number < endRange + 1
  instead number >= startRange && number <= endRange
4. function are large which could be divided into subfunction 
5. name of variables
6. valid cases are failing for 'yyyy-mm-dd' format
7. using if statement to return boolean value
8. improper spacing
9. test cases like "'dd-mm-yyyy', '01-01-200 '" or "'dd-mm-yyyy', '01-01-200-'" are failing

good about the code:
1. good use of early exit in isLeapYear() which i didn't knew it before
2. reuse of functions
