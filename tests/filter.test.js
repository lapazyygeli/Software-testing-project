import { expect } from 'chai';

import filter from '../src/filter.js';


describe('Filter function', () => {
    it('Should filter elements based on the given predicate', () => {
        const users = [
            { 'user': 'barney', 'active': true },
          { 'user': 'fred',   'active': false }
        ];
        
        const filteredUsers = filter(users, ({ active }) => active);
        
        expect(filteredUsers).to.deep.equal([{ 'user': 'barney', 'active': true }]);
    });

    it('Should handle an empty array', () => {
        expect(filter([], () => true)).to.deep.equal([[]]);
    });

    it('Should handle an empty predicate', () => {
        const numbers = [1, 2, 3, 4, 5];

        expect(filter(numbers, () => {})).to.equal(numbers);
    });

    it('Should handle a predicate that filters all elements', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = filter(numbers, () => false);
        expect(result).to.deep.equal([[]]);
    });

    it('Filter should work for array of arrays', () => {
        const arrayOfArrays = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ];
    
        const filteredArrays = filter(arrayOfArrays, arr => arr.reduce((sum, num) => sum + num, 0) > 6);
    
        expect(filteredArrays).to.deep.equal([
          [4, 5, 6],
          [7, 8, 9]
        ]);
    });   

    it('Should handle a predicate that does not return Boolean', () => {
        const numbers = [1, 2, 3, 4, 5];

        const result = filter(numbers, () => 'im not Boolean');

        expect(result).to.deep.equal(numbers);
        
    });
});