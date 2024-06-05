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