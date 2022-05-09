
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

    cc.store.gameResultGotStatus = 1; //const {type} = cc.store.gameResult;

    if (cc.store.type == 0) {
      var _cc$store;

      (_cc$store = cc.store) == null ? void 0 : _cc$store.gameServer.GetPI().sendData(3162, cc.store.currentBet);
    } else {
      var _cc$store2;

      (_cc$store2 = cc.store) == null ? void 0 : _cc$store2.gameServer.GetPI().sendData(3162, 0);
    }

    cc.find('Canvas/Game/Machine/UI/GamePoint/Value').getComponent(cc.Label).string = cc.store.userPoints - cc.store.currentBet;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccmVxdWVzdEdhbWVSZXN1bHQuanMiXSwibmFtZXMiOlsiZ2V0Tm9kZUJvdW5kaW5nQm94Iiwibm9kZSIsInBhcmVudCIsIl91cGRhdGVXb3JsZE1hdHJpeCIsIndpZHRoIiwiX2NvbnRlbnRTaXplIiwiaGVpZ2h0IiwicmVjdCIsImNjIiwiX2FuY2hvclBvaW50IiwieCIsInkiLCJfY2FsY3VsV29ybGRNYXRyaXgiLCJ0cmFuc2Zvcm1NYXQ0IiwiX3dvcmxkTWF0cml4IiwicmVxdWVzdEdhbWVSZXN1bHQiLCJjb0dyb3VwIiwiY28iLCJDb3JvdXRpbmVHcm91cCIsInByaW9yaXR5IiwiTm9ybWFsUHJpb3JpdHkiLCJ1cGRhdGVSZXN1bHQiLCJrIiwic3ltYm9sRGF0YUxpc3QiLCJzdG9yZSIsImlHcmlkIiwiZ2FtZVJlc3VsdCIsImkiLCJsZW5ndGgiLCJqIiwic3ltYm9sSW5kZXgiLCJzZXRSZWRpc3QiLCJjb2xzIiwibmFtZSIsInZhbHVlIiwiY2hpbGRyZW5Db3VudCIsImNvbCIsImdldENoaWxkQnlOYW1lIiwiZmluZCIsImdhbWVSZXN1bHRHb3RTdGF0dXMiLCJ0eXBlIiwiZ2FtZVNlcnZlciIsIkdldFBJIiwic2VuZERhdGEiLCJjdXJyZW50QmV0IiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJ1c2VyUG9pbnRzIiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwiY29sSW5kZXgiLCJjb2xzQm94IiwiYnllb25kIiwiaW50ZXJzZWN0cyIsImNoaWxkcmVuIiwid2FpdFVudGlsIiwicGxheWluZyIsInQiLCJ0MSIsInQyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsU0FBU0Esa0JBQVQsQ0FBNEJDLElBQTVCLEVBQWtDO0FBQ2hDQSxFQUFBQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUMsa0JBQVo7O0FBRUEsTUFBSUMsS0FBSyxHQUFHSCxJQUFJLENBQUNJLFlB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Q0FBL0I7QUF4Qk07QUEwQk4sK0JBQU10QixlQUFHd0MsU0FBSCxDQUFhO0FBQUEsaUNBQU1KLE9BQU8sQ0FBQ0UsVUFBUixDQUFtQnZELGtCQUFrQixDQUFDb0MsR0FBRyxDQUFDb0IsUUFBSixDQUFhSyxFQUFiLENBQUQsQ0FBckMsTUFBNkQsSUFBbkU7QUFBQSx5QkFBYixDQUFOOztBQTFCTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUE0Qk5yRCxjQUFBQSxFQUFFLENBQUNnQixLQUFILENBQVNlLG1CQUFULEdBQStCLENBQS9COztBQTVCTTtBQThCUmxCLGNBQUFBLFlBQVksQ0FBQ2IsRUFBRSxDQUFDZ0IsS0FBSCxDQUFTRCxjQUFULENBQXdCNkIsUUFBeEIsRUFBa0N4QixNQUFsQyxHQUEyQyxDQUE1QyxDQUFaO0FBOUJROztBQUFBO0FBaUNSLGtCQUFJMEIsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDcEJBLGdCQUFBQSxNQUFNLEdBQUdELE9BQU8sQ0FBQ0UsVUFBUixDQUFtQnZELGtCQUFrQixDQUFDb0MsR0FBRyxDQUFDb0IsUUFBSixDQUFhcEIsR0FBRyxDQUFDRCxhQUFKLEdBQW9CLENBQWpDLENBQUQsQ0FBckMsQ0FBVDtBQUNEOztBQW5DTztBQUFBO0FBcUNWOztBQXJDVTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZDtBQXdDRCxHQXRHRDtBQXVHRCxDQTdIeUIsRUFBMUI7O2VBK0hlcEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbyBmcm9tICcuL2NvLmNjJztcclxuaW1wb3J0IHsgc2V0U3ltYm9sIH0gZnJvbSAnLi9idWlsZFN5bWJvbHMnO1xyXG5cclxuZnVuY3Rpb24gZ2V0Tm9kZUJvdW5kaW5nQm94KG5vZGUpIHtcclxuICBub2RlLnBhcmVudC5fdXBkYXRlV29ybGRNYXRyaXgoKTtcclxuXHJcbiAgbGV0IHdpZHRoID0gbm9kZS5fY29udGVudFNpemUud2lkdGg7XHJcbiAgbGV0IGhlaWdodCA9IG5vZGUuX2NvbnRlbnRTaXplLmhlaWdodDtcclxuICBsZXQgcmVjdCA9IGNjLnJlY3QoLW5vZGUuX2FuY2hvclBvaW50LnggKiB3aWR0aCwgLW5vZGUuX2FuY2hvclBvaW50LnkgKiBoZWlnaHQsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICBub2RlLl9jYWxjdWxXb3JsZE1hdHJpeCgpO1xyXG4gIHJlY3QudHJhbnNmb3JtTWF0NChyZWN0LCBub2RlLl93b3JsZE1hdHJpeCk7XHJcbiAgcmV0dXJuIHJlY3Q7XHJcbn1cclxuXHJcbmNvbnN0IHJlcXVlc3RHYW1lUmVzdWx0ID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjb0dyb3VwID0gY28uQ29yb3V0aW5lR3JvdXAoJ1JlcXVlc3RHYW1lUmVzdWx0JywgeyBwcmlvcml0eTogY28uQ29yb3V0aW5lR3JvdXAuTm9ybWFsUHJpb3JpdHkgKyAxIH0pO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVSZXN1bHQoaykge1xyXG4gICAgY29uc3QgeyBzeW1ib2xEYXRhTGlzdCB9ID0gY2Muc3RvcmU7XHJcbiAgICBjb25zdCB7IGlHcmlkIH0gPSBjYy5zdG9yZS5nYW1lUmVzdWx0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xEYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgIGNvbnN0IHN5bWJvbEluZGV4ID0gaUdyaWRbaSArIDUgKiBqXTtcclxuICAgICAgICBzeW1ib2xEYXRhTGlzdFtpXVtrIC0gal0gPSBzeW1ib2xJbmRleDtcclxuICAgICAgICBzZXRTeW1ib2woaSwgayAtIGosIHN5bWJvbEluZGV4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UmVkaXN0KGNvbHMsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNvbCA9IGNvbHMuZ2V0Q2hpbGRCeU5hbWUoYCR7aSArIDF9YCk7XHJcbiAgICAgIGNvbFtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RHYW1lUmVzdWx0KCkge1xyXG4gICAgY29uc3QgY29scyA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvUGVyZm9ybWFuY2UvQ29scycpO1xyXG5cclxuICAgIHNldFJlZGlzdChjb2xzLCAncmVkaXN0JywgMCk7XHJcbiAgICBzZXRSZWRpc3QoY29scywgJ3JlZGlzdDInLCAwKTtcclxuXHJcbiAgICAvLyBjb0dyb3VwLnN0YXJ0KGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAvLyAgIGNvbnN0IGNvbEluZGV4ID0gMDtcclxuICAgIC8vICAgY29uc3QgY29sID0gY29scy5nZXRDaGlsZEJ5TmFtZShgJHtjb2xJbmRleCArIDF9YCk7XHJcbiAgICAvLyAgIGNvbnN0IGNvbHNCb3ggPSBnZXROb2RlQm91bmRpbmdCb3goY29scyk7XHJcblxyXG4gICAgLy8gICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgLy8gICAgIC8vIGNvbnN0IHNlY29uZHMgPSAxICsgTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDUgKTtcclxuICAgIC8vICAgICAvLyB5aWVsZCBjby53YWl0Rm9yU2Vjb25kcyhzZWNvbmRzKTtcclxuXHJcbiAgICAvLyAgICAgY29uc3Qgc3ltYm9sQm94ID0gZ2V0Tm9kZUJvdW5kaW5nQm94KGNvbC5jaGlsZHJlbltjb2wuY2hpbGRyZW5Db3VudCAtIDNdKTtcclxuICAgIC8vICAgICBpZiAoY29sc0JveC5pbnRlcnNlY3RzKHN5bWJvbEJveCkgPT09IHRydWUpIHtcclxuICAgIC8vICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHN5bWJvbEJveCA9IGdldE5vZGVCb3VuZGluZ0JveChjb2wuY2hpbGRyZW5bM10pO1xyXG4gICAgLy8gICAgICAgICBpZiAoY29sc0JveC5pbnRlcnNlY3RzKHN5bWJvbEJveCkgPT09IHRydWUpIHtcclxuICAgIC8vICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB5aWVsZDtcclxuICAgIC8vICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICBjb25zdCBpR3JpZCA9IG5ldyBBcnJheSgxNSk7XHJcbiAgICAvLyAgICAgICBjb25zdCBpTGluZSA9IG5ldyBBcnJheSg5KTtcclxuICAgIC8vICAgICAgIGNvbnN0IGlGcmFtZSA9IG5ldyBBcnJheSg5KTtcclxuICAgIC8vICAgICAgIGNvbnN0IFdpblBvaW50TGluZSA9IG5ldyBBcnJheSg5KTtcclxuICAgIC8vICAgICAgIGNvbnN0IFdpblRvdGFsUG9pbnQgPSAwO1xyXG5cclxuICAgIC8vICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIGlMaW5lW2ldID0gTWF0aC5yYW5kb20oKSA+IDAuODUgPyAxIDogMDtcclxuICAgIC8vICAgICAgICAgaUxpbmVbaV0gPSAwO1xyXG4gICAgLy8gICAgICAgICBpRnJhbWVbaV0gPSAzICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAvLyAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGlHcmlkW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xyXG4gICAgLy8gICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgIGNjLnN0b3JlLmdhbWVSZXN1bHQgPSB7IGlHcmlkLCBpTGluZSwgaUZyYW1lLCBXaW5Qb2ludExpbmUsIFdpblRvdGFsUG9pbnQgfTtcclxuXHJcbiAgICAvLyAgICAgICBjYy5zdG9yZS5nYW1lUmVzdWx0R290U3RhdHVzID0gMjtcclxuICAgIC8vICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB5aWVsZDtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgY2Muc3RvcmUuZ2FtZVJlc3VsdEdvdFN0YXR1cyA9IDE7XHJcblxyXG4gICAgLy9jb25zdCB7dHlwZX0gPSBjYy5zdG9yZS5nYW1lUmVzdWx0O1xyXG4gICAgaWYoY2Muc3RvcmUudHlwZT09MCl7XHJcbiAgICAgIGNjLnN0b3JlPy5nYW1lU2VydmVyLkdldFBJKCkuc2VuZERhdGEoMzE2MiwgY2Muc3RvcmUuY3VycmVudEJldCk7XHJcbiAgICAgIFxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGNjLnN0b3JlPy5nYW1lU2VydmVyLkdldFBJKCkuc2VuZERhdGEoMzE2MiwgMCk7XHJcbiAgICB9XHJcbiAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0dhbWVQb2ludC9WYWx1ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWNjLnN0b3JlLnVzZXJQb2ludHMtY2Muc3RvcmUuY3VycmVudEJldDtcclxuICAgIGNvbnNvbGUubG9nKDMxNjIpO1xyXG5cclxuICAgIGNvR3JvdXAuc3RhcnQoZnVuY3Rpb24qICgpIHtcclxuICAgICAgY29uc3QgY29sSW5kZXggPSAwO1xyXG4gICAgICBjb25zdCBjb2wgPSBjb2xzLmdldENoaWxkQnlOYW1lKGAke2NvbEluZGV4ICsgMX1gKTtcclxuICAgICAgY29uc3QgY29sc0JveCA9IGdldE5vZGVCb3VuZGluZ0JveChjb2xzKTtcclxuICAgICAgbGV0IGJ5ZW9uZCA9IGZhbHNlO1xyXG5cclxuICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBpZiAoY2Muc3RvcmUuZ2FtZVJlc3VsdEdvdFN0YXR1cyA9PT0gMikge1xyXG4gICAgICAgICAgaWYgKGNvbHNCb3guaW50ZXJzZWN0cyhnZXROb2RlQm91bmRpbmdCb3goY29sLmNoaWxkcmVuW2NvbC5jaGlsZHJlbkNvdW50IC0gM10pKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB1cGRhdGVSZXN1bHQoNSk7XHJcbiAgICAgICAgICAgIHNldFJlZGlzdChjb2xzLCAncmVkaXN0JywgMyk7XHJcblxyXG4gICAgICAgICAgICBjYy5zdG9yZS5nYW1lUmVzdWx0R290U3RhdHVzID0gMztcclxuXHJcbiAgICAgICAgICAgIHlpZWxkIGNvLndhaXRVbnRpbCgoKSA9PiBjb2xzQm94LmludGVyc2VjdHMoZ2V0Tm9kZUJvdW5kaW5nQm94KGNvbC5jaGlsZHJlblszXSkpID09PSB0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoYnllb25kID09PSB0cnVlIHx8IGNjLnN0b3JlLnBsYXlpbmcgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gY29sLmNoaWxkcmVuQ291bnQgLSA0O1xyXG4gICAgICAgICAgICB3aGlsZSAoY29sc0JveC5pbnRlcnNlY3RzKGdldE5vZGVCb3VuZGluZ0JveChjb2wuY2hpbGRyZW5bLS10XSkpICE9PSB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHQxID0gdCArIDM7XHJcbiAgICAgICAgICAgIHVwZGF0ZVJlc3VsdCh0MSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHQyID0gdDEgLSAyO1xyXG4gICAgICAgICAgICBzZXRSZWRpc3QoY29scywgJ3JlZGlzdDInLCB0Mik7XHJcblxyXG4gICAgICAgICAgICBjYy5zdG9yZS5nYW1lUmVzdWx0R290U3RhdHVzID0gMztcclxuXHJcbiAgICAgICAgICAgIHlpZWxkIGNvLndhaXRVbnRpbCgoKSA9PiBjb2xzQm94LmludGVyc2VjdHMoZ2V0Tm9kZUJvdW5kaW5nQm94KGNvbC5jaGlsZHJlblt0Ml0pKSA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5zdG9yZS5nYW1lUmVzdWx0R290U3RhdHVzID0gMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVwZGF0ZVJlc3VsdChjYy5zdG9yZS5zeW1ib2xEYXRhTGlzdFtjb2xJbmRleF0ubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGJ5ZW9uZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgYnllb25kID0gY29sc0JveC5pbnRlcnNlY3RzKGdldE5vZGVCb3VuZGluZ0JveChjb2wuY2hpbGRyZW5bY29sLmNoaWxkcmVuQ291bnQgLSAzXSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB5aWVsZDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RHYW1lUmVzdWx0O1xyXG4iXX0=