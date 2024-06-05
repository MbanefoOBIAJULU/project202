
function multiply(left, right) {
    let product = left * right; //product
    return product;
    }
    function getNumber(prompt) {
    return parseFloat(question(prompt));
    }
    let left = getNumber('Enter the first number: '); //left
    let right = getNumber('Enter the second number: ');//right
    console.log(`${left} * ${right} = ${multiply(left, right)}`);