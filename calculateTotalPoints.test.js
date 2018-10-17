const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('Total points tests', () => {

  describe('Compare with jumps in Planica', () => {
    it('Peter Prevc jump', () => {
      const actual = calculateTotalPoints(223, 225, 200, [18.5, 18.5, 18.5, 19.0, 18.5], -6, 8.7);

      const expected = 205.8;

      assert.equal(actual, expected);
    })
    it('Kamil Stoch jump', () => {
      const actual = calculateTotalPoints(208.5, 225, 200, [17.5, 17.5, 17.5, 17.0, 17.0], -2.7, 0);

      const expected = 179.5;

      assert.equal(actual, expected);
    })
  })

  describe('Compare with jumps in PyeongChang', () => {
    it('Stefan Hula jump', () => {
      const actual = calculateTotalPoints(111, 109, 98, [19.0, 19.5, 19.0, 19.0, 19.0], -14.4, 3.2);

      const expected = 131.8;

      assert.equal(actual, expected);
    })
    it('Daiki Ito jump', () => {
      const actual = calculateTotalPoints(103, 109, 98, [17.5, 17.5, 18.5, 18.5, 18.5], -14.2, 0);

      const expected = 110.3;

      assert.equal(actual, expected);
    })
  })

  describe('Compare with jumps in Zakopane', () => {
    it('Jurij Tepes jump', () => {
      const actual = calculateTotalPoints(125.5, 134, 120, [18.0, 18.0, 18.5, 18.5, 18.0], -4, 0);

      const expected = 120.4;

      assert.equal(actual, expected);
    })
    it('Tom Hilde jump', () => {
      const actual = calculateTotalPoints(122.5, 134, 120, [17.5, 17.0, 18.0, 18.0, 18.0], -5.3, 0);

      const expected = 112.7;

      assert.equal(actual, expected);
    })
  })
});
