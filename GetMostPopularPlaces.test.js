import { expect } from "chai";
import { describe } from "mocha";
const getMostPopularPlaces = require('./GetMostPopularPlaces'); 

describe('getMostPopularPlaces', () => {
    it('should return the most popular place', () => {
        const result = getMostPopularPlaces('Analamahitsy', 'Analamahitsy', 'Itaosy', 'Behoririka', 'Itaosy', 'Itaosy');
        expect(result).to.equal('Itaosy Analamahitsy');
    });   
});
