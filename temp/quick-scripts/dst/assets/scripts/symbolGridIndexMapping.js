
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/symbolGridIndexMapping.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3ltYm9sR3JpZEluZGV4TWFwcGluZy5qcyJdLCJuYW1lcyI6WyJtYXBwaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE9BQU8sR0FBRztBQUNkLEtBQUcsQ0FEVztBQUVkLEtBQUcsQ0FGVztBQUdkLEtBQUcsQ0FIVztBQUlkLEtBQUcsQ0FKVztBQUtkLEtBQUcsRUFMVztBQU1kLEtBQUcsQ0FOVztBQU9kLEtBQUcsQ0FQVztBQVFkLEtBQUcsQ0FSVztBQVNkLEtBQUcsRUFUVztBQVVkLEtBQUcsRUFWVztBQVdkLE1BQUksQ0FYVTtBQVlkLE1BQUksQ0FaVTtBQWFkLE1BQUksQ0FiVTtBQWNkLE1BQUksRUFkVTtBQWVkLE1BQUk7QUFmVSxDQUFoQjtlQWtCZUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZyb20oc2VydmVyKVxyXG4vLyAwICAgMSAgMiAgMyAgNFxyXG4vLyA1ICAgNiAgNyAgOCAgOVxyXG4vLyAxMCAxMSAxMiAxMyAxNFxyXG5cclxuLy8gdG8oY2xpZW50KVxyXG4vLyAwICAgMyAgNiAgOSAxMlxyXG4vLyAxICAgNCAgNyAxMCAxM1xyXG4vLyAyICAgNSAgOCAxMSAxNFxyXG5jb25zdCBtYXBwaW5nID0ge1xyXG4gIDA6IDAsXHJcbiAgMTogMyxcclxuICAyOiA2LFxyXG4gIDM6IDksXHJcbiAgNDogMTIsXHJcbiAgNTogMSxcclxuICA2OiA0LFxyXG4gIDc6IDcsXHJcbiAgODogMTAsXHJcbiAgOTogMTMsXHJcbiAgMTA6IDIsXHJcbiAgMTE6IDUsXHJcbiAgMTI6IDgsXHJcbiAgMTM6IDExLFxyXG4gIDE0OiAxNFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFwcGluZztcclxuIl19