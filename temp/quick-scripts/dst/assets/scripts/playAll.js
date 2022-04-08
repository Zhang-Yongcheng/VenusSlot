
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/playAll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09f22Z8iyxG6rlCefOne9ya', 'playAll');
// scripts/playAll.js

"use strict";

exports.__esModule = true;
exports["default"] = playAll;

var _co = _interopRequireDefault(require("./co.cc"));

var _playLine = _interopRequireDefault(require("./playLine"));

var _playSymbolCol = _interopRequireDefault(require("./playSymbolCol"));

var _playVideo = _interopRequireDefault(require("./playVideo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(playAll);

var PublicSetUp = require('PublicSetUp');

function playAll() {
  var cols, _loop, i, _cc$store$gameResult, iLine, iFrame, WinPointLine, WinTotalPoint, lastLine, _i, _i2, lines, _loop2, _i3;

  return regeneratorRuntime.wrap(function playAll$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // 1
          cols = [];

          _loop = function _loop(i) {
            cols.push(_co["default"].start( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return (0, _playSymbolCol["default"])(i, 3.0);

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            })));
          };

          for (i = 0; i < 5; i++) {
            _loop(i);
          }

          _context3.next = 5;
          return _co["default"].waitForAll(cols);

        case 5:
          _cc$store$gameResult = cc.store.gameResult, iLine = _cc$store$gameResult.iLine, iFrame = _cc$store$gameResult.iFrame, WinPointLine = _cc$store$gameResult.WinPointLine, WinTotalPoint = _cc$store$gameResult.WinTotalPoint; // 2

          lastLine = -1;
          _i = 9 - 1;

        case 8:
          if (!(_i >= 0)) {
            _context3.next = 15;
            break;
          }

          if (!(iLine[_i] === 1)) {
            _context3.next = 12;
            break;
          }

          lastLine = _i;
          return _context3.abrupt("break", 15);

        case 12:
          _i--;
          _context3.next = 8;
          break;

        case 15:
          if (!(lastLine > -1)) {
            _context3.next = 38;
            break;
          }

          _i2 = 0;

        case 17:
          if (!(_i2 < 9)) {
            _context3.next = 25;
            break;
          }

          if (!(iLine[_i2] === 1)) {
            _context3.next = 22;
            break;
          }

          cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = cc.store.gameResult.WinPointLine[_i2];
          _context3.next = 22;
          return (0, _playLine["default"])(_i2, iFrame[_i2], true, _i2 === lastLine, 4.5, 3200);

        case 22:
          _i2++;
          _context3.next = 17;
          break;

        case 25:
          // 3
          lines = [];

          _loop2 = function _loop2(_i3) {
            if (iLine[_i3] === 1) {
              lines.push(_co["default"].start( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0, _playLine["default"])(_i3, iFrame[_i3], false, false, 4.5, 3700);

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));
            }
          };

          for (_i3 = 0; _i3 < 9; _i3++) {
            _loop2(_i3);
          }

          cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = cc.store.gameResult.WinTotalPoint;
          _context3.next = 31;
          return _co["default"].waitForAll(lines);

        case 31:
          if (!(lines.length >= 2)) {
            _context3.next = 38;
            break;
          }

          _context3.next = 34;
          return (0, _playVideo["default"])('random');

        case 34:
          cc.find('Canvas/Game/Machine/Particle_coin').active = false;
          cc.find('Canvas/Game/Machine/VideoFrame').active = false;
          cc.audioEngine.stopAll(PublicSetUp.audio1, false);
          cc.audioEngine.playMusic(PublicSetUp.MusicClip, true);

        case 38:
          cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = 0; // update user points

          cc.find('Canvas/Game/Machine/UI/GamePoint/Value').getComponent(cc.Label).string = cc.store.userPoints;

        case 40:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheUFsbC5qcyJdLCJuYW1lcyI6WyJwbGF5QWxsIiwiUHVibGljU2V0VXAiLCJyZXF1aXJlIiwiY29scyIsImkiLCJwdXNoIiwiY28iLCJzdGFydCIsIndhaXRGb3JBbGwiLCJjYyIsInN0b3JlIiwiZ2FtZVJlc3VsdCIsImlMaW5lIiwiaUZyYW1lIiwiV2luUG9pbnRMaW5lIiwiV2luVG90YWxQb2ludCIsImxhc3RMaW5lIiwiZmluZCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwibGluZXMiLCJsZW5ndGgiLCJhY3RpdmUiLCJhdWRpb0VuZ2luZSIsInN0b3BBbGwiLCJhdWRpbzEiLCJwbGF5TXVzaWMiLCJNdXNpY0NsaXAiLCJ1c2VyUG9pbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O21EQUV5QkE7O0FBRHpCLElBQUlDLFdBQVcsR0FBQ0MsT0FBTyxDQUFDLGFBQUQsQ0FBdkI7O0FBQ2UsU0FBVUYsT0FBVjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2I7QUFDTUcsVUFBQUEsSUFGTyxHQUVBLEVBRkE7O0FBQUEsaUNBR0pDLENBSEk7QUFJWEQsWUFBQUEsSUFBSSxDQUFDRSxJQUFMLENBQ0VDLGVBQUdDLEtBQUgsdUNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVAsNkJBQU0sK0JBQWNILENBQWQsRUFBaUIsR0FBakIsQ0FBTjs7QUFGTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFULEVBREY7QUFKVzs7QUFHYixlQUFTQSxDQUFULEdBQWEsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQUEsa0JBQW5CQSxDQUFtQjtBQVEzQjs7QUFYWTtBQVliLGlCQUFNRSxlQUFHRSxVQUFILENBQWNMLElBQWQsQ0FBTjs7QUFaYTtBQUFBLGlDQWEwQ00sRUFB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QUFILENBQWVDLE9BQWYsQ0FBdUJ4QixXQUFXLENBQUN5QixNQUFuQyxFQUEyQyxLQUEzQztBQUNBakIsVUFBQUEsRUFBRSxDQUFDZSxXQUFILENBQWVHLFNBQWYsQ0FBeUIxQixXQUFXLENBQUMyQixTQUFyQyxFQUFnRCxJQUFoRDs7QUF0RFM7QUEyRGJuQixVQUFBQSxFQUFFLENBQUNRLElBQUgsQ0FBUSx3Q0FBUixFQUFrREMsWUFBbEQsQ0FBK0RULEVBQUUsQ0FBQ1UsS0FBbEUsRUFBeUVDLE1BQXpFLEdBQWtGLENBQWxGLENBM0RhLENBNkRiOztBQUNBWCxVQUFBQSxFQUFFLENBQUNRLElBQUgsQ0FBUSx3Q0FBUixFQUFrREMsWUFBbEQsQ0FBK0RULEVBQUUsQ0FBQ1UsS0FBbEUsRUFBeUVDLE1BQXpFLEdBQWtGWCxFQUFFLENBQUNDLEtBQUgsQ0FBU21CLFVBQTNGOztBQTlEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvIGZyb20gJy4vY28uY2MnO1xyXG5pbXBvcnQgcGxheUxpbmUgZnJvbSAnLi9wbGF5TGluZSc7XHJcbmltcG9ydCBwbGF5U3ltYm9sQ29sIGZyb20gJy4vcGxheVN5bWJvbENvbCc7XHJcbmltcG9ydCBwbGF5VmlkZW8gZnJvbSAnLi9wbGF5VmlkZW8nO1xyXG5sZXQgUHVibGljU2V0VXA9cmVxdWlyZSgnUHVibGljU2V0VXAnKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBsYXlBbGwoKSB7XHJcbiAgLy8gMVxyXG4gIGNvbnN0IGNvbHMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgY29scy5wdXNoKFxyXG4gICAgICBjby5zdGFydChmdW5jdGlvbiogKCkge1xyXG5cclxuICAgICAgICB5aWVsZCBwbGF5U3ltYm9sQ29sKGksIDMuMCk7XHJcblxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgeWllbGQgY28ud2FpdEZvckFsbChjb2xzKTtcclxuICBjb25zdCB7IGlMaW5lLCBpRnJhbWUsIFdpblBvaW50TGluZSwgV2luVG90YWxQb2ludCB9ID0gY2Muc3RvcmUuZ2FtZVJlc3VsdDtcclxuXHJcbiAgLy8gMlxyXG4gIGxldCBsYXN0TGluZSA9IC0xO1xyXG4gIGZvciAobGV0IGkgPSA5IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgIGlmIChpTGluZVtpXSA9PT0gMSkge1xyXG4gICAgICBsYXN0TGluZSA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAobGFzdExpbmUgPiAtMSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgICAgaWYgKGlMaW5lW2ldID09PSAxKSB7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9HYW1lU2NvcmUvVmFsdWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN0b3JlLmdhbWVSZXN1bHQuV2luUG9pbnRMaW5lW2ldO1xyXG4gICAgICAgIHlpZWxkIHBsYXlMaW5lKGksIGlGcmFtZVtpXSwgdHJ1ZSwgaSA9PT0gbGFzdExpbmUsIDQuNSwgMzIwMCk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gM1xyXG4gICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgIGlmIChpTGluZVtpXSA9PT0gMSkge1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICBjby5zdGFydChmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB5aWVsZCBwbGF5TGluZShpLCBpRnJhbWVbaV0sIGZhbHNlLCBmYWxzZSwgNC41LCAzNzAwKTtcclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvR2FtZVNjb3JlL1ZhbHVlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy5zdG9yZS5nYW1lUmVzdWx0LldpblRvdGFsUG9pbnQ7XHJcblxyXG4gICAgeWllbGQgY28ud2FpdEZvckFsbChsaW5lcyk7XHJcblxyXG4gICAgLy8gNFxyXG4gICAgaWYgKGxpbmVzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgIHlpZWxkIHBsYXlWaWRlbygncmFuZG9tJyk7XHJcbiAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvUGFydGljbGVfY29pbicpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9WaWRlb0ZyYW1lJykuYWN0aXZlPWZhbHNlO1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKFB1YmxpY1NldFVwLmF1ZGlvMSwgZmFsc2UpO1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoUHVibGljU2V0VXAuTXVzaWNDbGlwLCB0cnVlKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0dhbWVTY29yZS9WYWx1ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gMDtcclxuXHJcbiAgLy8gdXBkYXRlIHVzZXIgcG9pbnRzXHJcbiAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9HYW1lUG9pbnQvVmFsdWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN0b3JlLnVzZXJQb2ludHM7XHJcbn1cclxuIl19