const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('Distance points tests', () => {

  describe('Normal hill size tests', () => {
    it('Distance less than K-point ', () => {
      const actual = calculateDistancePoints(93, 109, 98);

      const expected = 50;

      assert.equal(actual, expected);
    })
    it('Distance less than K-point ', () => {
      const actual = calculateDistancePoints(93, 109, 98);

      const expected = 50;

      assert.equal(actual, expected);
    })
    it('Distance equal K-point', () => {
      const actual = calculateDistancePoints(98, 109, 98);

      const expected = 60;

      assert.equal(actual, expected);
    })
  })

  describe('Large hill size tests', () => {
    it('Distance less than K-point ', () => {
      const actual = calculateDistancePoints(114.5, 134, 120);

      const expected = 50.1;

      assert.equal(actual, expected);
    })
    it('Distance more than K-point', () => {
      const actual = calculateDistancePoints(133, 134, 120);

      const expected = 83.4;

      assert.equal(actual, expected);
    })
    it('Distance equal K-point', () => {
      const actual = calculateDistancePoints(120, 134, 120);

      const expected = 60;

      assert.equal(actual, expected);
    })
  })

  describe('Ski flying hill size tests', () => {
    it('Distance less than K-point ', () => {
      const actual = calculateDistancePoints(144, 225, 200);

      const expected = 52.8;

      assert.equal(actual, expected);
    })
    it('Distance more than K-point', () => {
      const actual = calculateDistancePoints(227.5, 225, 200);

      const expected = 153;

      assert.equal(actual, expected);
    })
    it('Distance equal K-point', () => {
      const actual = calculateDistancePoints(200, 225, 200);

      const expected = 120;

      assert.equal(actual, expected);
    })
  })

  describe('More tests', () => {
    it("Hill size can't equal 0m", () => {
      const actual = calculateDistancePoints(100, 0, 95);

      const expected = 'Please enter real hill size';

      assert.equal(actual, expected);
    })
    it("Hill size can't be less than 0m", () => {
      const actual = calculateDistancePoints(227.5, -5, 200);

      const expected = 'Please enter real hill size';

      assert.equal(actual, expected);
    })
    it("Hill size can't be more than 240m", () => {
      const actual = calculateDistancePoints(200, 241, 200);

      const expected = 'Please enter real hill size';

      assert.equal(actual, expected);
    })
  })
});
