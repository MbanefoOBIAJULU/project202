/*QUESTION 1
What does this code log to the console? Does executing
 the foo function affect the output? Why or why not? 
*/
let bar = 1;
function foo() {
let bar = 2
}
foo();
console.log(bar);
 /* it logs 1 to the console cause of local and global variables.
the Variable bar which has 1 as its Value is a Global variable, 
while the other variable Bar that has its Value as 2 is 
a local variable because its enclosed inside the function scope
and the console.log logs the global variable*/

/*QUESTION 2
In the exercises for the previous variable session,
you wrote a dynamic greeter program named greeter.js. 
Add a function to this program that solicits the user's
first and last names in separate invocations; the function
should return the appropriate name as a string. Use the
return values to greet the user with their full name.*/

/* QUESTION 3
Write a program that uses a multiply function to multiply
two numbers and returns the result. Ask the user to enter
the two numbers, then output the numbers and result as a simple equation.



$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566*/


/*QUESTION 4
What does the following code log to the console?
function scream(words) {
words = words + '!!!!';
return;
console.log(words);
}
scream('Yipeee');*/


 /*QUESTION 5
 What does the following code log to the console?


function scream(words) {
return words + '!!!!';
}

scream('Yipeee');*/




/*QUESTION 6
In the code shown below, identify the following items:


the function arguments
the function body
the function declaration
the function invocation
the function name
the function parameters
the function return value
the names of all variables in this program
function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);
*/


/*QUESTION 7
Without running the following code, what do you think it will output?


function foo(bar, qux) {
console.log(bar);
console.log(qux);
}
foo('Hello');*/

 /*QUESTION 8
 Without running the following code, what do you think it will output?


function foo(bar, qux) {
console.log(bar);
console.log(qux);
}
foo(42, 3.1415, 2.718);*/

/* QUESTION 9
Identify all of the variables named on each line of the
following code. You may assume that question is the name
of a built-in function in JavaScript 
( it is not, so this code won't work as written).


function multiply(left, right) {
let product = left * right;
return product;
}
function getNumber(prompt) {
return parseFloat(question(prompt));
}
let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);*/ 