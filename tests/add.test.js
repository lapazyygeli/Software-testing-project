import { expect } from 'chai';

import add from '../src/add.js';

describe('add function', () => {
  it('Adds two numbers together and returns the sum', () => {
    expect(add(1, 1)).to.equal(2);
  });

  it('Negative numbers can be used', () => {
    expect(add(-1, -1)).to.equal(-2);
  });

  it('Must check that the parameters are really numbers', () => {
    expect(add('a', '🤣')).to.not.equal('a🤣');
  });

  it('Add is given numbers as string', () => {
    expect(add('1', '1')).to.equal(2);
  });

  it('Should return the second parameter when null is given as the other parameter', () => {
    expect(add(null, 1)).to.equal(1);
  });

  it('Should return the second parameter when Boolean is given as the other parameter', () => {
    expect(add(true, 1)).to.equal(1);
  });

  it('Should return Infinity when Infinity is added', () => {
    expect(add(Infinity, 1)).to.equal(Infinity);
    expect(add(Infinity, Infinity)).to.equal(Infinity);
  });

  it('Infinity should not be added to minus infinity', () => {
    expect(add(Infinity, -Infinity)).to.be.NaN;
  });

  it('Adding binary and hexadecimal numbers', () => {
    expect(add(0x10, 0b10)).to.equal(18);
  });

  it('Sum with numbers in scientific notation', () => {
    expect(add(1e5, 2e5)).to.equal(3e5);
  });

  it('Adding infinite decimal numbers', () => {
    const PI = Math.PI;
    const E = Math.E;

    expect(add(PI, E)).to.be.closeTo(PI + E, 0.0000001);
  });

  it('Add is given two different kinds of numbers', () => {
    expect(add(1.5, 2)).to.equal(3.5);
  }); 

  it('Should add the biggest numbers without overflowing', () => {
    const result = add(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    expect(result).to.equal(2 * Number.MAX_SAFE_INTEGER);
  });

  it('Should add the smallest numbers without overflowing', () => {
    const result = add(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    expect(result).to.equal(2 * Number.MIN_SAFE_INTEGER);
  });
});