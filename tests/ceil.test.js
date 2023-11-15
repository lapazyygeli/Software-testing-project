import { expect } from 'chai';

// Import the ceil function from ceil.js
import ceil from '../src/ceil.js';

describe('ceil function', () => {
  it('Should round up a positive decimal number to the nearest integer', () => {
    expect(ceil(4.006)).to.equal(5);
  });

  it('Should round up a positive decimal number to a specified precision', () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
  });

  it('Should round up a positive integer to a specified negative precision', () => {
    expect(ceil(6040, -2)).to.equal(6100);
  });

  it('Should round up a negative decimal number to the nearest integer', () => {
    expect(ceil(-4.006)).to.equal(-4);
  });

  it('Should round up a negative decimal number to a specified precision', () => {
    expect(ceil(-6.004, 2)).to.equal(-6);
  });

  it('Should round up a negative integer to a specified negative precision', () => {
    expect(ceil(-6040, -2)).to.equal(-6000);
  });

  it('Should round up zero to the nearest integer', () => {
    expect(ceil(0)).to.equal(0);
  });

  it('Should round up zero to a specified precision', () => {
    expect(ceil(0, 2)).to.equal(0);
  });

  it('Should round up zero to a specified negative precision', () => {
    expect(ceil(0, -2)).to.equal(0);
  });

  it('Should handle Infinity by returning Infinity', () => {
    expect(ceil(Infinity)).to.equal(Infinity);
  });

  it('Should handle negative Infinity by returning negative Infinity', () => {
    expect(ceil(-Infinity)).to.equal(-Infinity);
  });

  it('Should handle NaN by returning NaN', () => {
    expect(isNaN(ceil(NaN))).to.be.true;
  });

  it('Must use default value when precision is not a number', () => {
    expect(ceil(1.004, '🤣')).to.equal(2);
  });

  it('Must use default value when precision is not a number', () => {
    expect(ceil('🤣')).to.be.NaN;
  });
  
});