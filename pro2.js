/*function multiply(left, right) {  //left, right
let product = left * right;       //product
return product;                   // product
}
function getNumber(prompt) {      //prompt
return parseFloat(question(prompt));//prompt, question
}
let left = getNumber('Enter the first number: '); //left
let right = getNumber('Enter the second number: ');//right
console.log(`${left} * ${right} = ${multiply(left, right)}`); //left, right, multiply*/

function getfullName(){
    let firstName = prompt("whats your first name")
    let lastName = prompt("whats your Last name")
    let userName = firstName+ " " + lastName;
    return userName
    }
  
  function greetUser(){
    let fullName = getfullName()
    alert("Good Evening, " + fullName + "!");
  }
  greetUser();
  