
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/requestGameResult.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53e61tB6ghOP4phobMRUcRW', 'requestGameResult');
// scripts/requestGameResult.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _co = _interopRequireDefault(require("./co.cc"));

var _buildSymbols = require("./buildSymbols");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getNodeBoundingBox(node) {
  node.parent._updateWorldMatrix();

  var width = node._contentSize.width;
  var height = node._contentSize.height;
  var rect = cc.rect(-node._anchorPoint.x * width, -node._anchorPoint.y * height, width, height);

  node._calculWorldMatrix();

  rect.transformMat4(rect, node._worldMatrix);
  return rect;
}

var requestGameResult = function () {
  var coGroup = _co["default"].CoroutineGroup('RequestGameResult', {
    priority: _co["default"].CoroutineGroup.NormalPriority + 1
  });

  function updateResult(k) {
    var symbolDataList = cc.store.symbolDataList;
    var iGrid = cc.store.gameResult.iGrid;

    for (var i = 0; i < symbolDataList.length; i++) {
      for (var j = 0; j < 3; j++) {
        var symbolIndex = iGrid[i + 5 * j];
        symbolDataList[i][k - j] = symbolIndex;
        (0, _buildSymbols.setSymbol)(i, k - j, symbolIndex);
      }
    }
  }

  function setRedist(cols, name, value) {
    for (var i = 0; i < cols.childrenCount; i++) {
      var col = cols.getChildByName("" + (i + 1));
      col[name] = value;
    }
  }

  return function requestGameResult() {
    var cols = cc.find('Canvas/Game/Machine/Performance/Cols');
    setRedist(cols, 'redist', 0);
    setRedist(cols, 'redist2', 0); // coGroup.start(function* () {
    //   const colIndex = 0;
    //   const col = cols.getChildByName(`${colIndex + 1}`);
    //   const colsBox = getNodeBoundingBox(cols);
    //   while (true) {
    //     // const seconds = 1 + Math.floor( Math.random() * 5 );
    //     // yield co.waitForSeconds(seconds);
    //     const symbolBox = getNodeBoundingBox(col.children[col.childrenCount - 3]);
    //     if (colsBox.intersects(symbolBox) === true) {
    //       while (true) {
    //         const symbolBox = getNodeBoundingBox(col.children[3]);
    //         if (colsBox.intersects(symbolBox) === true) {
    //           break;
    //         }
    //         yield;
    //       }
    //       const iGrid = new Array(15);
    //       const iLine = new Array(9);
    //       const iFrame = new Array(9);
    //       const WinPointLine = new Array(9);
    //       const WinTotalPoint = 0;
    //       for (let i = 0; i < 9; i++) {
    //         // iLine[i] = Math.random() > 0.85 ? 1 : 0;
    //         iLine[i] = 0;
    //         iFrame[i] = 3 + Math.floor(Math.random() * 3);
    //       }
    //       for (let i = 0; i < 15; i++) {
    //         iGrid[i] = Math.floor(Math.random() * 11);
    //       }
    //       cc.store.gameResult = { iGrid, iLine, iFrame, WinPointLine, WinTotalPoint };
    //       cc.store.gameResultGotStatus = 2;
    //       break;
    //     }
    //     yield;
    //   }
    // });

    cc.store.gameResultGotStatus = 1;
    var type = cc.store.gameResult.type;

    if (type == 2) {
      var _cc$store;

      (_cc$store = cc.store) == null ? void 0 : _cc$store.gameServer.GetPI().sendData(3162, 0);
    } else {
      var _cc$store2;

      (_cc$store2 = cc.store) == null ? void 0 : _cc$store2.gameServer.GetPI().sendData(3162, cc.store.currentBet);
    }

    console.log(3162);
    coGroup.start( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var colIndex, col, colsBox, byeond;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              colIndex = 0;
              col = cols.getChildByName("" + (colIndex + 1));
              colsBox = getNodeBoundingBox(cols);
              byeond = false;

            case 4:
              if (!true) {
                _context2.next = 28;
                break;
              }

              if (!(cc.store.gameResultGotStatus === 2)) {
                _context2.next = 23;
                break;
              }

              if (!(colsBox.intersects(getNodeBoundingBox(col.children[col.childrenCount - 3])) === true)) {
                _context2.next = 14;
                break;
              }

              updateResult(5);
              setRedist(cols, 'redist', 3);
              cc.store.gameResultGotStatus = 3;
              _context2.next = 12;
              return _co["default"].waitUntil(function () {
                return colsBox.intersects(getNodeBoundingBox(col.children[3])) === true;
              });

            case 12:
              _context2.next = 19;
              break;

            case 14:
              if (!(byeond === true || cc.store.playing === false)) {
                _context2.next = 18;
                break;
              }

              return _context2.delegateYield( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var t, t1, t2;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        t = col.childrenCount - 4;

                        while (colsBox.intersects(getNodeBoundingBox(col.children[--t])) !== true) {
                          ;
                        }

                        t1 = t + 3;
                        updateResult(t1);
                        t2 = t1 - 2;
                        setRedist(cols, 'redist2', t2);
                        cc.store.gameResultGotStatus = 3;
                        _context.next = 9;
                        return _co["default"].waitUntil(function () {
                          return colsBox.intersects(getNodeBoundingBox(col.children[t2])) === true;
                        });

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })(), "t0", 16);

            case 16:
              _context2.next = 19;
              break;

            case 18:
              cc.store.gameResultGotStatus = 3;

            case 19:
              updateResult(cc.store.symbolDataList[colIndex].length - 1);
              return _context2.abrupt("break", 28);

            case 23:
              if (byeond === false) {
                byeond = colsBox.intersects(getNodeBoundingBox(col.children[col.childrenCount - 3]));
              }

            case 24:
              _context2.next = 26;
              return;

            case 26:
              _context2.next = 4;
              break;

            case 28:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
  };
}();

var _default = requestGameResult;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccmVxdWVzdEdhbWVSZXN1bHQuanMiXSwibmFtZXMiOlsiZ2V0Tm9kZUJvdW5kaW5nQm94Iiwibm9kZSIsInBhcmVudCIsIl91cGRhdGVXb3JsZE1hdHJpeCIsIndpZHRoIiwiX2NvbnRlbnRTaXplIiwiaGVpZ2h0IiwicmVjdCIsImNjIiwiX2FuY2hvclBvaW50IiwieCIsInkiLCJfY2FsY3VsV29ybGRNYXRyaXgiLCJ0cmFuc2Zvcm1NYXQ0IiwiX3dvcmxkTWF0cml4IiwicmVxdWVzdEdhbWVSZXN1bHQiLCJjb0dyb3VwIiwiY28iLCJDb3JvdXRpbmVHcm91cCIsInByaW9yaXR5IiwiTm9ybWFsUHJpb3JpdHkiLCJ1cGRhdGVSZXN1bHQiLCJrIiwic3ltYm9sRGF0YUxpc3QiLCJzdG9yZSIsImlHcmlkIiwiZ2FtZVJlc3VsdCIsImkiLCJsZW5ndGgiLCJqIiwic3ltYm9sSW5kZXgiLCJzZXRSZWRpc3QiLCJjb2xzIiwibmFtZSIsInZhbHVlIiwiY2hpbGRyZW5Db3VudCIsImNvbCIsImdldENoaWxkQnlOYW1lIiwiZmluZCIsImdhbWVSZXN1bHRHb3RTdGF0dXMiLCJ0eXBlIiwiZ2FtZVNlcnZlciIsIkdldFBJIiwic2VuZERhdGEiLCJjdXJyZW50QmV0IiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwiY29sSW5kZXgiLCJjb2xzQm94IiwiYnllb25kIiwiaW50ZXJzZWN0cyIsImNoaWxkcmVuIiwid2FpdFVudGlsIiwicGxheWluZyIsInQiLCJ0MSIsInQyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsU0FBU0Esa0JBQVQsQ0FBNEJDLElBQTVCLEVBQWtDO0FBQ2hDQSxFQUFBQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUMsa0JBQVo7O0FBRUEsTUFBSUMsS0FBSyxHQUFHSCxJQUFJLENBQUNJLFlBQUwsQ0FBa0JELEtBQTlCO0FBQ0EsTUFBSUUsTUFBTSxHQUFHTCxJQUFJLENB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QUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBNEJOakQsY0FBQUEsRUFBRSxDQUFDZ0IsS0FBSCxDQUFTZSxtQkFBVCxHQUErQixDQUEvQjs7QUE1Qk07QUE4QlJsQixjQUFBQSxZQUFZLENBQUNiLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FBU0QsY0FBVCxDQUF3QnlCLFFBQXhCLEVBQWtDcEIsTUFBbEMsR0FBMkMsQ0FBNUMsQ0FBWjtBQTlCUTs7QUFBQTtBQWlDUixrQkFBSXNCLE1BQU0sS0FBSyxLQUFmLEVBQXNCO0FBQ3BCQSxnQkFBQUEsTUFBTSxHQUFHRCxPQUFPLENBQUNFLFVBQVIsQ0FBbUJuRCxrQkFBa0IsQ0FBQ29DLEdBQUcsQ0FBQ2dCLFFBQUosQ0FBYWhCLEdBQUcsQ0FBQ0QsYUFBSixHQUFvQixDQUFqQyxDQUFELENBQXJDLENBQVQ7QUFDRDs7QUFuQ087QUFBQTtBQXFDVjs7QUFyQ1U7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWQ7QUF3Q0QsR0FyR0Q7QUFzR0QsQ0E1SHlCLEVBQTFCOztlQThIZXBCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY28gZnJvbSAnLi9jby5jYyc7XHJcbmltcG9ydCB7IHNldFN5bWJvbCB9IGZyb20gJy4vYnVpbGRTeW1ib2xzJztcclxuXHJcbmZ1bmN0aW9uIGdldE5vZGVCb3VuZGluZ0JveChub2RlKSB7XHJcbiAgbm9kZS5wYXJlbnQuX3VwZGF0ZVdvcmxkTWF0cml4KCk7XHJcblxyXG4gIGxldCB3aWR0aCA9IG5vZGUuX2NvbnRlbnRTaXplLndpZHRoO1xyXG4gIGxldCBoZWlnaHQgPSBub2RlLl9jb250ZW50U2l6ZS5oZWlnaHQ7XHJcbiAgbGV0IHJlY3QgPSBjYy5yZWN0KC1ub2RlLl9hbmNob3JQb2ludC54ICogd2lkdGgsIC1ub2RlLl9hbmNob3JQb2ludC55ICogaGVpZ2h0LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgbm9kZS5fY2FsY3VsV29ybGRNYXRyaXgoKTtcclxuICByZWN0LnRyYW5zZm9ybU1hdDQocmVjdCwgbm9kZS5fd29ybGRNYXRyaXgpO1xyXG4gIHJldHVybiByZWN0O1xyXG59XHJcblxyXG5jb25zdCByZXF1ZXN0R2FtZVJlc3VsdCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY29Hcm91cCA9IGNvLkNvcm91dGluZUdyb3VwKCdSZXF1ZXN0R2FtZVJlc3VsdCcsIHsgcHJpb3JpdHk6IGNvLkNvcm91dGluZUdyb3VwLk5vcm1hbFByaW9yaXR5ICsgMSB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlUmVzdWx0KGspIHtcclxuICAgIGNvbnN0IHsgc3ltYm9sRGF0YUxpc3QgfSA9IGNjLnN0b3JlO1xyXG4gICAgY29uc3QgeyBpR3JpZCB9ID0gY2Muc3RvcmUuZ2FtZVJlc3VsdDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9sRGF0YUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICBjb25zdCBzeW1ib2xJbmRleCA9IGlHcmlkW2kgKyA1ICogal07XHJcbiAgICAgICAgc3ltYm9sRGF0YUxpc3RbaV1bayAtIGpdID0gc3ltYm9sSW5kZXg7XHJcbiAgICAgICAgc2V0U3ltYm9sKGksIGsgLSBqLCBzeW1ib2xJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFJlZGlzdChjb2xzLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCBjb2wgPSBjb2xzLmdldENoaWxkQnlOYW1lKGAke2kgKyAxfWApO1xyXG4gICAgICBjb2xbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0R2FtZVJlc3VsdCgpIHtcclxuICAgIGNvbnN0IGNvbHMgPSBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1BlcmZvcm1hbmNlL0NvbHMnKTtcclxuXHJcbiAgICBzZXRSZWRpc3QoY29scywgJ3JlZGlzdCcsIDApO1xyXG4gICAgc2V0UmVkaXN0KGNvbHMsICdyZWRpc3QyJywgMCk7XHJcblxyXG4gICAgLy8gY29Hcm91cC5zdGFydChmdW5jdGlvbiogKCkge1xyXG4gICAgLy8gICBjb25zdCBjb2xJbmRleCA9IDA7XHJcbiAgICAvLyAgIGNvbnN0IGNvbCA9IGNvbHMuZ2V0Q2hpbGRCeU5hbWUoYCR7Y29sSW5kZXggKyAxfWApO1xyXG4gICAgLy8gICBjb25zdCBjb2xzQm94ID0gZ2V0Tm9kZUJvdW5kaW5nQm94KGNvbHMpO1xyXG5cclxuICAgIC8vICAgd2hpbGUgKHRydWUpIHtcclxuICAgIC8vICAgICAvLyBjb25zdCBzZWNvbmRzID0gMSArIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiA1ICk7XHJcbiAgICAvLyAgICAgLy8geWllbGQgY28ud2FpdEZvclNlY29uZHMoc2Vjb25kcyk7XHJcblxyXG4gICAgLy8gICAgIGNvbnN0IHN5bWJvbEJveCA9IGdldE5vZGVCb3VuZGluZ0JveChjb2wuY2hpbGRyZW5bY29sLmNoaWxkcmVuQ291bnQgLSAzXSk7XHJcbiAgICAvLyAgICAgaWYgKGNvbHNCb3guaW50ZXJzZWN0cyhzeW1ib2xCb3gpID09PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBzeW1ib2xCb3ggPSBnZXROb2RlQm91bmRpbmdCb3goY29sLmNoaWxkcmVuWzNdKTtcclxuICAgIC8vICAgICAgICAgaWYgKGNvbHNCb3guaW50ZXJzZWN0cyhzeW1ib2xCb3gpID09PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgeWllbGQ7XHJcbiAgICAvLyAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgY29uc3QgaUdyaWQgPSBuZXcgQXJyYXkoMTUpO1xyXG4gICAgLy8gICAgICAgY29uc3QgaUxpbmUgPSBuZXcgQXJyYXkoOSk7XHJcbiAgICAvLyAgICAgICBjb25zdCBpRnJhbWUgPSBuZXcgQXJyYXkoOSk7XHJcbiAgICAvLyAgICAgICBjb25zdCBXaW5Qb2ludExpbmUgPSBuZXcgQXJyYXkoOSk7XHJcbiAgICAvLyAgICAgICBjb25zdCBXaW5Ub3RhbFBvaW50ID0gMDtcclxuXHJcbiAgICAvLyAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAvLyBpTGluZVtpXSA9IE1hdGgucmFuZG9tKCkgPiAwLjg1ID8gMSA6IDA7XHJcbiAgICAvLyAgICAgICAgIGlMaW5lW2ldID0gMDtcclxuICAgIC8vICAgICAgICAgaUZyYW1lW2ldID0gMyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgLy8gICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBpR3JpZFtpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKTtcclxuICAgIC8vICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICBjYy5zdG9yZS5nYW1lUmVzdWx0ID0geyBpR3JpZCwgaUxpbmUsIGlGcmFtZSwgV2luUG9pbnRMaW5lLCBXaW5Ub3RhbFBvaW50IH07XHJcblxyXG4gICAgLy8gICAgICAgY2Muc3RvcmUuZ2FtZVJlc3VsdEdvdFN0YXR1cyA9IDI7XHJcbiAgICAvLyAgICAgICBicmVhaztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgeWllbGQ7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGNjLnN0b3JlLmdhbWVSZXN1bHRHb3RTdGF0dXMgPSAxO1xyXG5cclxuICAgIGNvbnN0IHt0eXBlfSA9IGNjLnN0b3JlLmdhbWVSZXN1bHQ7XHJcbiAgICBpZih0eXBlPT0yKXtcclxuICAgICAgY2Muc3RvcmU/LmdhbWVTZXJ2ZXIuR2V0UEkoKS5zZW5kRGF0YSgzMTYyLCAwKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBjYy5zdG9yZT8uZ2FtZVNlcnZlci5HZXRQSSgpLnNlbmREYXRhKDMxNjIsIGNjLnN0b3JlLmN1cnJlbnRCZXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygzMTYyKTtcclxuXHJcbiAgICBjb0dyb3VwLnN0YXJ0KGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgIGNvbnN0IGNvbEluZGV4ID0gMDtcclxuICAgICAgY29uc3QgY29sID0gY29scy5nZXRDaGlsZEJ5TmFtZShgJHtjb2xJbmRleCArIDF9YCk7XHJcbiAgICAgIGNvbnN0IGNvbHNCb3ggPSBnZXROb2RlQm91bmRpbmdCb3goY29scyk7XHJcbiAgICAgIGxldCBieWVvbmQgPSBmYWxzZTtcclxuXHJcbiAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGNjLnN0b3JlLmdhbWVSZXN1bHRHb3RTdGF0dXMgPT09IDIpIHtcclxuICAgICAgICAgIGlmIChjb2xzQm94LmludGVyc2VjdHMoZ2V0Tm9kZUJvdW5kaW5nQm94KGNvbC5jaGlsZHJlbltjb2wuY2hpbGRyZW5Db3VudCAtIDNdKSkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdXBkYXRlUmVzdWx0KDUpO1xyXG4gICAgICAgICAgICBzZXRSZWRpc3QoY29scywgJ3JlZGlzdCcsIDMpO1xyXG5cclxuICAgICAgICAgICAgY2Muc3RvcmUuZ2FtZVJlc3VsdEdvdFN0YXR1cyA9IDM7XHJcblxyXG4gICAgICAgICAgICB5aWVsZCBjby53YWl0VW50aWwoKCkgPT4gY29sc0JveC5pbnRlcnNlY3RzKGdldE5vZGVCb3VuZGluZ0JveChjb2wuY2hpbGRyZW5bM10pKSA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGJ5ZW9uZCA9PT0gdHJ1ZSB8fCBjYy5zdG9yZS5wbGF5aW5nID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBsZXQgdCA9IGNvbC5jaGlsZHJlbkNvdW50IC0gNDtcclxuICAgICAgICAgICAgd2hpbGUgKGNvbHNCb3guaW50ZXJzZWN0cyhnZXROb2RlQm91bmRpbmdCb3goY29sLmNoaWxkcmVuWy0tdF0pKSAhPT0gdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0MSA9IHQgKyAzO1xyXG4gICAgICAgICAgICB1cGRhdGVSZXN1bHQodDEpO1xyXG4gICAgICAgICAgICBjb25zdCB0MiA9IHQxIC0gMjtcclxuICAgICAgICAgICAgc2V0UmVkaXN0KGNvbHMsICdyZWRpc3QyJywgdDIpO1xyXG5cclxuICAgICAgICAgICAgY2Muc3RvcmUuZ2FtZVJlc3VsdEdvdFN0YXR1cyA9IDM7XHJcblxyXG4gICAgICAgICAgICB5aWVsZCBjby53YWl0VW50aWwoKCkgPT4gY29sc0JveC5pbnRlcnNlY3RzKGdldE5vZGVCb3VuZGluZ0JveChjb2wuY2hpbGRyZW5bdDJdKSkgPT09IHRydWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Muc3RvcmUuZ2FtZVJlc3VsdEdvdFN0YXR1cyA9IDM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoY2Muc3RvcmUuc3ltYm9sRGF0YUxpc3RbY29sSW5kZXhdLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChieWVvbmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGJ5ZW9uZCA9IGNvbHNCb3guaW50ZXJzZWN0cyhnZXROb2RlQm91bmRpbmdCb3goY29sLmNoaWxkcmVuW2NvbC5jaGlsZHJlbkNvdW50IC0gM10pKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgeWllbGQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0R2FtZVJlc3VsdDtcclxuIl19