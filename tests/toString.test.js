import { expect } from 'chai';

import toString from '../src/toString.js';

describe('toString function', () => {
    it('Should convert number into string', () => {
        expect(toString(-0)).to.equal('-0');
    })

    it('Should convert array into string', () => {
        expect(toString([1, 2, 3])).to.equal('1,2,3');
    })

    it('Should return arrays inside arrays to string', () => {
        expect(toString([1, [2, [3]]])).to.equal('1,2,3');
    })

    it('Should convert null into empty string', () => {
        expect(toString(null)).to.equal('');
    })

    it('Should return same string when string is given', () => {
        expect(toString('hello')).to.equal('hello');
    })

    it('Should convert Infinity to string', () => {
        expect(toString(Infinity)).to.equal('Infinity');
    })
});