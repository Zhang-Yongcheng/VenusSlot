
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/getSymbolSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '228bf6KrtxN0qHJ1bjh23br', 'getSymbolSprite');
// scripts/getSymbolSprite.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var getSymbolSprite = function () {
  var cached = {};
  return function getSymbolSprite(symbolIndex) {
    var path = "Canvas/Game/Machine/Performance/Symbols/" + (symbolIndex + 1);
    var symbolSprite = cached[path];

    if (symbolSprite === undefined) {
      symbolSprite = cached[path] = cc.find(path).getComponent(cc.Sprite);
    }

    return symbolSprite;
  };
}();

var _default = getSymbolSprite;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2V0U3ltYm9sU3ByaXRlLmpzIl0sIm5hbWVzIjpbImdldFN5bWJvbFNwcml0ZSIsImNhY2hlZCIsInN5bWJvbEluZGV4IiwicGF0aCIsInN5bWJvbFNwcml0ZSIsInVuZGVmaW5lZCIsImNjIiwiZmluZCIsImdldENvbXBvbmVudCIsIlNwcml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxlQUFlLEdBQUksWUFBWTtBQUNuQyxNQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUVBLFNBQU8sU0FBU0QsZUFBVCxDQUF5QkUsV0FBekIsRUFBc0M7QUFDM0MsUUFBTUMsSUFBSSxpREFBOENELFdBQVcsR0FBRyxDQUE1RCxDQUFWO0FBQ0EsUUFBSUUsWUFBWSxHQUFHSCxNQUFNLENBQUNFLElBQUQsQ0FBekI7O0FBQ0EsUUFBSUMsWUFBWSxLQUFLQyxTQUFyQixFQUFnQztBQUM5QkQsTUFBQUEsWUFBWSxHQUFHSCxNQUFNLENBQUNFLElBQUQsQ0FBTixHQUFlRyxFQUFFLENBQUNDLElBQUgsQ0FBUUosSUFBUixFQUFjSyxZQUFkLENBQTJCRixFQUFFLENBQUNHLE1BQTlCLENBQTlCO0FBQ0Q7O0FBQ0QsV0FBT0wsWUFBUDtBQUNELEdBUEQ7QUFRRCxDQVh1QixFQUF4Qjs7ZUFhZUoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFN5bWJvbFNwcml0ZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY2FjaGVkID0ge307XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiBnZXRTeW1ib2xTcHJpdGUoc3ltYm9sSW5kZXgpIHtcclxuICAgIGNvbnN0IHBhdGggPSBgQ2FudmFzL0dhbWUvTWFjaGluZS9QZXJmb3JtYW5jZS9TeW1ib2xzLyR7c3ltYm9sSW5kZXggKyAxfWA7XHJcbiAgICBsZXQgc3ltYm9sU3ByaXRlID0gY2FjaGVkW3BhdGhdO1xyXG4gICAgaWYgKHN5bWJvbFNwcml0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHN5bWJvbFNwcml0ZSA9IGNhY2hlZFtwYXRoXSA9IGNjLmZpbmQocGF0aCkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3ltYm9sU3ByaXRlO1xyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRTeW1ib2xTcHJpdGU7XHJcbiJdfQ==