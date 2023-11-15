import { expect } from 'chai';

// Import the words function from words.js
import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
    it('Should convert the first character of a lowercase string to uppercase', () => {
        expect(upperFirst('hello')).to.equal('Hello');
        expect(upperFirst('world')).to.equal('World');
    });

    it('Should not modify an already uppercase string', () => {
        expect(upperFirst('HELLO')).to.equal('HELLO');
        expect(upperFirst('WORLD')).to.equal('WORLD');
    });

    it('Should handle an empty string', () => {
        expect(upperFirst('')).to.equal('');
        expect(upperFirst(' ')).to.equal(' ');
    });

    it('Should handle a string with only one character', () => {
        expect(upperFirst('a')).to.equal('A');
        expect(upperFirst('z')).to.equal('Z');
    });

    it('Should handle a string with leading whitespace', () => {
        expect(upperFirst('  hello')).to.equal('  hello');
    });

    it('Should handle a string with trailing whitespace', () => {
        expect(upperFirst('world  ')).to.equal('World  ');
    });

    it('Should handle a string with both leading and trailing whitespace', () => {
        expect(upperFirst('  test  ')).to.equal('  test  ');
    });

    it('Should handle special characters and numbers', () => {
        expect(upperFirst('123abc')).to.equal('123abc');
        expect(upperFirst('@test')).to.equal('@test');
        expect(upperFirst('🤣')).to.equal('🤣');
    });

    it('Should handle strings with accented characters', () => {
        expect(upperFirst('áccent')).to.equal('Áccent');
    });

    it('Should handle undefined and null inputs', () => {
        expect(upperFirst(undefined)).to.equal('');
        expect(upperFirst(null)).to.equal('');
    });

    it('Should handle a string with non-Latin characters', () => {
        const input = 'こんにちは世界';
        expect(upperFirst(input)).to.equal('こんにちは世界');
    });
});