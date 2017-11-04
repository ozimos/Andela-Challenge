import progression from '../js/progression';

const { assert } = require('chai').assert;

describe('progression', () => {
  it('accepts two integers', () => {
    assert.exists(progression(2, 23));
  });
  it('outputs this result', () => {
    const result = '[2, 5, 8, 11, 14, 17, 20, 23], [2, 6, 18]';
    assert.equal(progression(2, 23), result);
  });
});
