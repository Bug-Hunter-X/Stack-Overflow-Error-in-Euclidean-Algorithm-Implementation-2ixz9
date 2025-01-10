# Euclidean Algorithm and Stack Overflow

This repository demonstrates a common error in recursive function implementations: stack overflow.  The `bug.js` file contains a recursive implementation of the Euclidean algorithm to find the greatest common divisor (GCD) of two numbers. While generally correct, this implementation can cause a stack overflow error if the inputs are large enough to exhaust the call stack.

The `bugSolution.js` file provides a corrected version using iteration to avoid the stack overflow issue.  This iterative approach is significantly more robust for large inputs.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run the code and observe the difference in behavior when large inputs are given to the recursive version.