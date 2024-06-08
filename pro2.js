/*Write a program that uses a multiply function to multiply
two numbers and returns the result. Ask the user to enter
the two numbers, then output the numbers and result as a simple equation.*/



function multiply(x, y) {
  return x * y;
}
function main() {
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
let result = multiply(num1, num2);
console.log(num1 + " * " + num2 + " = " + result);
}
main();
