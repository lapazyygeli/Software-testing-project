// Import the add function from add.js
import add from '../functions/add';

// Describe block for the add function
describe('add function', () => {
  // Test case 1
  test('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  // Test case 2
  test('adds a positive and a negative number', () => {
    expect(add(6, -4)).toBe(2);
  });

  // Test case 3
  test('adds two negative numbers', () => {
    expect(add(-6, -4)).toBe(-10);
  });

  // Test case 4
  test('adds zero and a number', () => {
    expect(add(0, 5)).toBe(5);
  });

  // Test case 5
  test('adds zero and zero', () => {
    expect(add(0, 0)).toBe(0);
  });
});