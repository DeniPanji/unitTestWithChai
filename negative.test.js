import libraryFine from "./index.js";
import { expect, assert } from 'chai';


describe('libraryFine - Negative', function() {
    it('LF_004 - should return 0 for string input (year and month)', () => {
        const result = libraryFine(1, "2", "2022", 1, 2, 2023);
        expect(result).to.equal(0);
    });

    it('LF_005 - should return 0 for string input (day)', () => {
        const result = libraryFine("1", 2, 2022, 1, 2, 2023);
        expect(result).to.equal(0);
    });

    it('LF_003 - should return 0 for out-of-range month', () => {
        const result = libraryFine(1, 13, 2022, 1, 2, 2023);
        expect(result).to.equal(0);
    });

    it('LF_004 - should return 0 for string input (year)', () => {
        const result = libraryFine(1, 2, "2022", 1, 2, 2023);
        expect(result).to.equal(0);
    });
    
    it('LF_005 - should return 0 for string input (month)', () => {
        const result = libraryFine(1, "2", 2022, 1, 2, 2023);
        expect(result).to.equal(0);
    });
});