import { expect } from 'chai';

// Import the words function from words.js
import words from '../src/words.js';

describe('words function', () => {
    it('Should split a string into an array of words using default pattern', () => {
      const result = words('fred, barney, & pebbles');
      expect(result).to.deep.equal(['fred', 'barney', 'pebbles']);
    });
  
    it('Should split a string into an array of words using a custom pattern', () => {
      const result = words('fred, barney, & pebbles', /[^, ]+/g);
      expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    });
  
    it('Should handle an empty string', () => {
      const result = words('');
      expect(result).to.deep.equal([]);
    });
  
    it('Should handle a string with only spaces', () => {
      const result = words('   ');
      expect(result).to.deep.equal([]);
    });
  
    it('Should handle a string with special characters', () => {
      const result = words('!@#$%^&*()_+{}[]|;:",.<>?`~');
      expect(result).to.deep.equal([]);
    });
  });