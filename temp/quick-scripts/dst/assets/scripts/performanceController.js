
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/performanceController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56909yQz7dAZqiahqpg8Jba', 'performanceController');
// scripts/performanceController.js

"use strict";

var _buildSymbols = _interopRequireDefault(require("./buildSymbols"));

var _co = _interopRequireDefault(require("./co.cc"));

var _playAll = _interopRequireDefault(require("./playAll"));

var _shuffle = _interopRequireDefault(require("./shuffle"));

var _freeSpinAnim = _interopRequireDefault(require("./freeSpinAnim"));

var _requestTableInfo = _interopRequireDefault(require("./requestTableInfo"));

var _requestGameResult = _interopRequireDefault(require("./requestGameResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PublicSetUp = require('PublicSetUp');

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    //cc.audioEngine.playMusic(this.MusicClip, true);
    cc.find('Symbols', this.node).active = false;
    cc.find('Effect', this.node).active = false;
    var linesNode = cc.find('Lines', this.node);

    for (var i = 0; i < linesNode.childrenCount; i++) {
      linesNode.getChildByName("" + (i + 1)).active = false;
    }

    var anchorsNode = cc.find('Anchors', this.node);

    for (var _i = 1; _i <= 5; _i++) {
      var col = anchorsNode.getChildByName("" + _i);

      for (var j = 1; j <= 3; j++) {
        var row = col.getChildByName("" + j);
        row.getComponent(cc.Sprite).spriteFrame = null;
      }
    }
  },
  start: function start() {
    cc.store.symbolDataList = new Array(5);
    cc.store.randomSymbolDataList = new Array(cc.store.symbolDataList.length);
    var _cc$store = cc.store,
        symbolDataList = _cc$store.symbolDataList,
        randomSymbolDataList = _cc$store.randomSymbolDataList;

    for (var i = 0; i < randomSymbolDataList.length; i++) {
      symbolDataList[i] = new Array(24);
      randomSymbolDataList[i] = new Array(symbolDataList[i].length);

      for (var j = 0, jcnt = randomSymbolDataList[i].length; j < jcnt; j++) {
        randomSymbolDataList[i][j] = Math.floor(Math.random() * 11);
      }
    }

    var iGrid = cc.store.gameResult.iGrid;

    for (var _i2 = 0; _i2 < symbolDataList.length; _i2++) {
      (0, _shuffle["default"])(randomSymbolDataList[_i2]);

      var _j = void 0,
          k = void 0;

      _j = 0;

      while (_j < 3) {
        symbolDataList[_i2][_j] = iGrid[_i2 + 5 * (2 - _j)];
        _j++;
      }

      k = symbolDataList[_i2].length;

      while (_j < k) {
        symbolDataList[_i2][_j] = randomSymbolDataList[_i2][_j];
        _j++;
      }
    }

    (0, _buildSymbols["default"])(symbolDataList);

    _co["default"].start( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _cc$store2, _symbolDataList, _randomSymbolDataList, iGrid0, _i3, _j2, _k;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!true) {
                _context.next = 17;
                break;
              }

              cc.store.gameResultGotStatus = 0;
              _cc$store2 = cc.store, _symbolDataList = _cc$store2.symbolDataList, _randomSymbolDataList = _cc$store2.randomSymbolDataList;
              iGrid0 = cc.store.gameResult.iGrid;

              for (_i3 = 0; _i3 < _symbolDataList.length; _i3++) {
                (0, _shuffle["default"])(_randomSymbolDataList[_i3]);
                _j2 = void 0, _k = void 0;
                _j2 = 0;
                _k = _symbolDataList[_i3].length - 1;

                while (_j2 < 3) {
                  _symbolDataList[_i3][_j2] = iGrid0[_i3 + 5 * (2 - _j2)];
                  _symbolDataList[_i3][_k - _j2] = iGrid0[_i3 + 5 * _j2];
                  _j2++;
                }

                _k = _symbolDataList[_i3].length - 3;

                while (_j2 < _k) {
                  _symbolDataList[_i3][_j2] = _randomSymbolDataList[_i3][_j2];
                  _j2++;
                }
              }

              (0, _buildSymbols["default"])(_symbolDataList);
              _context.next = 8;
              return _co["default"].waitUntil(function () {
                return cc.store.playing === true;
              });

            case 8:
              //yield freeSpinAnim();
              (0, _requestGameResult["default"])();
              _context.next = 11;
              return (0, _playAll["default"])();

            case 11:
              (0, _requestTableInfo["default"])();

              if (!(cc.store.playing === true)) {
                _context.next = 15;
                break;
              }

              _context.next = 15;
              return _co["default"].waitForSeconds(1.2);

            case 15:
              _context.next = 0;
              break;

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGVyZm9ybWFuY2VDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIlB1YmxpY1NldFVwIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiZmluZCIsIm5vZGUiLCJhY3RpdmUiLCJsaW5lc05vZGUiLCJpIiwiY2hpbGRyZW5Db3VudCIsImdldENoaWxkQnlOYW1lIiwiYW5jaG9yc05vZGUiLCJjb2wiLCJqIiwicm93IiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJzdGFydCIsInN0b3JlIiwic3ltYm9sRGF0YUxpc3QiLCJBcnJheSIsInJhbmRvbVN5bWJvbERhdGFMaXN0IiwibGVuZ3RoIiwiamNudCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImlHcmlkIiwiZ2FtZVJlc3VsdCIsImsiLCJjbyIsImdhbWVSZXN1bHRHb3RTdGF0dXMiLCJpR3JpZDAiLCJ3YWl0VW50aWwiLCJwbGF5aW5nIiwid2FpdEZvclNlY29uZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQSxJQUFJQSxXQUFXLEdBQUNDLE9BQU8sQ0FBQyxhQUFELENBQXZCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUVQQyxFQUFBQSxVQUFVLEVBQUUsRUFGTDtBQU1QQyxFQUFBQSxNQU5PLG9CQU1FO0FBQ1A7QUFDQUosSUFBQUEsRUFBRSxDQUFDSyxJQUFILENBQVEsU0FBUixFQUFtQixLQUFLQyxJQUF4QixFQUE4QkMsTUFBOUIsR0FBdUMsS0FBdkM7QUFDQVAsSUFBQUEsRUFBRSxDQUFDSyxJQUFILENBQVEsUUFBUixFQUFrQixLQUFLQyxJQUF2QixFQUE2QkMsTUFBN0IsR0FBc0MsS0FBdEM7QUFDQSxRQUFNQyxTQUFTLEdB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ImltcG9ydCBidWlsZFN5bWJvbHMgZnJvbSAnLi9idWlsZFN5bWJvbHMnO1xyXG5pbXBvcnQgY28gZnJvbSAnLi9jby5jYyc7XHJcbmltcG9ydCBwbGF5QWxsIGZyb20gJy4vcGxheUFsbCc7XHJcbmltcG9ydCBzaHVmZmxlIGZyb20gJy4vc2h1ZmZsZSc7XHJcbmltcG9ydCBmcmVlU3BpbkFuaW0gZnJvbSAnLi9mcmVlU3BpbkFuaW0nO1xyXG5pbXBvcnQgcmVxdWVzdFRhYmxlSW5mbyBmcm9tICcuL3JlcXVlc3RUYWJsZUluZm8nO1xyXG5pbXBvcnQgcmVxdWVzdEdhbWVSZXN1bHQgZnJvbSAnLi9yZXF1ZXN0R2FtZVJlc3VsdCc7XHJcbmxldCBQdWJsaWNTZXRVcD1yZXF1aXJlKCdQdWJsaWNTZXRVcCcpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBcclxuXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLk11c2ljQ2xpcCwgdHJ1ZSk7XHJcbiAgICBjYy5maW5kKCdTeW1ib2xzJywgdGhpcy5ub2RlKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIGNjLmZpbmQoJ0VmZmVjdCcsIHRoaXMubm9kZSkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICBjb25zdCBsaW5lc05vZGUgPSBjYy5maW5kKCdMaW5lcycsIHRoaXMubm9kZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgbGluZXNOb2RlLmdldENoaWxkQnlOYW1lKGAke2kgKyAxfWApLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFuY2hvcnNOb2RlID0gY2MuZmluZCgnQW5jaG9ycycsIHRoaXMubm9kZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcclxuICAgICAgY29uc3QgY29sID0gYW5jaG9yc05vZGUuZ2V0Q2hpbGRCeU5hbWUoYCR7aX1gKTtcclxuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMzsgaisrKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gY29sLmdldENoaWxkQnlOYW1lKGAke2p9YCk7XHJcbiAgICAgICAgcm93LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHN0YXJ0KCkge1xyXG5cclxuICAgIFxyXG4gICAgY2Muc3RvcmUuc3ltYm9sRGF0YUxpc3QgPSBuZXcgQXJyYXkoNSk7XHJcbiAgICBjYy5zdG9yZS5yYW5kb21TeW1ib2xEYXRhTGlzdCA9IG5ldyBBcnJheShjYy5zdG9yZS5zeW1ib2xEYXRhTGlzdC5sZW5ndGgpO1xyXG5cclxuICAgIGNvbnN0IHsgc3ltYm9sRGF0YUxpc3QsIHJhbmRvbVN5bWJvbERhdGFMaXN0IH0gPSBjYy5zdG9yZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZG9tU3ltYm9sRGF0YUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc3ltYm9sRGF0YUxpc3RbaV0gPSBuZXcgQXJyYXkoMjQpO1xyXG4gICAgICByYW5kb21TeW1ib2xEYXRhTGlzdFtpXSA9IG5ldyBBcnJheShzeW1ib2xEYXRhTGlzdFtpXS5sZW5ndGgpO1xyXG4gICAgICBmb3IgKGxldCBqID0gMCwgamNudCA9IHJhbmRvbVN5bWJvbERhdGFMaXN0W2ldLmxlbmd0aDsgaiA8IGpjbnQ7IGorKykge1xyXG4gICAgICAgIHJhbmRvbVN5bWJvbERhdGFMaXN0W2ldW2pdID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBpR3JpZCB9ID0gY2Muc3RvcmUuZ2FtZVJlc3VsdDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9sRGF0YUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc2h1ZmZsZShyYW5kb21TeW1ib2xEYXRhTGlzdFtpXSk7XHJcblxyXG4gICAgICBsZXQgaiwgaztcclxuXHJcbiAgICAgIGogPSAwO1xyXG4gICAgICB3aGlsZSAoaiA8IDMpIHtcclxuICAgICAgICBzeW1ib2xEYXRhTGlzdFtpXVtqXSA9IGlHcmlkW2kgKyA1ICogKDIgLSBqKV07XHJcbiAgICAgICAgaisrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBrID0gc3ltYm9sRGF0YUxpc3RbaV0ubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAoaiA8IGspIHtcclxuICAgICAgICBzeW1ib2xEYXRhTGlzdFtpXVtqXSA9IHJhbmRvbVN5bWJvbERhdGFMaXN0W2ldW2pdO1xyXG4gICAgICAgIGorKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnVpbGRTeW1ib2xzKHN5bWJvbERhdGFMaXN0KTtcclxuXHJcbiAgICBjby5zdGFydChmdW5jdGlvbiogKCkge1xyXG4gICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGNjLnN0b3JlLmdhbWVSZXN1bHRHb3RTdGF0dXMgPSAwO1xyXG5cclxuICAgICAgICBjb25zdCB7IHN5bWJvbERhdGFMaXN0LCByYW5kb21TeW1ib2xEYXRhTGlzdCB9ID0gY2Muc3RvcmU7XHJcbiAgICAgICAgY29uc3QgaUdyaWQwID0gY2Muc3RvcmUuZ2FtZVJlc3VsdC5pR3JpZDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbERhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBzaHVmZmxlKHJhbmRvbVN5bWJvbERhdGFMaXN0W2ldKTtcclxuXHJcbiAgICAgICAgICBsZXQgaiwgaztcclxuXHJcbiAgICAgICAgICBqID0gMDtcclxuICAgICAgICAgIGsgPSBzeW1ib2xEYXRhTGlzdFtpXS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgd2hpbGUgKGogPCAzKSB7XHJcbiAgICAgICAgICAgIHN5bWJvbERhdGFMaXN0W2ldW2pdID0gaUdyaWQwW2kgKyA1ICogKDIgLSBqKV07XHJcbiAgICAgICAgICAgIHN5bWJvbERhdGFMaXN0W2ldW2sgLSBqXSA9IGlHcmlkMFtpICsgNSAqIGpdO1xyXG4gICAgICAgICAgICBqKys7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgayA9IHN5bWJvbERhdGFMaXN0W2ldLmxlbmd0aCAtIDM7XHJcbiAgICAgICAgICB3aGlsZSAoaiA8IGspIHtcclxuICAgICAgICAgICAgc3ltYm9sRGF0YUxpc3RbaV1bal0gPSByYW5kb21TeW1ib2xEYXRhTGlzdFtpXVtqXTtcclxuICAgICAgICAgICAgaisrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZFN5bWJvbHMoc3ltYm9sRGF0YUxpc3QpO1xyXG5cclxuXHJcbiAgICAgICAgeWllbGQgY28ud2FpdFVudGlsKCgpID0+IGNjLnN0b3JlLnBsYXlpbmcgPT09IHRydWUpO1xyXG4gICAgICAgIC8veWllbGQgZnJlZVNwaW5BbmltKCk7XHJcblxyXG4gICAgICAgIHJlcXVlc3RHYW1lUmVzdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgeWllbGQgcGxheUFsbCgpO1xyXG5cclxuICAgICAgICByZXF1ZXN0VGFibGVJbmZvKCk7XHJcblxyXG4gICAgICAgIGlmIChjYy5zdG9yZS5wbGF5aW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICB5aWVsZCBjby53YWl0Rm9yU2Vjb25kcygxLjIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIl19