
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

var _requestTableInfo = _interopRequireDefault(require("./requestTableInfo"));

var _requestGameResult = _interopRequireDefault(require("./requestGameResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PublicSetUp = require('PublicSetUp');

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
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
      var _cc$store2, _symbolDataList, _randomSymbolDataList, iGrid0, _i3, _j2, _k, AutoPlayButton, ManuaPlayButton;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!true) {
                _context.next = 18;
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
              (0, _requestGameResult["default"])();
              _context.next = 11;
              return (0, _playAll["default"])();

            case 11:
              (0, _requestTableInfo["default"])();

              if (!(cc.store.playing === true)) {
                _context.next = 16;
                break;
              }

              if (cc.store.auto == false) {
                cc.store.playing = false;
                AutoPlayButton = cc.find('Canvas/Game/Machine/UI/playButton');
                AutoPlayButton.active = true;
                ManuaPlayButton = cc.find('Canvas/Game/Machine/UI/PauseButton');
                ManuaPlayButton.active = false;
              }

              _context.next = 16;
              return _co["default"].waitForSeconds(1.2);

            case 16:
              _context.next = 0;
              break;

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  },
  update: function update(dt) {
    var d = new Date();
    cc.find("Canvas/Game/Machine/UI/time/txt").getComponent(cc.Label).string = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGVyZm9ybWFuY2VDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIlB1YmxpY1NldFVwIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiZmluZCIsIm5vZGUiLCJhY3RpdmUiLCJsaW5lc05vZGUiLCJpIiwiY2hpbGRyZW5Db3VudCIsImdldENoaWxkQnlOYW1lIiwiYW5jaG9yc05vZGUiLCJjb2wiLCJqIiwicm93IiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJzdGFydCIsInN0b3JlIiwic3ltYm9sRGF0YUxpc3QiLCJBcnJheSIsInJhbmRvbVN5bWJvbERhdGFMaXN0IiwibGVuZ3RoIiwiamNudCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImlHcmlkIiwiZ2FtZVJlc3VsdCIsImsiLCJjbyIsImdhbWVSZXN1bHRHb3RTdGF0dXMiLCJpR3JpZDAiLCJ3YWl0VW50aWwiLCJwbGF5aW5nIiwiYXV0byIsIkF1dG9QbGF5QnV0dG9uIiwiTWFudWFQbGF5QnV0dG9uIiwid2FpdEZvclNlY29uZHMiLCJ1cGRhdGUiLCJkdCIsImQiLCJEYXRlIiwiTGFiZWwiLCJzdHJpbmciLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBQ0EsSUFBSUEsV0FBVyxHQUFDQyxPQUFPLENBQUMsYUFBRCxDQUF2Qjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFFUEMsRUFBQUEsVUFBVSxFQUFFLEVBRkw7QUFNUEMsRUFBQUEsTUFOTyxvQkFNRTtBQUVQSixJQUFBQSxFQUFFLENBQUNLLElBQUgsQ0FBUSxTQUFSLEVBQW1CLEtBQUtDLElBQXhCLEVBQThCQyxNQUE5QixH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QixFQUF3QjtBQUN0QnJDLGdCQUFBQSxFQUFFLENBQUNvQixLQUFILENBQVNnQixPQUFULEdBQWlCLEtBQWpCO0FBQ01FLGdCQUFBQSxjQUZnQixHQUVDdEMsRUFBRSxDQUFDSyxJQUFILENBQVEsbUNBQVIsQ0FGRDtBQUd0QmlDLGdCQUFBQSxjQUFjLENBQUMvQixNQUFmLEdBQXdCLElBQXhCO0FBQ01nQyxnQkFBQUEsZUFKZ0IsR0FJRXZDLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLG9DQUFSLENBSkY7QUFLdEJrQyxnQkFBQUEsZUFBZSxDQUFDaEMsTUFBaEIsR0FBeUIsS0FBekI7QUFDRDs7QUEzQ0U7QUE0Q0gscUJBQU15QixlQUFHUSxjQUFILENBQWtCLEdBQWxCLENBQU47O0FBNUNHO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFUO0FBZ0RELEdBNUdNO0FBNkdQQyxFQUFBQSxNQTdHTyxrQkE2R0NDLEVBN0dELEVBNkdLO0FBQ1YsUUFBSUMsQ0FBQyxHQUFDLElBQUlDLElBQUosRUFBTjtBQUNBNUMsSUFBQUEsRUFBRSxDQUFDSyxJQUFILENBQVEsaUNBQVIsRUFBMkNXLFlBQTNDLENBQXdEaEIsRUFBRSxDQUFDNkMsS0FBM0QsRUFBa0VDLE1BQWxFLEdBQXlFSCxDQUFDLENBQUNJLFFBQUYsS0FBYSxHQUFiLEdBQWlCSixDQUFDLENBQUNLLFVBQUYsRUFBakIsR0FBZ0MsR0FBaEMsR0FBb0NMLENBQUMsQ0FBQ00sVUFBRixFQUE3RztBQUVEO0FBakhNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZFN5bWJvbHMgZnJvbSAnLi9idWlsZFN5bWJvbHMnO1xyXG5pbXBvcnQgY28gZnJvbSAnLi9jby5jYyc7XHJcbmltcG9ydCBwbGF5QWxsIGZyb20gJy4vcGxheUFsbCc7XHJcbmltcG9ydCBzaHVmZmxlIGZyb20gJy4vc2h1ZmZsZSc7XHJcblxyXG5pbXBvcnQgcmVxdWVzdFRhYmxlSW5mbyBmcm9tICcuL3JlcXVlc3RUYWJsZUluZm8nO1xyXG5pbXBvcnQgcmVxdWVzdEdhbWVSZXN1bHQgZnJvbSAnLi9yZXF1ZXN0R2FtZVJlc3VsdCc7XHJcbmxldCBQdWJsaWNTZXRVcD1yZXF1aXJlKCdQdWJsaWNTZXRVcCcpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBcclxuXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcblxyXG4gICAgY2MuZmluZCgnU3ltYm9scycsIHRoaXMubm9kZSkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICBjYy5maW5kKCdFZmZlY3QnLCB0aGlzLm5vZGUpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGluZXNOb2RlID0gY2MuZmluZCgnTGluZXMnLCB0aGlzLm5vZGUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc05vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgIGxpbmVzTm9kZS5nZXRDaGlsZEJ5TmFtZShgJHtpICsgMX1gKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhbmNob3JzTm9kZSA9IGNjLmZpbmQoJ0FuY2hvcnMnLCB0aGlzLm5vZGUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNvbCA9IGFuY2hvcnNOb2RlLmdldENoaWxkQnlOYW1lKGAke2l9YCk7XHJcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDM7IGorKykge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGNvbC5nZXRDaGlsZEJ5TmFtZShgJHtqfWApO1xyXG4gICAgICAgIHJvdy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgfSxcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBcclxuICAgIGNjLnN0b3JlLnN5bWJvbERhdGFMaXN0ID0gbmV3IEFycmF5KDUpO1xyXG4gICAgY2Muc3RvcmUucmFuZG9tU3ltYm9sRGF0YUxpc3QgPSBuZXcgQXJyYXkoY2Muc3RvcmUuc3ltYm9sRGF0YUxpc3QubGVuZ3RoKTtcclxuXHJcbiAgICBjb25zdCB7IHN5bWJvbERhdGFMaXN0LCByYW5kb21TeW1ib2xEYXRhTGlzdCB9ID0gY2Muc3RvcmU7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbVN5bWJvbERhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHN5bWJvbERhdGFMaXN0W2ldID0gbmV3IEFycmF5KDI0KTtcclxuICAgICAgcmFuZG9tU3ltYm9sRGF0YUxpc3RbaV0gPSBuZXcgQXJyYXkoc3ltYm9sRGF0YUxpc3RbaV0ubGVuZ3RoKTtcclxuICAgICAgZm9yIChsZXQgaiA9IDAsIGpjbnQgPSByYW5kb21TeW1ib2xEYXRhTGlzdFtpXS5sZW5ndGg7IGogPCBqY250OyBqKyspIHtcclxuICAgICAgICByYW5kb21TeW1ib2xEYXRhTGlzdFtpXVtqXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgaUdyaWQgfSA9IGNjLnN0b3JlLmdhbWVSZXN1bHQ7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbERhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNodWZmbGUocmFuZG9tU3ltYm9sRGF0YUxpc3RbaV0pO1xyXG5cclxuICAgICAgbGV0IGosIGs7XHJcblxyXG4gICAgICBqID0gMDtcclxuICAgICAgd2hpbGUgKGogPCAzKSB7XHJcbiAgICAgICAgc3ltYm9sRGF0YUxpc3RbaV1bal0gPSBpR3JpZFtpICsgNSAqICgyIC0gaildO1xyXG4gICAgICAgIGorKztcclxuICAgICAgfVxyXG5cclxuICAgICAgayA9IHN5bWJvbERhdGFMaXN0W2ldLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGogPCBrKSB7XHJcbiAgICAgICAgc3ltYm9sRGF0YUxpc3RbaV1bal0gPSByYW5kb21TeW1ib2xEYXRhTGlzdFtpXVtqXTtcclxuICAgICAgICBqKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGJ1aWxkU3ltYm9scyhzeW1ib2xEYXRhTGlzdCk7XHJcblxyXG4gICAgY28uc3RhcnQoZnVuY3Rpb24qICgpIHtcclxuICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBjYy5zdG9yZS5nYW1lUmVzdWx0R290U3RhdHVzID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgeyBzeW1ib2xEYXRhTGlzdCwgcmFuZG9tU3ltYm9sRGF0YUxpc3QgfSA9IGNjLnN0b3JlO1xyXG4gICAgICAgIGNvbnN0IGlHcmlkMCA9IGNjLnN0b3JlLmdhbWVSZXN1bHQuaUdyaWQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xEYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgc2h1ZmZsZShyYW5kb21TeW1ib2xEYXRhTGlzdFtpXSk7XHJcblxyXG4gICAgICAgICAgbGV0IGosIGs7XHJcblxyXG4gICAgICAgICAgaiA9IDA7XHJcbiAgICAgICAgICBrID0gc3ltYm9sRGF0YUxpc3RbaV0ubGVuZ3RoIC0gMTtcclxuICAgICAgICAgIHdoaWxlIChqIDwgMykge1xyXG4gICAgICAgICAgICBzeW1ib2xEYXRhTGlzdFtpXVtqXSA9IGlHcmlkMFtpICsgNSAqICgyIC0gaildO1xyXG4gICAgICAgICAgICBzeW1ib2xEYXRhTGlzdFtpXVtrIC0gal0gPSBpR3JpZDBbaSArIDUgKiBqXTtcclxuICAgICAgICAgICAgaisrO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGsgPSBzeW1ib2xEYXRhTGlzdFtpXS5sZW5ndGggLSAzO1xyXG4gICAgICAgICAgd2hpbGUgKGogPCBrKSB7XHJcbiAgICAgICAgICAgIHN5bWJvbERhdGFMaXN0W2ldW2pdID0gcmFuZG9tU3ltYm9sRGF0YUxpc3RbaV1bal07XHJcbiAgICAgICAgICAgIGorKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRTeW1ib2xzKHN5bWJvbERhdGFMaXN0KTtcclxuXHJcblxyXG4gICAgICAgIHlpZWxkIGNvLndhaXRVbnRpbCgoKSA9PiBjYy5zdG9yZS5wbGF5aW5nID09PSB0cnVlKTtcclxuXHJcbiAgICAgICAgcmVxdWVzdEdhbWVSZXN1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICB5aWVsZCBwbGF5QWxsKCk7XHJcblxyXG4gICAgICAgIHJlcXVlc3RUYWJsZUluZm8oKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN0b3JlLnBsYXlpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgIGlmKGNjLnN0b3JlLmF1dG89PWZhbHNlKXtcclxuICAgICAgICAgICAgY2Muc3RvcmUucGxheWluZz1mYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgQXV0b1BsYXlCdXR0b24gPSBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL3BsYXlCdXR0b24nKTtcclxuICAgICAgICAgICAgQXV0b1BsYXlCdXR0b24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgTWFudWFQbGF5QnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9QYXVzZUJ1dHRvbicpO1xyXG4gICAgICAgICAgICBNYW51YVBsYXlCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB5aWVsZCBjby53YWl0Rm9yU2Vjb25kcygxLjIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICB1cGRhdGUgKGR0KSB7XHJcbiAgICB2YXIgZD1uZXcgRGF0ZSgpO1xyXG4gICAgY2MuZmluZChcIkNhbnZhcy9HYW1lL01hY2hpbmUvVUkvdGltZS90eHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9ZC5nZXRIb3VycygpK1wiOlwiK2QuZ2V0TWludXRlcygpK1wiOlwiK2QuZ2V0U2Vjb25kcygpO1xyXG5cclxuICB9LFxyXG5cclxuICBcclxuXHJcbn0pO1xyXG4iXX0=