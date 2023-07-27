// Addition
function add(a, b) {
    return a + b;
}
const resultAdd = add(5, 3); // Result: 8
console.log("Addition:", resultAdd);
// Subtraction
function subtract(a, b) {
    return a - b;
}
const resultSubtract = subtract(10, 4); // Result: 6
console.log("Subtraction:", resultSubtract);
// Multiplication
function multiply(a, b) {
    return a * b;
}
const resultMultiply = multiply(2, 6); // Result: 12
console.log("Multiplication:", resultMultiply);

// Division
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
const resultDivide = divide(20, 5); // Result: 4
console.log("Division:", resultDivide);


function myCalculator(operation, num1, num2) {
    let result;

    // Call the corresponding arithmetic function based on the operation
    if (operation === "add") {
        result = add(num1, num2);
        console.log("addition=" + num1 + "+" + num2, result);
    } else if (operation === "subtract") {
        result = subtract(num1, num2);
        console.log("substract=", result)
    } else {
        throw new Error("Invalid operation. Supported operations: 'add', 'subtract'.");
    }

    return result;
}
myCalculator("add", 3, 4)
console.log(myCalculator)


