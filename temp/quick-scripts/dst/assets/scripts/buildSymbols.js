
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/buildSymbols.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4af37ximRlFnqqqfZsvqA7u', 'buildSymbols');
// scripts/buildSymbols.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
exports.setSymbol = setSymbol;

var _getSymbolAnchor = _interopRequireDefault(require("./getSymbolAnchor"));

var _getSymbolSprite = _interopRequireDefault(require("./getSymbolSprite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function setSymbol(colIndex, childIndex, symbolIndex) {
  var col = cc.find("Canvas/Game/Machine/Performance/Cols/" + (colIndex + 1));
  var child = col.getChildByName("" + (childIndex + 1));
  var sprite = child.getComponent(cc.Sprite);
  sprite.spriteFrame = (0, _getSymbolSprite["default"])(symbolIndex).spriteFrame;
}

function createSymbol(col, childIndex, symbolIndex, spacing) {
  var childName = childIndex < 0 ? "" + childIndex : "" + (childIndex + 1);
  var child = col.getChildByName(childName);

  if (child === null) {
    child = new cc.Node(childName);
    child.y = childIndex * spacing;
    col.addChild(child);
  }

  var sprite = child.getComponent(cc.Sprite);

  if (sprite === null) {
    sprite = child.addComponent(cc.Sprite);
    sprite.sizeMode = cc.Sprite.SizeMode.RAW;
  }

  sprite.spriteFrame = (0, _getSymbolSprite["default"])(symbolIndex).spriteFrame;
}

function buildSymbolCol(colTable, colIndex, spacing) {
  var col = cc.find("Canvas/Game/Machine/Performance/Cols/" + (colIndex + 1));

  for (var i = 0; i < colTable.length; i++) {
    createSymbol(col, i, colTable[i], spacing);
  }
}

var buildSymbols = function () {
  var spacing;
  return function buildSymbols(symbolColTable) {
    var anchorsNode = cc.find('Canvas/Game/Machine/Performance/Anchors');
    var colsNode = cc.find('Canvas/Game/Machine/Performance/Cols');

    for (var i = 1; i <= 5; i++) {
      var col = colsNode.getChildByName("" + i);
      var anchor = anchorsNode.getChildByName("" + i);
      col.x = anchor.x;
      col.y = anchor.getChildByName('3').y;
      col.baseY = col.y;
    }

    if (spacing === undefined) {
      var anchor1 = anchorsNode.getChildByName('1');
      spacing = Math.abs(anchor1.getChildByName('1').y - anchor1.getChildByName('2').y);
    }

    for (var _i = 0; _i < symbolColTable.length; _i++) {
      buildSymbolCol(symbolColTable[_i], _i, spacing);
    }
  };
}();

var _default = buildSymbols;
exports["default"] = _default;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnVpbGRTeW1ib2xzLmpzIl0sIm5hbWVzIjpbInNldFN5bWJvbCIsImNvbEluZGV4IiwiY2hpbGRJbmRleCIsInN5bWJvbEluZGV4IiwiY29sIiwiY2MiLCJmaW5kIiwiY2hpbGQiLCJnZXRDaGlsZEJ5TmFtZSIsInNwcml0ZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiY3JlYXRlU3ltYm9sIiwic3BhY2luZyIsImNoaWxkTmFtZSIsIk5vZGUiLCJ5IiwiYWRkQ2hpbGQiLCJhZGRDb21wb25lbnQiLCJzaXplTW9kZSIsIlNpemVNb2RlIiwiUkFXIiwiYnVpbGRTeW1ib2xDb2wiLCJjb2xUYWJsZSIsImkiLCJsZW5ndGgiLCJidWlsZFN5bWJvbHMiLCJzeW1ib2xDb2xUYWJsZSIsImFuY2hvcnNOb2RlIiwiY29sc05vZGUiLCJhbmNob3IiLCJ4IiwiYmFzZVkiLCJ1bmRlZmluZWQiLCJhbmNob3IxIiwiTWF0aCIsImFicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFTyxTQUFTQSxTQUFULENBQW1CQyxRQUFuQixFQUE2QkMsVUFBN0IsRUFBeUNDLFdBQXpDLEVBQXNEO0FBQzNELE1BQU1DLEdBQUcsR0FBR0MsRUFBRSxDQUFDQyxJQUFILDRDQUFnREwsUUFBUSxHQUFHLENBQTNELEVBQVo7QUFDQSxNQUFNTSxLQUFLLEdBQUdILEdBQUcsQ0FBQ0ksY0FBSixPQUFzQk4sVUFBVSxHQUFHLENBQW5DLEVBQWQ7QUFDQSxNQUFNTyxNQUFNLEdBQUdGLEtBQUssQ0FBQ0csWUFBTixDQUFtQkwsRUFBRSxDQUFDTSxNQUF0QixDQUFmO0FBQ0FGLEVBQUFBLE1BQU0sQ0FBQ0csV0FBUCxHQUFxQixpQ0FBZ0JULFdBQWhCLEVBQTZCUyxXQUFsRDtBQUNEOztBQUVELFNBQVNDLFlBQVQsQ0FBc0JULEdBQXRCLEVBQTJCRixVQUEzQixFQUF1Q0MsV0FBdkMsRUFB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QUNEOztBQUVELFNBQUssSUFBSVEsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR0csY0FBYyxDQUFDRixNQUFuQyxFQUEyQ0QsRUFBQyxFQUE1QyxFQUFnRDtBQUM5Q0YsTUFBQUEsY0FBYyxDQUFDSyxjQUFjLENBQUNILEVBQUQsQ0FBZixFQUFvQkEsRUFBcEIsRUFBdUJYLE9BQXZCLENBQWQ7QUFDRDtBQUNGLEdBbkJEO0FBb0JELENBdkJvQixFQUFyQjs7ZUF5QmVhIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0U3ltYm9sQW5jaG9yIGZyb20gJy4vZ2V0U3ltYm9sQW5jaG9yJztcclxuaW1wb3J0IGdldFN5bWJvbFNwcml0ZSBmcm9tICcuL2dldFN5bWJvbFNwcml0ZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3ltYm9sKGNvbEluZGV4LCBjaGlsZEluZGV4LCBzeW1ib2xJbmRleCkge1xyXG4gIGNvbnN0IGNvbCA9IGNjLmZpbmQoYENhbnZhcy9HYW1lL01hY2hpbmUvUGVyZm9ybWFuY2UvQ29scy8ke2NvbEluZGV4ICsgMX1gKTtcclxuICBjb25zdCBjaGlsZCA9IGNvbC5nZXRDaGlsZEJ5TmFtZShgJHtjaGlsZEluZGV4ICsgMX1gKTtcclxuICBjb25zdCBzcHJpdGUgPSBjaGlsZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBnZXRTeW1ib2xTcHJpdGUoc3ltYm9sSW5kZXgpLnNwcml0ZUZyYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTeW1ib2woY29sLCBjaGlsZEluZGV4LCBzeW1ib2xJbmRleCwgc3BhY2luZykge1xyXG4gIGNvbnN0IGNoaWxkTmFtZSA9IGNoaWxkSW5kZXggPCAwID8gYCR7Y2hpbGRJbmRleH1gIDogYCR7Y2hpbGRJbmRleCArIDF9YDtcclxuICBsZXQgY2hpbGQgPSBjb2wuZ2V0Q2hpbGRCeU5hbWUoY2hpbGROYW1lKTtcclxuICBpZiAoY2hpbGQgPT09IG51bGwpIHtcclxuICAgIGNoaWxkID0gbmV3IGNjLk5vZGUoY2hpbGROYW1lKTtcclxuICAgIGNoaWxkLnkgPSBjaGlsZEluZGV4ICogc3BhY2luZztcclxuICAgIGNvbC5hZGRDaGlsZChjaGlsZCk7XHJcbiAgfVxyXG5cclxuICBsZXQgc3ByaXRlID0gY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgaWYgKHNwcml0ZSA9PT0gbnVsbCkge1xyXG4gICAgc3ByaXRlID0gY2hpbGQuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBzcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xyXG4gIH1cclxuICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBnZXRTeW1ib2xTcHJpdGUoc3ltYm9sSW5kZXgpLnNwcml0ZUZyYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFN5bWJvbENvbChjb2xUYWJsZSwgY29sSW5kZXgsIHNwYWNpbmcpIHtcclxuICBjb25zdCBjb2wgPSBjYy5maW5kKGBDYW52YXMvR2FtZS9NYWNoaW5lL1BlcmZvcm1hbmNlL0NvbHMvJHtjb2xJbmRleCArIDF9YCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xUYWJsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgY3JlYXRlU3ltYm9sKGNvbCwgaSwgY29sVGFibGVbaV0sIHNwYWNpbmcpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYnVpbGRTeW1ib2xzID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgc3BhY2luZztcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGJ1aWxkU3ltYm9scyhzeW1ib2xDb2xUYWJsZSkge1xyXG4gICAgY29uc3QgYW5jaG9yc05vZGUgPSBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1BlcmZvcm1hbmNlL0FuY2hvcnMnKTtcclxuICAgIGNvbnN0IGNvbHNOb2RlID0gY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9QZXJmb3JtYW5jZS9Db2xzJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcclxuICAgICAgY29uc3QgY29sID0gY29sc05vZGUuZ2V0Q2hpbGRCeU5hbWUoYCR7aX1gKTtcclxuICAgICAgY29uc3QgYW5jaG9yID0gYW5jaG9yc05vZGUuZ2V0Q2hpbGRCeU5hbWUoYCR7aX1gKTtcclxuICAgICAgY29sLnggPSBhbmNob3IueDtcclxuICAgICAgY29sLnkgPSBhbmNob3IuZ2V0Q2hpbGRCeU5hbWUoJzMnKS55O1xyXG4gICAgICBjb2wuYmFzZVkgPSBjb2wueTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3BhY2luZyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGFuY2hvcjEgPSBhbmNob3JzTm9kZS5nZXRDaGlsZEJ5TmFtZSgnMScpO1xyXG4gICAgICBzcGFjaW5nID0gTWF0aC5hYnMoYW5jaG9yMS5nZXRDaGlsZEJ5TmFtZSgnMScpLnkgLSBhbmNob3IxLmdldENoaWxkQnlOYW1lKCcyJykueSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xDb2xUYWJsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBidWlsZFN5bWJvbENvbChzeW1ib2xDb2xUYWJsZVtpXSwgaSwgc3BhY2luZyk7XHJcbiAgICB9XHJcbiAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1aWxkU3ltYm9scztcclxuIl19