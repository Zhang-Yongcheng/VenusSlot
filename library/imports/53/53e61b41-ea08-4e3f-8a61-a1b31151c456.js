"use strict";
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

    cc.find('Canvas/Game/Machine/UI/GamePoint/Value').getComponent(cc.Label).string = cc.store.userPoints - cc.store.currentBet; //console.log(3162);

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