import { expect } from "chai";
import { describe } from "mocha";
const removeWords = require('./removeWords'); 

describe('removeWords', () => {
    it('should remove specified words from the string', () => {
        const result = removeWords('Hello, ceci est un test', ['ceci', 'un']);
        expect(result).to.equal('Hello, est test');
    });

    it('should not remove words with different casing', () => {
        const result = removeWords('Hello Java', ['java']);
        expect(result).to.equal('Hello Java');
    });

    it('should return the original string if no same words ', () => {
        const result = removeWords('Hello Java', ['un']);
        expect(result).to.equal('Hello world');
    });

});
