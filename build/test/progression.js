var _progression = require('../js/progression');

var _progression2 = _interopRequireDefault(_progression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var assert = require('chai').assert.assert;

describe('progression', function () {
  it('accepts two integers', function () {
    assert.isOK((0, _progression2['default'])(2, 23));
  });
  it('outputs an array', function () {
    assert.isArray((0, _progression2['default'])(2, 23));
  });
  it('outputs this result', function () {
    var result = [[2, 5, 8, 11, 14, 17, 20, 23], [2, 6, 18]];
    assert.isArray((0, _progression2['default'])(2, 23), result);
  });
});
//# sourceMappingURL=C:\Users\Public\Documents\web_develop\Andela-Challenge\build\test\progression.js.map