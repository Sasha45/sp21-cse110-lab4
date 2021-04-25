### Part A
Question 1: <code>values added: 20</code>

Question 2: <code>final result: 20</code>

Question 3: <code>values added: 20</code>

Question 4: returns an error because <code>result</code> is out of scope

Question 5: code returns an error because line 7 tries to reassign the value of a <code>const</code> variable

Question 6: code returns an error because line 7 tries to reassign the value of a <code>const</code> variable

### Part B
Question 1: The length of the <code>prices</code> array, which is <code>3</code>, will be logged to console.

Question 2: The last value held by <code>discountedPrice</code> after the completion of the loop will be printed. Seems this value is <code>50<code>. 

Question 3: The last value held by <code>finalPrice</code> after the completion of the loop will be printed. Seems this value is also <code>50</code>. 

Question 4: The function returns the array <code>[50, 100, 150]</code>, which holds the results of the three iterations of the loop, which took a price from the input array and discounted it by 50%. In other words, it's [100, 200, 300] but with all its members halved.

Question 5: The code causes an error, since line 12 tries to access <code>i</code> which is not available in this scope (it's local to the for loop).

Question 6: The code causes an error, since line 13 tries to access <code>discountedPrice</code> which is not available in this scope (it's local to the for loop).

Question 7: Since <code>finalPrice</code> was declared in this scope, it can and will be accessed. Its last value, <code>150</code>, will be logged to the console.

Question 8: Since the <code>discounted</code> array was declared in this scope, it can and will be accessed. Its final value, <code>[50, 100, 150]</code>, will be returned.