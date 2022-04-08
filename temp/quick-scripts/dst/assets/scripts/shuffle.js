
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/shuffle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3088bIf7hFLLb+KojLFSOpO', 'shuffle');
// scripts/shuffle.js

"use strict";

exports.__esModule = true;
exports["default"] = shuffle;

function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2h1ZmZsZS5qcyJdLCJuYW1lcyI6WyJzaHVmZmxlIiwiYXJyIiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCO0FBQ25DLE9BQUssSUFBSUMsQ0FBQyxHQUFHRCxHQUFHLENBQUNFLE1BQUosR0FBYSxDQUExQixFQUE2QkQsQ0FBQyxHQUFHLENBQWpDLEVBQW9DQSxDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDLFFBQU1FLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkwsQ0FBQyxHQUFHLENBQXJCLENBQVgsQ0FBVjtBQUNBLFFBQU1NLENBQUMsR0FBR1AsR0FBRyxDQUFDQyxDQUFELENBQWI7QUFDQUQsSUFBQUEsR0FBRyxDQUFDQyxDQUFELENBQUgsR0FBU0QsR0FBRyxDQUFDRyxDQUFELENBQVo7QUFDQUgsSUFBQUEsR0FBRyxDQUFDRyxDQUFELENBQUgsR0FBU0ksQ0FBVDtBQUNEO0FBQ0YiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNodWZmbGUoYXJyKSB7XHJcbiAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICBjb25zdCB0ID0gYXJyW2ldO1xyXG4gICAgYXJyW2ldID0gYXJyW2pdO1xyXG4gICAgYXJyW2pdID0gdDtcclxuICB9XHJcbn1cclxuIl19