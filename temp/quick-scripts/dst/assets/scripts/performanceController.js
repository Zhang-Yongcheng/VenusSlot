
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGVyZm9ybWFuY2VDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIlB1YmxpY1NldFVwIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiZmluZCIsIm5vZGUiLCJhY3RpdmUiLCJsaW5lc05vZGUiLCJpIiwiY2hpbGRyZW5Db3VudCIsImdldENoaWxkQnlOYW1lIiwiYW5jaG9yc05vZGUiLCJjb2wiLCJqIiwicm93IiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJzdGFydCIsInN0b3JlIiwic3ltYm9sRGF0YUxpc3QiLCJBcnJheSIsInJhbmRvbVN5bWJvbERhdGFMaXN0IiwibGVuZ3RoIiwiamNudCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImlHcmlkIiwiZ2FtZVJlc3VsdCIsImsiLCJjbyIsImdhbWVSZXN1bHRHb3RTdGF0dXMiLCJpR3JpZDAiLCJ3YWl0VW50aWwiLCJwbGF5aW5nIiwiYXV0byIsIkF1dG9QbGF5QnV0dG9uIiwiTWFudWFQbGF5QnV0dG9uIiwid2FpdEZvclNlY29uZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQSxJQUFJQSxXQUFXLEdBQUNDLE9BQU8sQ0FBQyxhQUFELENBQXZCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUVQQyxFQUFBQSxVQUFVLEVBQUUsRUFGTDtBQU1QQyxFQUFBQSxNQU5PLG9CQU1FO0FBQ1A7QUFDQUosSUFBQUEsRUFBRSxDQUFDSyxJQUFILENBQVEsU0FBUixFQUFtQixLQUFLQyxJQUF4QixFQUE4QkMsTUFBOUIsR0FBdUMsS0FBdkM7QUFDQVAsSUFBQUEsRUFBRSxDQUFDSyxJQUFILENBQVEsUUFBUixFQUFrQixLQUFLQyxJQUF2QixFQUE2QkMs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QUEsY0FGZ0IsR0FFQ3RDLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLG1DQUFSLENBRkQ7QUFHdEJpQyxnQkFBQUEsY0FBYyxDQUFDL0IsTUFBZixHQUF3QixJQUF4QjtBQUNNZ0MsZ0JBQUFBLGVBSmdCLEdBSUV2QyxFQUFFLENBQUNLLElBQUgsQ0FBUSxvQ0FBUixDQUpGO0FBS3RCa0MsZ0JBQUFBLGVBQWUsQ0FBQ2hDLE1BQWhCLEdBQXlCLEtBQXpCO0FBQ0Q7O0FBM0NFO0FBNENILHFCQUFNeUIsZUFBR1EsY0FBSCxDQUFrQixHQUFsQixDQUFOOztBQTVDRztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVDtBQWdERDtBQTdHTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVpbGRTeW1ib2xzIGZyb20gJy4vYnVpbGRTeW1ib2xzJztcclxuaW1wb3J0IGNvIGZyb20gJy4vY28uY2MnO1xyXG5pbXBvcnQgcGxheUFsbCBmcm9tICcuL3BsYXlBbGwnO1xyXG5pbXBvcnQgc2h1ZmZsZSBmcm9tICcuL3NodWZmbGUnO1xyXG5cclxuaW1wb3J0IHJlcXVlc3RUYWJsZUluZm8gZnJvbSAnLi9yZXF1ZXN0VGFibGVJbmZvJztcclxuaW1wb3J0IHJlcXVlc3RHYW1lUmVzdWx0IGZyb20gJy4vcmVxdWVzdEdhbWVSZXN1bHQnO1xyXG5sZXQgUHVibGljU2V0VXA9cmVxdWlyZSgnUHVibGljU2V0VXAnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgXHJcblxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5NdXNpY0NsaXAsIHRydWUpO1xyXG4gICAgY2MuZmluZCgnU3ltYm9scycsIHRoaXMubm9kZSkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICBjYy5maW5kKCdFZmZlY3QnLCB0aGlzLm5vZGUpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGluZXNOb2RlID0gY2MuZmluZCgnTGluZXMnLCB0aGlzLm5vZGUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc05vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgIGxpbmVzTm9kZS5nZXRDaGlsZEJ5TmFtZShgJHtpICsgMX1gKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhbmNob3JzTm9kZSA9IGNjLmZpbmQoJ0FuY2hvcnMnLCB0aGlzLm5vZGUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNvbCA9IGFuY2hvcnNOb2RlLmdldENoaWxkQnlOYW1lKGAke2l9YCk7XHJcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDM7IGorKykge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGNvbC5nZXRDaGlsZEJ5TmFtZShgJHtqfWApO1xyXG4gICAgICAgIHJvdy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgfSxcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBcclxuXHJcbiAgICBjYy5zdG9yZS5zeW1ib2xEYXRhTGlzdCA9IG5ldyBBcnJheSg1KTtcclxuICAgIGNjLnN0b3JlLnJhbmRvbVN5bWJvbERhdGFMaXN0ID0gbmV3IEFycmF5KGNjLnN0b3JlLnN5bWJvbERhdGFMaXN0Lmxlbmd0aCk7XHJcblxyXG4gICAgY29uc3QgeyBzeW1ib2xEYXRhTGlzdCwgcmFuZG9tU3ltYm9sRGF0YUxpc3QgfSA9IGNjLnN0b3JlO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5kb21TeW1ib2xEYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzeW1ib2xEYXRhTGlzdFtpXSA9IG5ldyBBcnJheSgyNCk7XHJcbiAgICAgIHJhbmRvbVN5bWJvbERhdGFMaXN0W2ldID0gbmV3IEFycmF5KHN5bWJvbERhdGFMaXN0W2ldLmxlbmd0aCk7XHJcbiAgICAgIGZvciAobGV0IGogPSAwLCBqY250ID0gcmFuZG9tU3ltYm9sRGF0YUxpc3RbaV0ubGVuZ3RoOyBqIDwgamNudDsgaisrKSB7XHJcbiAgICAgICAgcmFuZG9tU3ltYm9sRGF0YUxpc3RbaV1bal0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGlHcmlkIH0gPSBjYy5zdG9yZS5nYW1lUmVzdWx0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xEYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzaHVmZmxlKHJhbmRvbVN5bWJvbERhdGFMaXN0W2ldKTtcclxuXHJcbiAgICAgIGxldCBqLCBrO1xyXG5cclxuICAgICAgaiA9IDA7XHJcbiAgICAgIHdoaWxlIChqIDwgMykge1xyXG4gICAgICAgIHN5bWJvbERhdGFMaXN0W2ldW2pdID0gaUdyaWRbaSArIDUgKiAoMiAtIGopXTtcclxuICAgICAgICBqKys7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGsgPSBzeW1ib2xEYXRhTGlzdFtpXS5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChqIDwgaykge1xyXG4gICAgICAgIHN5bWJvbERhdGFMaXN0W2ldW2pdID0gcmFuZG9tU3ltYm9sRGF0YUxpc3RbaV1bal07XHJcbiAgICAgICAgaisrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBidWlsZFN5bWJvbHMoc3ltYm9sRGF0YUxpc3QpO1xyXG5cclxuICAgIGNvLnN0YXJ0KGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgY2Muc3RvcmUuZ2FtZVJlc3VsdEdvdFN0YXR1cyA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgc3ltYm9sRGF0YUxpc3QsIHJhbmRvbVN5bWJvbERhdGFMaXN0IH0gPSBjYy5zdG9yZTtcclxuICAgICAgICBjb25zdCBpR3JpZDAgPSBjYy5zdG9yZS5nYW1lUmVzdWx0LmlHcmlkO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9sRGF0YUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHNodWZmbGUocmFuZG9tU3ltYm9sRGF0YUxpc3RbaV0pO1xyXG5cclxuICAgICAgICAgIGxldCBqLCBrO1xyXG5cclxuICAgICAgICAgIGogPSAwO1xyXG4gICAgICAgICAgayA9IHN5bWJvbERhdGFMaXN0W2ldLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICB3aGlsZSAoaiA8IDMpIHtcclxuICAgICAgICAgICAgc3ltYm9sRGF0YUxpc3RbaV1bal0gPSBpR3JpZDBbaSArIDUgKiAoMiAtIGopXTtcclxuICAgICAgICAgICAgc3ltYm9sRGF0YUxpc3RbaV1bayAtIGpdID0gaUdyaWQwW2kgKyA1ICogal07XHJcbiAgICAgICAgICAgIGorKztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBrID0gc3ltYm9sRGF0YUxpc3RbaV0ubGVuZ3RoIC0gMztcclxuICAgICAgICAgIHdoaWxlIChqIDwgaykge1xyXG4gICAgICAgICAgICBzeW1ib2xEYXRhTGlzdFtpXVtqXSA9IHJhbmRvbVN5bWJvbERhdGFMaXN0W2ldW2pdO1xyXG4gICAgICAgICAgICBqKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkU3ltYm9scyhzeW1ib2xEYXRhTGlzdCk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHlpZWxkIGNvLndhaXRVbnRpbCgoKSA9PiBjYy5zdG9yZS5wbGF5aW5nID09PSB0cnVlKTtcclxuXHJcbiAgICAgICAgcmVxdWVzdEdhbWVSZXN1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICB5aWVsZCBwbGF5QWxsKCk7XHJcblxyXG4gICAgICAgIHJlcXVlc3RUYWJsZUluZm8oKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN0b3JlLnBsYXlpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgIGlmKGNjLnN0b3JlLmF1dG89PWZhbHNlKXtcclxuICAgICAgICAgICAgY2Muc3RvcmUucGxheWluZz1mYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgQXV0b1BsYXlCdXR0b24gPSBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL3BsYXlCdXR0b24nKTtcclxuICAgICAgICAgICAgQXV0b1BsYXlCdXR0b24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgTWFudWFQbGF5QnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9QYXVzZUJ1dHRvbicpO1xyXG4gICAgICAgICAgICBNYW51YVBsYXlCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB5aWVsZCBjby53YWl0Rm9yU2Vjb25kcygxLjIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIl19