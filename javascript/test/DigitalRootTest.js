const dr = require('../src/DigitalRoot.js');
const assert = require('assert');

describe('Test Sum Digits', () => {
    it('sum digits 1 and 6 should be 7', () => {
        assert.equal(dr.sumDigits(16), 7);
    });

    it('sum digit 2 should be 2', () => {
        assert.equal(dr.sumDigits(2), 2);
    });

    it('sum digits 4, 5 and 6 should be 6', () => {
        assert.equal(dr.sumDigits(456), 6);
    });

    it('sum digits 9, 4 and 2 should be 6', () => {
        assert.equal(dr.sumDigits(942), 6)
    });

    it('sum digits 1, 3, 2, 1, 8, and 9 should be 6', () => {
        assert.equal(dr.sumDigits(132189), 6)
    });

    it('sum digits 4, 9, 3, 1, 9 and 3 should be 2', () => {
        assert.equal(dr.sumDigits(493193), 2)
    });
});