### Assignment: Implement a Ratio Class

#### Objective:

You are tasked with creating a `Ratio` class in JavaScript that represents a mathematical ratio (or fraction). The class should support operations like simplification, addition of two ratios, and converting the ratio to a decimal. Your implementation must follow the API specifications provided below.

---

### **API Specification**

#### **Constructor**

```javascript
new Ratio(numerator, denominator);
```

- **Description**: Creates a `Ratio` object with the given `numerator` and `denominator`.
- **Assumptions**:
  - `numerator` and `denominator` will always be integers
  - The `denominator` will never be 0

---

#### **Public Methods**

1. **`simplify()`**
   - **Description**: Returns a new `Ratio` object that represents the current ratio simplified to its lowest terms.
     - For example, a ratio of `4/6` should return a new ratio `2/3`, leaving the original ratio unchanged.
   - **Returns**: A new `Ratio` object.

---

2. **`add(other)`**
   - **Description**: Adds the current ratio to another `Ratio` object.
     - For example, `1/2` + `1/3` should return a new `Ratio` object representing `5/6`.
   - **Returns**: A new `Ratio` object. Do not modify the original object.

---

3. **`sub(other)`**
   - **Description**: Subtracts the current ratio to another `Ratio` object.
     - For example, `1/2` - `1/3` should return a new `Ratio` object representing `1/6`.
   - **Returns**: A new `Ratio` object. Do not modify the original object.

---

4. **`toString()`**
   - **Description**: Converts the ratio to a string format.
     - For example, `new Ratio(1,2).toString()` should return `1/2`.

---

Implement `Ratio`. In order to test it, a `cake.js` has been provided. Test your `Ratio` class by using `cake.js`.


