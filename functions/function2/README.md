##  Date Validation Assignment

**Objective:**

- Write a JavaScript function named `validate` that takes two arguments:
    - `format`: A string representing the date format (e.g., "dd-mm-yyyy").
    - `date`: A string representing the date to be validated (e.g., "13-11-2024").

**Validation Rules:**

The function should perform the following validations in order of preference and return the corresponding message:

1. **Invalid format:** 
    - If the provided `format` is not one of the following: "dd-mm-yyyy", "mm-dd-yyyy", or "yyyy-mm-dd".
    - return 'invalid format'
2. **Date not according to format:**
    - If the provided `date` does not adhere to the specified `format` (e.g., "31-02-2024" in "dd-mm-yyyy" format).
    - return 'date not according to format'
3. **Invalid year:**
    - If the year in the `date` is less than 1 or greater than 9999.
    - return 'invalid year'
4. **Invalid month:**
    - If the month in the `date` is not between 1 and 12.
    - return 'invalid month'
5. **Invalid day:**
    - If the day in the `date` is outside the valid range for the given month (e.g., 30 days in February for a non-leap year).
    - return 'invalid day'

**Valid Date:**

- If all validations pass, the function should return "valid".

**Example:**

```javascript
console.log(validate("dd-mm-yyyy", "13-11-2024")); // Output: "valid"
console.log(validate("yyyy-mm-dd", "2024-13-11")); // Output: "invalid month"
console.log(validate("mm-dd-yyyy", "29-02-2023")); // Output: "invalid day" (not a leap year)
```
