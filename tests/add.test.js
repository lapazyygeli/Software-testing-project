import { expect } from 'chai';

// Import the add function from add.js
import add from '../src/add.js';

// Describe block for the add function
describe('add function', () => {
  // Test case 1
  it('should pass the sample test', () => {
    expect(add(1, 1)).to.equal(2);
  });
});