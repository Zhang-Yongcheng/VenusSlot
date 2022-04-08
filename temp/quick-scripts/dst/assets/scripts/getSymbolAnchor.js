
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/getSymbolAnchor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0de66QVMBJKYV/WAVPXtub', 'getSymbolAnchor');
// scripts/getSymbolAnchor.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var getSymbolAnchor = function () {
  var cached = {};
  return function getSymbolAnchor(symbolGridIndex) {
    var col = Math.floor(symbolGridIndex / 3);
    var row = symbolGridIndex % 3;
    var path = "Canvas/Game/Machine/Performance/Anchors/" + (col + 1) + "/" + (row + 1);
    var node = cached[path];

    if (node === undefined) {
      node = cached[path] = cc.find(path);
    }

    return node;
  };
}();

var _default = getSymbolAnchor;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2V0U3ltYm9sQW5jaG9yLmpzIl0sIm5hbWVzIjpbImdldFN5bWJvbEFuY2hvciIsImNhY2hlZCIsInN5bWJvbEdyaWRJbmRleCIsImNvbCIsIk1hdGgiLCJmbG9vciIsInJvdyIsInBhdGgiLCJub2RlIiwidW5kZWZpbmVkIiwiY2MiLCJmaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGVBQWUsR0FBSSxZQUFZO0FBQ25DLE1BQU1DLE1BQU0sR0FBRyxFQUFmO0FBRUEsU0FBTyxTQUFTRCxlQUFULENBQXlCRSxlQUF6QixFQUEwQztBQUMvQyxRQUFNQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxlQUFlLEdBQUcsQ0FBN0IsQ0FBWjtBQUNBLFFBQU1JLEdBQUcsR0FBR0osZUFBZSxHQUFHLENBQTlCO0FBQ0EsUUFBTUssSUFBSSxpREFBOENKLEdBQUcsR0FBRyxDQUFwRCxXQUF5REcsR0FBRyxHQUFHLENBQS9ELENBQVY7QUFDQSxRQUFJRSxJQUFJLEdBQUdQLE1BQU0sQ0FBQ00sSUFBRCxDQUFqQjs7QUFDQSxRQUFJQyxJQUFJLEtBQUtDLFNBQWIsRUFBd0I7QUFDdEJELE1BQUFBLElBQUksR0FBR1AsTUFBTSxDQUFDTSxJQUFELENBQU4sR0FBZUcsRUFBRSxDQUFDQyxJQUFILENBQVFKLElBQVIsQ0FBdEI7QUFDRDs7QUFDRCxXQUFPQyxJQUFQO0FBQ0QsR0FURDtBQVVELENBYnVCLEVBQXhCOztlQWVlUiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0U3ltYm9sQW5jaG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjYWNoZWQgPSB7fTtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFN5bWJvbEFuY2hvcihzeW1ib2xHcmlkSW5kZXgpIHtcclxuICAgIGNvbnN0IGNvbCA9IE1hdGguZmxvb3Ioc3ltYm9sR3JpZEluZGV4IC8gMyk7XHJcbiAgICBjb25zdCByb3cgPSBzeW1ib2xHcmlkSW5kZXggJSAzO1xyXG4gICAgY29uc3QgcGF0aCA9IGBDYW52YXMvR2FtZS9NYWNoaW5lL1BlcmZvcm1hbmNlL0FuY2hvcnMvJHtjb2wgKyAxfS8ke3JvdyArIDF9YDtcclxuICAgIGxldCBub2RlID0gY2FjaGVkW3BhdGhdO1xyXG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBub2RlID0gY2FjaGVkW3BhdGhdID0gY2MuZmluZChwYXRoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlO1xyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRTeW1ib2xBbmNob3I7XHJcbiJdfQ==