import { expect } from 'chai';

import isSymbol from '../src/isSymbol.js';

describe('isSymbol function', () => {
    it('Should return true when symbol is given', () => {
        expect(isSymbol(Symbol('a'))).to.be.true;
    });

    it('Should return true when symbol iterator is given', () => {
        expect(isSymbol(Symbol.iterator)).to.be.true;
    });

    it('Should return false when string is given', () => {
        expect(isSymbol('not symbol')).to.be.false;
    });

    it('Should return false when number is given', () => {
        expect(isSymbol(12)).to.be.false;
    });

    it('Should return false when boolean is given', () => {
        expect(isSymbol(true)).to.be.false;
    });

    it('Should return false when null is given', () => {
        expect(isSymbol(null)).to.be.false;
    });

    it('Should return false when undefined is given', () => {
        expect(isSymbol(undefined)).to.be.false;
    });

    it('Should return false when object is given', () => {
        const obj = {
            value: 'value'
        };

        expect(isSymbol(obj)).to.be.false;
    });

    it('Should return false symbol is inside object', () => {
        const obj = {
            value: Symbol('inside object')
        };

        expect(isSymbol(obj)).to.be.false;
    });
});