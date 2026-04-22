#!/usr/bin/env node

// Supported operations: add, subtract, multiply, divide
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }

  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};

if (require.main === module) {
  const [, , operation, num1, num2] = process.argv;

  if (!operation || num1 === undefined || num2 === undefined) {
    console.log('Usage: node src/calculator.js <add|subtract|multiply|divide> <num1> <num2>');
    process.exit(1);
  }

  const a = Number(num1);
  const b = Number(num2);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log('Both inputs must be valid numbers.');
    process.exit(1);
  }

  try {
    let result;

    switch (operation) {
      case 'add':
        result = add(a, b);
        break;
      case 'subtract':
        result = subtract(a, b);
        break;
      case 'multiply':
        result = multiply(a, b);
        break;
      case 'divide':
        result = divide(a, b);
        break;
      default:
        console.log('Unknown operation. Use add, subtract, multiply, or divide.');
        process.exit(1);
    }

    console.log(result);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}
