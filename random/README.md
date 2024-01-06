## Random Number and Character Generator Functions

This document provides documentation for three JavaScript functions that generate random numbers and characters.

## Functions

## `randomNumberInt(min = 0, max = 2)`

**Description:**

- Generates a random integer within a specified range.

**Parameters:**

- `min` (optional): The minimum value of the range (inclusive). Defaults to 0.
- `max` (optional): The maximum value of the range (inclusive). Defaults to 2.

**Returns:**

- A random integer between `min` and `max`.

**Example:**

JavaScript

```
const randomInt = randomNumberInt(5, 10); // Possible values: 5, 6, 7, 8, 9, 10

```

## `randomNumberFloat(min = 0, max = 2)`

**Description:**

- Generates a random floating-point number within a specified range.

**Parameters:**

- `min` (optional): The minimum value of the range (inclusive). Defaults to 0.
- `max` (optional): The maximum value of the range (inclusive). Defaults to 2.

**Returns:**

- A random floating-point number between `min` and `max`.

**Example:**

JavaScript

```
const randomFloat = randomNumberFloat(1.5, 3.2); // Possible values: 1.5 <= x <= 3.2

```

## `randomChar(type = "u")`

**Description:**

- Generates a random uppercase or lowercase alphabetic character.

**Parameters:**

- `type` (optional): Specifies the type of character to generate. Defaults to "u" (uppercase).

  - "u": Generates an uppercase character.
  - "i": Generates a lowercase character.

**Returns:**

- A random character, either uppercase or lowercase depending on the `type` parameter.

**Example:**

JavaScript

```
const randomUpper = randomChar();   // Possible values: A-Z
const randomLower = randomChar("i"); // Possible values: a-z
```
