import { expect } from 'chai';

// Import the words function from words.js
import isObject from '../src/isObject.js';

describe('isObject', () => {
    it('Should return true for an object', () => {
      expect(isObject({})).to.be.true;
    });
  
    it('Should return true for an array', () => {
      expect(isObject([1, 2, 3])).to.be.true;
    });
  
    it('Should return true for a function', () => {
      expect(isObject(Function)).to.be.true;
    });
  
    it('Should return false for null', () => {
      expect(isObject(null)).to.be.false;
    });
  
    it('Should return false for undefined', () => {
      expect(isObject(undefined)).to.be.false;
    });
  
    it('Should return false for a integer', () => {
      expect(isObject(1)).to.be.false;
    });

    it('Should return false for a double', () => {
        expect(isObject(1.1)).to.be.false;
    });
  
    it('Should return false for a string', () => {
      expect(isObject('hello')).to.be.false;
    });

    it('Should return false for a empty string', () => {
        expect(isObject('')).to.be.false;
      });
  
    it('Should return false for a boolean', () => {
      expect(isObject(true)).to.be.false;
    });

    it('Should return false for NaN', () => {
        expect(isObject(NaN)).to.be.false;
    });

    it('Should return true for instances created with constructor functions', () => {
        expect(isObject(new Number(0))).to.be.true;
        expect(isObject(new String(''))).to.be.true;
        expect(isObject(new Boolean(true))).to.be.true;
        expect(isObject(new Date())).to.be.true;

        class CustomClass {
            constructor() {
              this.property = 'value';
            }
        }
        expect(isObject(new CustomClass())).to.be.true;
    });

    it('Should handle deeply nested objects', () => {
        const deeplyNestedObject = { a: { b: { c: { d: {} } } } };
        expect(isObject(deeplyNestedObject)).to.be.true;
    });
  });