import { expect } from 'chai';

import toNumber from '../src/toNumber.js';

describe('toNumber function', () => {
    it('Should return same number when number is given', () => {
        expect(toNumber(3.2)).to.equal(3.2);
    });
    
    it('Should return scientific format of minimum value of number', () => {
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
    });

    it('Should return Infinity when Infinity is given', () => {
        expect(toNumber(Infinity)).to.equal(Infinity);
    });

    it('Should return number when it is given as a string', () => {
        expect(toNumber('3.2')).to.equal(3.2);
    });

    it('Should return NaN when symbol is given', () => {
        expect(toNumber(Symbol('🤣'))).to.be.NaN;
    });

    it('Should return NaN when non-number string is given', () => {
        expect(toNumber('🤣')).to.be.NaN;
    });

    it('Should return NaN when null is given', () => {
        expect(toNumber(null)).to.equal(+null);
    });

    it('Should return NaN when undefined is given', () => {
        expect(toNumber(undefined)).to.be.NaN;
    });

    it('Should return NaN when NaN is given', () => {
        expect(toNumber(NaN)).to.be.NaN;
    });

    it('Should return NaN when empty string is given', () => {
        expect(toNumber('')).to.equal(+'');
    });

    it('Should return 0 when zero is given', () => {
        expect(toNumber(0)).to.equal(0);
    });

    it('Should return number when it is given as a string with whitespaces', () => {
        expect(toNumber('       3.2     ')).to.equal(3.2);
    });

    it('Should return number when it is given binary number or in string', () => {
        expect(toNumber(0b10)).to.equal(2);
        expect(toNumber('0b10')).to.equal(2);
    });
    
    it('Should return number when it is given hexadecimal number or in string', () => {
        expect(toNumber(0x10)).to.equal(16);
        expect(toNumber('0x10')).to.equal(16);
    });

    it('Should return number when it is given octal number or in string', () => {
        expect(toNumber(0o10)).to.equal(8);
        expect(toNumber('0o10')).to.equal(8);
    });

    it('Should detect bad signed hexadecimal string values', () => {
        expect(toNumber('+0x10')).to.be.NaN;
        expect(toNumber('-0x10')).to.be.NaN;
    });

    it('Should convert Boolean values to numbers', () => {
        expect(toNumber(true)).to.equal(1);
        expect(toNumber(false)).to.equal(0);
    });

    it('Should return NaN when given empty object', () => {
        const obj = {};
        expect(toNumber(obj)).to.be.NaN
    });

    it('Should return number when object has valueOf function', () => {
        const obj = {
            valueOf: () => 12
        };
        
        expect(toNumber(obj)).to.equal(12);
    });

    it('Should return number when object has toString function', () => {
        const obj = {
            toString: () => '12'
        };

        expect(toNumber(obj)).to.equal(12);
    });

    it('Should return NaN when object has no function to give number', () => {
        const obj = {
            number: 12
        };

        expect(toNumber(obj)).to.be.NaN;
    });
});