### Part 3
Question 1: The bug was that the program takes in the inputs as text, and "adds" them as text, instead of as numbers. It should convert the input to numbers and then add, because adding them as strings just results in concatenation.

Question 2: I would fix it by wrapping the uses of <code>num1</code> and <code>num2</code> in a <code>Number()</code> cast, like so:
![Sample solution](solution.png)
