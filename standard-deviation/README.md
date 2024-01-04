# Math_Utilities

# Standard Deviation Calculator

## Installation

No installation is required. You can run the code directly in a JavaScript environment.

**Usage**

2.  Open a JavaScript console or create a JavaScript file.
3.  Paste the code into the console or file.
4.  Define an array of numbers you want to calculate the standard deviation for.
5.  Call the `standardDiviation` function, passing the array as an argument.
6.  The standard deviation will be printed to the console.

**Example :**

JavaScript

```
const arr = [2, 4, 6, 8, 10];
standardDiviation(arr); // Output: 2.8284271247461903

```

**Functions**

- **mean(arr):** Calculates the mean (average) of an array.
- **meanDeviation(arr, mean):** Calculates the mean deviation of each element from the mean.
- **squareDiviation(arr):** Squares each element in an array.
- **diviationSum(arr):** Calculates the sum of all elements in an array.
- **variance(diviationSum, arr):** Calculates the variance of an array.
- **varianceSquareRoot(variance):** Calculates the square root of the variance, which is the standard deviation.
- **standardDiviation(arr):** The main function that orchestrates the calculation of the standard deviation.

**Additional Notes**

- The code assumes that the input array contains numerical values.
- The `standardDiviation` function logs the result to the console. You can modify it to return the value instead if needed.
