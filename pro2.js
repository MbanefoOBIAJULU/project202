
/*function multiply(left, right) {
    let product = left * right; //product
    return product;
    }
    function getNumber(prompt) {
    return parseFloat(question(prompt));
    }
    let left = getNumber('Enter the first number: '); //left
    let right = getNumber('Enter the second number: ');//right
    console.log(`${left} * ${right} = ${multiply(left, right)}`);

bar = 2;    
let bar = 1;
//function foo() 
//foo();
console.log(bar);

In the exercises for the previous variable session,
you wrote a dynamic greeter program named greeter.js. 
Add a function to this program that solicits the user's
first and last names in separate invocations; the function
should return the appropriate name as a string. Use the
return values to greet the user with their full name.

*/
function getfullName(){
    let firstName = prompt("whats your first name")
    let lastName = prompt("whats your Last name")
    return firstName+ " " + lastName;
    }

function greetUser(){
    let fullName = getfullName()
    alert("Good Evening, " + fullName + "!");
}
greetUser();

/* function getFullName() {
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    return firstName + " " + lastName;
}

function greetUser() {
    var fullName = getFullName();
    alert("Good Evening, " + fullName + "!");
}

greetUser();
*/