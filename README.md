# Type 'string' is not assignable to type 'Date' in TypeScript
This example demonstrates a common type error in TypeScript where a string is passed as an argument to a function expecting a Date object. The error message clearly indicates the type mismatch and the line of code causing the issue.

## Bug
The `greet` function expects a `Date` object as its second parameter. However, in the erroneous call, a string is passed instead. TypeScript's type system correctly identifies this as an error, preventing the code from compiling.

## Solution
The solution involves converting the string to a `Date` object using the `Date.parse()` method or any other appropriate method depending on your date string format.

This example showcases a frequent and easily correctable error in TypeScript's type system.