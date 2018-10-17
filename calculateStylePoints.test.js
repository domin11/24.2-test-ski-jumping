const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('Style points tests', () => {

  it('Random notes', () => {
    const actual = calculateStylePoints([12.5, 14.5, 18, 19.5, 20]);

    const expected = 52;

    assert.equal(actual, expected);
  })
  it('All the same notes', () => {
    const actual = calculateStylePoints([20, 20, 20, 20, 20]);

    const expected = 60;

    assert.equal(actual, expected);
  })
  it('One different note', () => {
    const actual = calculateStylePoints([19, 19, 19, 19, 11.5]);

    const expected = 57;

    assert.equal(actual, expected);
  })
  it('Two different notes', () => {
    const actual = calculateStylePoints([19, 17.5, 19, 19, 11.5]);

    const expected = 55.5;

    assert.equal(actual, expected);
  })
});
