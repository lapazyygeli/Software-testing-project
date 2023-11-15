import { expect } from 'chai';

import capitalize from '../src/capitalize.js';


describe('capitalize function', () => {
    it('Should capitalize string', () => {
        expect(capitalize('hElLo')).to.equal('Hello');
    });

    it('Should capitalize string', () => {
        expect(capitalize('HELLO')).to.equal('Hello');
    });

    it('Should handle one character strings', () => {
        expect(capitalize('a')).to.equal('A');
    });

    it('Should return empty string back when it is given', () => {
        expect(capitalize('')).to.equal('');
    });

    it('Should return empty string when no parameter is given', () => {
        expect(capitalize()).to.equal('');
    });

    it('Should handle leading and trailing spaces', () => {
        expect(capitalize('   hello  ')).to.equal('   hello  ');
    });

    it('Should handle numbers', () => {
        expect(capitalize(123)).to.equal('123');
    });

    it('Should return empty string when null is given', () => {
        expect(capitalize(null)).to.equal('');
    });

    it('Should return empty string when undefined is given', () => {
        expect(capitalize(undefined)).to.equal('');
    });
});