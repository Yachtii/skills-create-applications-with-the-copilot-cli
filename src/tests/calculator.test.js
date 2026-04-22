const { add, subtract, multiply, divide } = require('../calculator');

describe('add', () => {
  test('adds two positive integers', () => expect(add(2, 3)).toBe(5));
  test('adds positive and negative numbers', () => expect(add(10, -3)).toBe(7));
  test('adds two negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adds decimals', () => expect(add(2.5, 1.5)).toBe(4));
  test('adds zero to number', () => expect(add(0, 9)).toBe(9));
  test('adds very large integers', () => expect(add(1_000_000, 2_000_000)).toBe(3_000_000));
  test('adds fractional and whole number', () => expect(add(0.25, 2)).toBe(2.25));
  test('image example: 2 + 3 = 5', () => expect(add(2, 3)).toBe(5));
});

describe('subtract', () => {
  test('subtracts smaller from larger', () => expect(subtract(10, 4)).toBe(6));
  test('subtracts larger from smaller', () => expect(subtract(4, 10)).toBe(-6));
  test('subtracts negative number', () => expect(subtract(5, -2)).toBe(7));
  test('subtracts decimals', () => expect(subtract(5.5, 2.2)).toBeCloseTo(3.3));
  test('subtracts zero', () => expect(subtract(6, 0)).toBe(6));
  test('subtracts from zero', () => expect(subtract(0, 7)).toBe(-7));
  test('image example: 10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));
});

describe('multiply', () => {
  test('multiplies two positive integers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies by zero', () => expect(multiply(8, 0)).toBe(0));
  test('multiplies by one', () => expect(multiply(9, 1)).toBe(9));
  test('multiplies positive and negative numbers', () => expect(multiply(4, -3)).toBe(-12));
  test('multiplies two negative numbers', () => expect(multiply(-2, -5)).toBe(10));
  test('multiplies decimals', () => expect(multiply(2.5, 2)).toBe(5));
  test('image example: 45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));
});

describe('divide', () => {
  test('divides two positive integers', () => expect(divide(20, 5)).toBe(4));
  test('divides into decimal result', () => expect(divide(7, 2)).toBe(3.5));
  test('divides by one', () => expect(divide(8, 1)).toBe(8));
  test('divides zero by a number', () => expect(divide(0, 5)).toBe(0));
  test('divides positive by negative', () => expect(divide(12, -3)).toBe(-4));
  test('divides negative by positive', () => expect(divide(-12, 3)).toBe(-4));
  test('divides two negatives', () => expect(divide(-12, -3)).toBe(4));
  test('throws on division by zero for positive numerator', () => expect(() => divide(10, 0)).toThrow('Division by zero'));
  test('throws on division by zero for zero numerator', () => expect(() => divide(0, 0)).toThrow('Division by zero'));
  test('image example: 20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));
});
