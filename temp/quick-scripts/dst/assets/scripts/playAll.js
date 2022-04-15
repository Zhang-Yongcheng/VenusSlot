
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

var _PublicSetUp = require("./PublicSetUp");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(playAll);

var PublicSetUp = require('PublicSetUp');

function playAll() {
  var addFloat, mulFloat, cols, _loop, i, _cc$store$gameResult, type, iLine, iFrame, freeGameNCnts, WinPointLine, WinTotalPoint, heart, VideoIdx, lastLine, _i, _i2, lines, _loop2, _i3, heartObj, anim, _total;

  return regeneratorRuntime.wrap(function playAll$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          mulFloat = function _mulFloat(num1, num2) {
            var m = 0,
                s1 = num1.toString(),
                s2 = num2.toString();

            try {
              m += s1.split(".")[1].length;
            } catch (e) {}

            try {
              m += s2.toString().split(".")[1].length;
            } catch (e) {}

            return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
          };

          addFloat = function _addFloat(num1, num2) {
            var r1, r2, m;

            try {
              r1 = num1.toString().split(".")[1].length;
            } catch (e) {
              r1 = 0;
            }

            try {
              r2 = num2.toString().split(".")[1].length;
            } catch (e) {
              r2 = 0;
            }

            m = Math.pow(10, Math.max(r1, r2));
            return (mulFloat(num1, m) + mulFloat(num2, m)) / m;
          };

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

          _context3.next = 7;
          return _co["default"].waitForAll(cols);

        case 7:
          _cc$store$gameResult = cc.store.gameResult, type = _cc$store$gameResult.type, iLine = _cc$store$gameResult.iLine, iFrame = _cc$store$gameResult.iFrame, freeGameNCnts = _cc$store$gameResult.freeGameNCnts, WinPointLine = _cc$store$gameResult.WinPointLine, WinTotalPoint = _cc$store$gameResult.WinTotalPoint, heart = _cc$store$gameResult.heart, VideoIdx = _cc$store$gameResult.VideoIdx; // 2

          lastLine = -1;
          _i = 9 - 1;

        case 10:
          if (!(_i >= 0)) {
            _context3.next = 17;
            break;
          }

          if (!(iLine[_i] === 1)) {
            _context3.next = 14;
            break;
          }

          lastLine = _i;
          return _context3.abrupt("break", 17);

        case 14:
          _i--;
          _context3.next = 10;
          break;

        case 17:
          if (!(lastLine > -1)) {
            _context3.next = 38;
            break;
          }

          _i2 = 0;

        case 19:
          if (!(_i2 < 9)) {
            _context3.next = 27;
            break;
          }

          if (!(iLine[_i2] === 1)) {
            _context3.next = 24;
            break;
          }

          cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = cc.store.gameResult.WinPointLine[_i2];
          _context3.next = 24;
          return (0, _playLine["default"])(_i2, iFrame[_i2], true, _i2 === lastLine, 4.5, 3200);

        case 24:
          _i2++;
          _context3.next = 19;
          break;

        case 27:
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
          _context3.next = 33;
          return _co["default"].waitForAll(lines);

        case 33:
          if (!(lines.length >= 2)) {
            _context3.next = 38;
            break;
          }

          _context3.next = 36;
          return (0, _playVideo["default"])('random', 0);

        case 36:
          cc.audioEngine.stopAll(PublicSetUp.audio1, false);

          if (PublicSetUp.sound == 1) {
            cc.audioEngine.playMusic(PublicSetUp.MusicClip, true);
          }

        case 38:
          heartObj = cc.find('Canvas/Game/heartPanel').getComponent("heart");
          heartObj.show(heart);

          if (!(VideoIdx != null && VideoIdx != 0)) {
            _context3.next = 43;
            break;
          }

          _context3.next = 43;
          return (0, _playVideo["default"])('index', VideoIdx);

        case 43:
          // if(PublicSetUp.test==11){
          //   freeGameNCnts[0]=1;
          //   PublicSetUp.test--;
          //   freeGameNCnts[1]=PublicSetUp.test;
          // }else if(PublicSetUp.test<11){
          //   cc.store.type=2;
          //   PublicSetUp.test--;
          //   freeGameNCnts[2]=PublicSetUp.test;
          //   if(PublicSetUp.test==0){
          //     cc.store.type=1;
          //     PublicSetUp.test=12;
          //   }
          // }
          //freeSpin
          anim = cc.find('Canvas/Game/FreeSpin').getComponent("freeSpinAnim");

          if (!(freeGameNCnts[0] == 1 && cc.store.type == 0)) {
            _context3.next = 53;
            break;
          }

          //有中免費遊戲(第一次)
          if (cc.store.auto == false) {
            //如果目前不是自動
            //則結束後改手動
            cc.store.type = 3;
          } else {
            cc.store.type = 2;
          }

          cc.store.auto = true;
          anim.play();
          _context3.next = 50;
          return _co["default"].waitForSeconds(3.1);

        case 50:
          cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/cnt').getComponent(cc.Label).string = freeGameNCnts[1];
          _context3.next = 54;
          break;

        case 53:
          if (type == 2) {
            //如果目前是免費遊戲
            cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/cnt').getComponent(cc.Label).string = freeGameNCnts[2];
            _total = addFloat(PublicSetUp.freeSpinTotal, cc.store.gameResult.WinTotalPoint);
            PublicSetUp.freeSpinTotal = _total;
            cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/total').getComponent(cc.Label).string = PublicSetUp.freeSpinTotal;

            if (freeGameNCnts[2] == 0) {
              cc.store.type = 1;
            }
          }

        case 54:
          if (!(cc.store.type == 1)) {
            _context3.next = 62;
            break;
          }

          //最後一次
          cc.store.type = 0;

          if (cc.store.FreeTotalPoint != null) {
            cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/total').getComponent(cc.Label).string = cc.store.FreeTotalPoint;
          }

          _context3.next = 59;
          return _co["default"].waitForSeconds(2);

        case 59:
          anim.UIOff();
          PublicSetUp.freeSpinTotal = 0;

          if (cc.store.type == 3) {
            cc.store.auto = false;
          }

        case 62:
          cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = 0; // update user points

          cc.find('Canvas/Game/Machine/UI/GamePoint/Value').getComponent(cc.Label).string = cc.store.userPoints;

        case 64:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheUFsbC5qcyJdLCJuYW1lcyI6WyJwbGF5QWxsIiwiUHVibGljU2V0VXAiLCJyZXF1aXJlIiwiYWRkRmxvYXQiLCJtdWxGbG9hdCIsIm51bTEiLCJudW0yIiwibSIsInMxIiwidG9TdHJpbmciLCJzMiIsInNwbGl0IiwibGVuZ3RoIiwiZSIsIk51bWJlciIsInJlcGxhY2UiLCJNYXRoIiwicG93IiwicjEiLCJyMiIsIm1heCIsImNvbHMiLCJpIiwicHVzaCIsImNvIiwic3RhcnQiLCJ3YWl0Rm9yQWxsIiwiY2MiLCJzdG9yZSIsImdhbWVSZXN1bHQiLCJ0eXBlIiwiaUxpbmUiLCJpRnJhbWUiLCJmcmVlR2FtZU5DbnRzIiwiV2luUG9pbnRMaW5lIiwiV2luVG90YWxQb2ludCIsImhlYXJ0IiwiVmlkZW9JZHgiLCJsYXN0TGluZSIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsImxpbmVzIiwiYXVkaW9FbmdpbmUiLCJzdG9wQWxsIiwiYXVkaW8xIiwic291bmQiLCJwbGF5TXVzaWMiLCJNdXNpY0NsaXAiLCJoZWFydE9iaiIsInNob3ciLCJhbmltIiwiYXV0byIsInBsYXkiLCJ3YWl0Rm9yU2Vjb25kcyIsIl90b3RhbCIsImZyZWVTcGluVG90YWwiLCJGcmVlVG90YWxQb2ludCIsIlVJT2ZmIiwidXNlclBvaW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OzttREFJeUJBOztBQUh6QixJQUFJQyxXQUFXLEdBQUNDLE9BQU8sQ0FBQyxhQUFELENBQXZCOztBQUdlLFNBQVVGLE9BQVY7QUFBQSxNQUdKRyxRQUhJLEVBa0JKQyxRQWxCSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCSkEsVUFBQUEsUUFsQkksc0JBa0JLQyxJQWxCTCxFQWtCVUMsSUFsQlYsRUFrQmU7QUFDMUIsZ0JBQUlDLENBQUMsR0FBRyxDQUFSO0FBQUEs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Q0FBUzhCLGNBQTlGO0FBQ0Q7O0FBakpRO0FBbUpULGlCQUFNbEMsZUFBRytCLGNBQUgsQ0FBa0IsQ0FBbEIsQ0FBTjs7QUFuSlM7QUFvSlRILFVBQUFBLElBQUksQ0FBQ08sS0FBTDtBQUNBMUQsVUFBQUEsV0FBVyxDQUFDd0QsYUFBWixHQUEwQixDQUExQjs7QUFDQSxjQUFHOUIsRUFBRSxDQUFDQyxLQUFILENBQVNFLElBQVQsSUFBZSxDQUFsQixFQUFvQjtBQUNsQkgsWUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVN5QixJQUFULEdBQWMsS0FBZDtBQUNEOztBQXhKUTtBQTZKYjFCLFVBQUFBLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLHdDQUFSLEVBQWtEQyxZQUFsRCxDQUErRGIsRUFBRSxDQUFDYyxLQUFsRSxFQUF5RUMsTUFBekUsR0FBa0YsQ0FBbEYsQ0E3SmEsQ0ErSmI7O0FBQ0FmLFVBQUFBLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLHdDQUFSLEVBQWtEQyxZQUFsRCxDQUErRGIsRUFBRSxDQUFDYyxLQUFsRSxFQUF5RUMsTUFBekUsR0FBa0ZmLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTZ0MsVUFBM0Y7O0FBaEthO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY28gZnJvbSAnLi9jby5jYyc7XHJcbmltcG9ydCBwbGF5TGluZSBmcm9tICcuL3BsYXlMaW5lJztcclxuaW1wb3J0IHBsYXlTeW1ib2xDb2wgZnJvbSAnLi9wbGF5U3ltYm9sQ29sJztcclxuaW1wb3J0IHBsYXlWaWRlbyBmcm9tICcuL3BsYXlWaWRlbyc7XHJcbmltcG9ydCB7IHRlc3QgfSBmcm9tICcuL1B1YmxpY1NldFVwJztcclxubGV0IFB1YmxpY1NldFVwPXJlcXVpcmUoJ1B1YmxpY1NldFVwJyk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBsYXlBbGwoKSB7XHJcblxyXG5cclxuICBmdW5jdGlvbiBhZGRGbG9hdChudW0xLG51bTIpe1xyXG4gICAgdmFyIHIxLCByMiwgbTtcclxuICAgIHRyeXsgXHJcbiAgICAgICAgcjEgPSBudW0xLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDsgXHJcbiAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgcjEgPSAwOyBcclxuICAgIH1cclxuICAgIHRyeXtcclxuICAgICAgICByMiA9IG51bTIudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoO1xyXG4gICAgfSBjYXRjaChlKXtcclxuICAgICAgICByMiA9IDA7XHJcbiAgICB9XHJcbiAgICBtID0gTWF0aC5wb3coMTAsIE1hdGgubWF4KHIxLCByMikpO1xyXG4gICAgcmV0dXJuIChtdWxGbG9hdChudW0xLCBtKSArIG11bEZsb2F0KG51bTIsIG0pKSAvIG07XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG11bEZsb2F0KG51bTEsbnVtMil7XHJcbiAgICB2YXIgbSA9IDAsIHMxID0gbnVtMS50b1N0cmluZygpLCBzMiA9IG51bTIudG9TdHJpbmcoKTtcclxuICAgIHRyeXsgXHJcbiAgICAgICAgbSArPSBzMS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoOyBcclxuICAgIH1jYXRjaChlKXsgfVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIG0gKz0gczIudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoO1xyXG4gICAgfSBjYXRjaChlKXsgfVxyXG4gXHJcbiAgICByZXR1cm4gTnVtYmVyKHMxLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSAqIE51bWJlcihzMi5yZXBsYWNlKFwiLlwiLCBcIlwiKSkgLyBNYXRoLnBvdygxMCwgbSk7XHJcbn1cclxuICAvLyAxXHJcbiAgY29uc3QgY29scyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICBjb2xzLnB1c2goXHJcbiAgICAgIGNvLnN0YXJ0KGZ1bmN0aW9uKiAoKSB7XHJcblxyXG4gICAgICAgIHlpZWxkIHBsYXlTeW1ib2xDb2woaSwgMy4wKTtcclxuXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICB5aWVsZCBjby53YWl0Rm9yQWxsKGNvbHMpO1xyXG4gIGNvbnN0IHt0eXBlLCBpTGluZSwgaUZyYW1lLGZyZWVHYW1lTkNudHMsIFdpblBvaW50TGluZSwgV2luVG90YWxQb2ludCAsaGVhcnQsVmlkZW9JZHh9ID0gY2Muc3RvcmUuZ2FtZVJlc3VsdDtcclxuXHJcbiAgLy8gMlxyXG4gIGxldCBsYXN0TGluZSA9IC0xO1xyXG4gIGZvciAobGV0IGkgPSA5IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgIGlmIChpTGluZVtpXSA9PT0gMSkge1xyXG4gICAgICBsYXN0TGluZSA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAobGFzdExpbmUgPiAtMSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgICAgaWYgKGlMaW5lW2ldID09PSAxKSB7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9HYW1lU2NvcmUvVmFsdWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN0b3JlLmdhbWVSZXN1bHQuV2luUG9pbnRMaW5lW2ldO1xyXG4gICAgICAgIHlpZWxkIHBsYXlMaW5lKGksIGlGcmFtZVtpXSwgdHJ1ZSwgaSA9PT0gbGFzdExpbmUsIDQuNSwgMzIwMCk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gM1xyXG4gICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgIGlmIChpTGluZVtpXSA9PT0gMSkge1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICBjby5zdGFydChmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB5aWVsZCBwbGF5TGluZShpLCBpRnJhbWVbaV0sIGZhbHNlLCBmYWxzZSwgNC41LCAzNzAwKTtcclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvR2FtZVNjb3JlL1ZhbHVlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy5zdG9yZS5nYW1lUmVzdWx0LldpblRvdGFsUG9pbnQ7XHJcblxyXG4gICAgeWllbGQgY28ud2FpdEZvckFsbChsaW5lcyk7XHJcblxyXG4gICAgLy8gNFxyXG4gICAgaWYgKGxpbmVzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgIHlpZWxkIHBsYXlWaWRlbygncmFuZG9tJywwKTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKFB1YmxpY1NldFVwLmF1ZGlvMSwgZmFsc2UpO1xyXG4gICAgICBpZihQdWJsaWNTZXRVcC5zb3VuZD09MSl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKFB1YmxpY1NldFVwLk11c2ljQ2xpcCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgICBsZXQgaGVhcnRPYmo9Y2MuZmluZCgnQ2FudmFzL0dhbWUvaGVhcnRQYW5lbCcpLmdldENvbXBvbmVudChcImhlYXJ0XCIpO1xyXG4gICAgaGVhcnRPYmouc2hvdyhoZWFydCk7XHJcblxyXG5cclxuICAgIGlmKFZpZGVvSWR4IT1udWxsICYmIFZpZGVvSWR4IT0wKXtcclxuICAgICAgeWllbGQgcGxheVZpZGVvKCdpbmRleCcsVmlkZW9JZHgpO1xyXG4gICAgfVxyXG4gICAgLy8gaWYoUHVibGljU2V0VXAudGVzdD09MTEpe1xyXG4gICAgLy8gICBmcmVlR2FtZU5DbnRzWzBdPTE7XHJcbiAgICAvLyAgIFB1YmxpY1NldFVwLnRlc3QtLTtcclxuICAgIC8vICAgZnJlZUdhbWVOQ250c1sxXT1QdWJsaWNTZXRVcC50ZXN0O1xyXG4gICAgLy8gfWVsc2UgaWYoUHVibGljU2V0VXAudGVzdDwxMSl7XHJcbiAgICAvLyAgIGNjLnN0b3JlLnR5cGU9MjtcclxuICAgIC8vICAgUHVibGljU2V0VXAudGVzdC0tO1xyXG4gICAgLy8gICBmcmVlR2FtZU5DbnRzWzJdPVB1YmxpY1NldFVwLnRlc3Q7XHJcbiAgICAvLyAgIGlmKFB1YmxpY1NldFVwLnRlc3Q9PTApe1xyXG4gICAgLy8gICAgIGNjLnN0b3JlLnR5cGU9MTtcclxuICAgIC8vICAgICBQdWJsaWNTZXRVcC50ZXN0PTEyO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICAvL2ZyZWVTcGluXHJcbiAgICBsZXQgYW5pbSA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL0ZyZWVTcGluJykuZ2V0Q29tcG9uZW50KFwiZnJlZVNwaW5BbmltXCIpO1xyXG4gICAgaWYoZnJlZUdhbWVOQ250c1swXT09MSAmJiBjYy5zdG9yZS50eXBlPT0wKXtcclxuICAgICAgLy/mnInkuK3lhY3osrvpgYrmiLIo56ys5LiA5qyhKVxyXG4gICAgICBcclxuICAgICAgaWYoY2Muc3RvcmUuYXV0bz09ZmFsc2Upe1xyXG4gICAgICAgIC8v5aaC5p6c55uu5YmN5LiN5piv6Ieq5YuVXHJcbiAgICAgICAgLy/liYfntZDmnZ/lvozmlLnmiYvli5VcclxuICAgICAgICBjYy5zdG9yZS50eXBlPTM7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNjLnN0b3JlLnR5cGU9MjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY2Muc3RvcmUuYXV0bz10cnVlO1xyXG4gICAgICBhbmltLnBsYXkoKTtcclxuICAgICAgeWllbGQgY28ud2FpdEZvclNlY29uZHMoMy4xKTtcclxuICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9GcmVlU3BpbnNQYW5lbC9jbnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1mcmVlR2FtZU5DbnRzWzFdO1xyXG4gICAgICBcclxuICAgIH1lbHNlIGlmKHR5cGU9PTIpe1xyXG4gICAgICAvL+WmguaenOebruWJjeaYr+WFjeiyu+mBiuaIslxyXG4gICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0ZyZWVTcGluc1BhbmVsL2NudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWZyZWVHYW1lTkNudHNbMl07XHJcbiAgICAgIGxldCBfdG90YWwgPWFkZEZsb2F0KFB1YmxpY1NldFVwLmZyZWVTcGluVG90YWwsY2Muc3RvcmUuZ2FtZVJlc3VsdC5XaW5Ub3RhbFBvaW50KTsgICAgXHJcbiAgICAgIFB1YmxpY1NldFVwLmZyZWVTcGluVG90YWw9X3RvdGFsO1xyXG4gICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0ZyZWVTcGluc1BhbmVsL3RvdGFsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9UHVibGljU2V0VXAuZnJlZVNwaW5Ub3RhbDtcclxuICAgICAgaWYoZnJlZUdhbWVOQ250c1syXT09MCl7XHJcbiAgICAgICAgY2Muc3RvcmUudHlwZT0xO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKGNjLnN0b3JlLnR5cGU9PTEpe1xyXG4gICAgICAvL+acgOW+jOS4gOasoVxyXG4gICAgICBjYy5zdG9yZS50eXBlPTA7XHJcbiAgICAgIGlmKGNjLnN0b3JlLkZyZWVUb3RhbFBvaW50IT1udWxsKXtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0ZyZWVTcGluc1BhbmVsL3RvdGFsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9Y2Muc3RvcmUuRnJlZVRvdGFsUG9pbnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHlpZWxkIGNvLndhaXRGb3JTZWNvbmRzKDIpOyAgICAgXHJcbiAgICAgIGFuaW0uVUlPZmYoKTtcclxuICAgICAgUHVibGljU2V0VXAuZnJlZVNwaW5Ub3RhbD0wXHJcbiAgICAgIGlmKGNjLnN0b3JlLnR5cGU9PTMpe1xyXG4gICAgICAgIGNjLnN0b3JlLmF1dG89ZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0dhbWVTY29yZS9WYWx1ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gMDtcclxuXHJcbiAgLy8gdXBkYXRlIHVzZXIgcG9pbnRzXHJcbiAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9HYW1lUG9pbnQvVmFsdWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN0b3JlLnVzZXJQb2ludHM7XHJcbn1cclxuIl19