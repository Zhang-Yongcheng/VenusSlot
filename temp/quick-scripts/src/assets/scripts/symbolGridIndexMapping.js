"use strict";
cc._RF.push(module, 'b60119mLBhMQby66QcdkI7P', 'symbolGridIndexMapping');
// scripts/symbolGridIndexMapping.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
// from(server)
// 0   1  2  3  4
// 5   6  7  8  9
// 10 11 12 13 14
// to(client)
// 0   3  6  9 12
// 1   4  7 10 13
// 2   5  8 11 14
var mapping = {
  0: 0,
  1: 3,
  2: 6,
  3: 9,
  4: 12,
  5: 1,
  6: 4,
  7: 7,
  8: 10,
  9: 13,
  10: 2,
  11: 5,
  12: 8,
  13: 11,
  14: 14
};
var _default = mapping;
exports["default"] = _default;
module.exports = exports["default"];

cc._RF.pop();