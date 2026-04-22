/**
 * Unit tests for calculator.js
 *
 * Covers all four basic arithmetic operations:
 *   - add      (Addition)
 *   - subtract (Subtraction)
 *   - multiply (Multiplication)
 *   - divide   (Division)
 *
 * Includes edge cases such as division by zero, negatives, decimals, and zeros.
 */

const { add, subtract, multiply, divide } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add', () => {
  // Example from image: 2 + 3 = 5
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));

  test('adds positive integers', () => expect(add(10, 20)).toBe(30));
  test('adds negative numbers', () => expect(add(-5, -3)).toBe(-8));
  test('adds a positive and negative number', () => expect(add(10, -4)).toBe(6));
  test('adding zero returns the same number', () => expect(add(7, 0)).toBe(7));
  test('adds two zeros', () => expect(add(0, 0)).toBe(0));
  test('adds decimal numbers', () => expect(add(1.5, 2.5)).toBe(4));
  test('adds large numbers', () => expect(add(1000000, 999999)).toBe(1999999));
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract', () => {
  // Example from image: 10 - 4 = 6
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts positive integers', () => expect(subtract(20, 5)).toBe(15));
  test('subtracts yielding a negative result', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts negative numbers', () => expect(subtract(-5, -3)).toBe(-2));
  test('subtracting zero returns the same number', () => expect(subtract(9, 0)).toBe(9));
  test('subtracts two zeros', () => expect(subtract(0, 0)).toBe(0));
  test('subtracts decimal numbers', () => expect(subtract(5.5, 2.5)).toBe(3));
});

// ─── Multiplication ──────────────────────────────────────────────────────────
describe('multiply', () => {
  // Example from image: 45 * 2 = 90
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies positive integers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies by zero returns zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplies negative numbers', () => expect(multiply(-3, -4)).toBe(12));
  test('multiplies a positive and negative number', () => expect(multiply(5, -3)).toBe(-15));
  test('multiplies decimal numbers', () => expect(multiply(2.5, 4)).toBe(10));
  test('multiplies by one returns same number', () => expect(multiply(42, 1)).toBe(42));
});

// ─── Division ────────────────────────────────────────────────────────────────
describe('divide', () => {
  // Example from image: 20 / 5 = 4
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('divides positive integers evenly', () => expect(divide(10, 2)).toBe(5));
  test('divides yielding a decimal result', () => expect(divide(7, 2)).toBe(3.5));
  test('divides negative numbers', () => expect(divide(-12, -3)).toBe(4));
  test('divides a negative by a positive', () => expect(divide(-15, 3)).toBe(-5));
  test('divides zero by a number returns zero', () => expect(divide(0, 5)).toBe(0));
  test('divides decimal numbers', () => expect(divide(5.5, 2)).toBe(2.75));

  // Edge case: division by zero must throw
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
  test('throws an error when dividing a negative by zero', () => {
    expect(() => divide(-5, 0)).toThrow('Division by zero');
  });
});
