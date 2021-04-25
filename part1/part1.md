### Part A
Question 1: <code>values added: 20</code>

Question 2: <code>final result: 20</code>

Question 3: <code>values added: 20</code>

Question 4: returns an error because <code>result</code> is out of scope

Question 5: code returns an error because line 7 tries to reassign the value of a <code>const</code> variable

Question 6: code returns an error because line 7 tries to reassign the value of a <code>const</code> variable

### Part B
Question 1: The length of the <code>prices</code> array, which is <code>3</code>, will be logged to console.

Question 2: The last value held by <code>discountedPrice</code> after the completion of the loop will be printed. Seems this value is <code>50</code>. 

Question 3: The last value held by <code>finalPrice</code> after the completion of the loop will be printed. Seems this value is also <code>50</code>. 

Question 4: The function returns the array <code>[50, 100, 150]</code>, which holds the results of the three iterations of the loop, which took a price from the input array and discounted it by 50%. In other words, it's [100, 200, 300] but with all its members halved.

Question 5: The code causes an error, since line 12 tries to access <code>i</code> which is not available in this scope (it's local to the for loop).

Question 6: The code causes an error, since line 13 tries to access <code>discountedPrice</code> which is not available in this scope (it's local to the for loop).

Question 7: Since <code>finalPrice</code> was declared in this scope, it can and will be accessed. Its last value, <code>150</code>, will be logged to the console.

Question 8: Since the <code>discounted</code> array was declared in this scope, it can and will be accessed. Its final value, <code>[50, 100, 150]</code>, will be returned.

Question 9: The code will cause an error because <code>i</code> is not available in this scope.

Question 10: <code>3</code> will be logged to console, as this is the value of <code>prices.length</code>.

Question 11: The function returns the array <code>[50, 100, 150]</code>. This is the result of the loop thrice modifying the <code>discounted</code> array (which is declared in this scope and never reassigned, so it's fine).

Question 12A: <code>student.name</code>

Question 12B: <code>student['Grad Year']</code>

Question 12C: <code>student.greeting()</code>

Question 12D: <code>student['Favorite Teacher'].name</code>

Question 12E: <code>student.courseLoad[0]</code>

Question 13A: <code>'32'</code>, since the integer 2 is converted into a string "2" and the two strings are then concatenated.

Question 13B: <code>1</code>, since there is no subtractive foil to concatenation, the string "3" is converted into an integer 3 and then subtraction is performed.

Question 13C: <code>3</code>, since null is converted into the integer 0.

Question 13D: <code>'3null'</code>, since null is converted into the string "null".

Question 13E: <code>4</code>, since true's integer value is 1.

Question 13F: <code>0</code>, since both false and null are converted into the integer 0 and then those zeros are added.

Question 13G: <code>'3undefined'</code>, since undefined is converted into a string to match the other string, and then the two are concatenated.

Question 13H: <code>NaN</code>, since undefined is converted into a string to match "3", but then the two strings cannot be subtracted.

Question 14A: <code>true</code>, since '2' becomes the integer 2 and that is more than 1.

Question 14B: <code>false</code>. '2' is not less than '12'; string comparison like this refers to alphabetical ordering, and '2' does not come before '12' alphabetically.

Question 14C: <code>true</code>, since (with the proper type conversions) the value of '2' is the same as 2.

Question 14D: <code>false</code>. Though the values of '2' and 2 are equal, the === strict comparison also check the data type of the two values, which is not the same (string vs integer).

Question 14E: <code>false</code> since true's numerical value is 1, which is not equal to 2.

Question 14F: <code>true</code>, because 2's boolean value (obtained from the explicit conversion) is true, as 2 is non-empty and non-zero.

Question 15: == compares value only, using conversions as appropriate. === compares both values and data types.

Question 16: See the file <code>part1b-question16.js</code>

Question 17: <code>modifyArray</code> is just a funtion that loops through the items of the input array and applies the input function to each. Thereby, upon taking in the array <code>[1,2,3]</code> and the function <code>doSomething()</code> that simply returns its input but multiplied by 2, the loop results in the array <code>[2,4,6]</code>.

Question 18: See the file <code>part1b-question18.js</code>

Question 19: First <code>1</code>, then <code>3</code>, then <code>4</code>, and finally <code>2</code>.