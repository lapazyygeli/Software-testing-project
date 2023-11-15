import { expect } from 'chai';

import isSymbol from '../src/isSymbol.js';

describe('isSymbol function', () => {
    it('Should return true when symbol is given', () => {
        expect(isSymbol(Symbol('a'))).to.equal(true);
    })

    it('Should return true when symbol iterator is given', () => {
        expect(isSymbol(Symbol.iterator)).to.equal(true);
    })

    it('Should return false when string is given', () => {
        expect(isSymbol('not symbol')).to.equal(false);
    })

    it('Should return false when number is given', () => {
        expect(isSymbol(12)).to.equal(false);
    })

    it('Should return false when boolean is given', () => {
        expect(isSymbol(true)).to.equal(false);
    })

    it('Should return false when null is given', () => {
        expect(isSymbol(null)).to.equal(false);
    })

    it('Should return false when undefined is given', () => {
        expect(isSymbol(undefined)).to.equal(false);
    })

    it('Should return false when object is given', () => {
        const obj = {
            value: 'value'
        };

        expect(isSymbol(obj)).to.equal(false);
    })

    it('Should return false symbol is inside object', () => {
        const obj = {
            value: Symbol('inside object')
        };

        expect(isSymbol(obj)).to.equal(false);
    })
});