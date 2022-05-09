
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
  var addFloat, mulFloat, cols, _loop, i, _cc$store$gameResult, type, iLine, iFrame, freeGameNCnts, WinPointLine, WinTotalPoint, heart, VideoIdx, lastLine, _i, score, _i2, lines, _loop2, _i3, heartObj, anim, _total;

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

          if (PublicSetUp.sound == 1) {
            cc.audioEngine.playEffect(PublicSetUp.audio["0024"], false);
          }

          _context3.next = 8;
          return _co["default"].waitForAll(cols);

        case 8:
          _cc$store$gameResult = cc.store.gameResult, type = _cc$store$gameResult.type, iLine = _cc$store$gameResult.iLine, iFrame = _cc$store$gameResult.iFrame, freeGameNCnts = _cc$store$gameResult.freeGameNCnts, WinPointLine = _cc$store$gameResult.WinPointLine, WinTotalPoint = _cc$store$gameResult.WinTotalPoint, heart = _cc$store$gameResult.heart, VideoIdx = _cc$store$gameResult.VideoIdx; // 2

          lastLine = -1;
          _i = 9 - 1;

        case 11:
          if (!(_i >= 0)) {
            _context3.next = 18;
            break;
          }

          if (!(iLine[_i] === 1)) {
            _context3.next = 15;
            break;
          }

          lastLine = _i;
          return _context3.abrupt("break", 18);

        case 15:
          _i--;
          _context3.next = 11;
          break;

        case 18:
          score = cc.find('Canvas/Game/score').getComponent("score");

          if (!(lastLine > -1)) {
            _context3.next = 41;
            break;
          }

          _i2 = 0;

        case 21:
          if (!(_i2 < 9)) {
            _context3.next = 31;
            break;
          }

          if (!(iLine[_i2] === 1)) {
            _context3.next = 28;
            break;
          }

          cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = cc.store.gameResult.WinPointLine[_i2];
          score.run(cc.store.gameResult.WinPointLine[_i2]);

          if (PublicSetUp.sound == 1) {
            cc.audioEngine.playEffect(PublicSetUp.audio["0022"], false);
          }

          _context3.next = 28;
          return (0, _playLine["default"])(_i2, iFrame[_i2], true, _i2 === lastLine, 4.5, 1000);

        case 28:
          _i2++;
          _context3.next = 21;
          break;

        case 31:
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
                        return (0, _playLine["default"])(_i3, iFrame[_i3], false, false, 4.5, 1500);

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
          _context3.next = 37;
          return _co["default"].waitForAll(lines);

        case 37:
          if (!(lines.length >= 2)) {
            _context3.next = 41;
            break;
          }

          _context3.next = 40;
          return (0, _playVideo["default"])('random', 0);

        case 40:
          if (PublicSetUp.sound == 1) {
            cc.audioEngine.playMusic(PublicSetUp.MusicClip, true);
          }

        case 41:
          heartObj = cc.find('Canvas/Game/heartPanel').getComponent("heart");
          heartObj.show(heart);

          if (!(VideoIdx != null && VideoIdx != 0)) {
            _context3.next = 46;
            break;
          }

          _context3.next = 46;
          return (0, _playVideo["default"])('index', VideoIdx);

        case 46:
          //freeSpin
          anim = cc.find('Canvas/Game/FreeSpin').getComponent("freeSpinAnim");

          if (!(freeGameNCnts[0] == 1 && cc.store.type == 0)) {
            _context3.next = 56;
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
          _context3.next = 53;
          return _co["default"].waitForSeconds(3.1);

        case 53:
          cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/cnt').getComponent(cc.Label).string = freeGameNCnts[1];
          _context3.next = 57;
          break;

        case 56:
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

        case 57:
          if (!(cc.store.type == 1)) {
            _context3.next = 65;
            break;
          }

          //最後一次
          cc.store.type = 0;

          if (cc.store.FreeTotalPoint != null) {
            cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/total').getComponent(cc.Label).string = cc.store.FreeTotalPoint;
          }

          _context3.next = 62;
          return _co["default"].waitForSeconds(2);

        case 62:
          anim.UIOff();
          PublicSetUp.freeSpinTotal = 0;

          if (cc.store.type == 3) {
            cc.store.auto = false;
          }

        case 65:
          cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = 0; // update user points

          cc.find('Canvas/Game/Machine/UI/GamePoint/Value').getComponent(cc.Label).string = cc.store.userPoints;

        case 67:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheUFsbC5qcyJdLCJuYW1lcyI6WyJwbGF5QWxsIiwiUHVibGljU2V0VXAiLCJyZXF1aXJlIiwiYWRkRmxvYXQiLCJtdWxGbG9hdCIsIm51bTEiLCJudW0yIiwibSIsInMxIiwidG9TdHJpbmciLCJzMiIsInNwbGl0IiwibGVuZ3RoIiwiZSIsIk51bWJlciIsInJlcGxhY2UiLCJNYXRoIiwicG93IiwicjEiLCJyMiIsIm1heCIsImNvbHMiLCJpIiwicHVzaCIsImNvIiwic3RhcnQiLCJzb3VuZCIsImNjIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0IiwiYXVkaW8iLCJ3YWl0Rm9yQWxsIiwic3RvcmUiLCJnYW1lUmVzdWx0IiwidHlwZSIsImlMaW5lIiwiaUZyYW1lIiwiZnJlZUdhbWVOQ250cyIsIldpblBvaW50TGluZSIsIldpblRvdGFsUG9pbnQiLCJoZWFydCIsIlZpZGVvSWR4IiwibGFzdExpbmUiLCJzY29yZSIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsInJ1biIsImxpbmVzIiwicGxheU11c2ljIiwiTXVzaWNDbGlwIiwiaGVhcnRPYmoiLCJzaG93IiwiYW5pbSIsImF1dG8iLCJwbGF5Iiwid2FpdEZvclNlY29uZHMiLCJfdG90YWwiLCJmcmVlU3BpblRvdGFsIiwiRnJlZVRvdGFsUG9pbnQiLCJVSU9mZiIsInVzZXJQb2ludHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7bURBSXlCQTs7QUFIekIsSUFBSUMsV0FBVyxHQUFDQyxPQUFPLENBQUMsYUFBRCxDQUF2Qjs7QUFHZSxTQUFVRixPQUFWO0FBQUEsTUFHSkcsUUFISSxFQWtCSkMsUUFsQkk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQkpBLFVBQUFBLFFBbEJJLHNCQWtCS0MsSUFsQkwsRUFrQlVDLElBbEJWLEVBa0JlO0FBQzFCLGdCQUFJQyxDQUFDLEdBQUcs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QUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY28gZnJvbSAnLi9jby5jYyc7XHJcbmltcG9ydCBwbGF5TGluZSBmcm9tICcuL3BsYXlMaW5lJztcclxuaW1wb3J0IHBsYXlTeW1ib2xDb2wgZnJvbSAnLi9wbGF5U3ltYm9sQ29sJztcclxuaW1wb3J0IHBsYXlWaWRlbyBmcm9tICcuL3BsYXlWaWRlbyc7XHJcbmxldCBQdWJsaWNTZXRVcD1yZXF1aXJlKCdQdWJsaWNTZXRVcCcpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwbGF5QWxsKCkge1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gYWRkRmxvYXQobnVtMSxudW0yKXtcclxuICAgIHZhciByMSwgcjIsIG07XHJcbiAgICB0cnl7IFxyXG4gICAgICAgIHIxID0gbnVtMS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7IFxyXG4gICAgfWNhdGNoKGUpe1xyXG4gICAgICAgIHIxID0gMDsgXHJcbiAgICB9XHJcbiAgICB0cnl7XHJcbiAgICAgICAgcjIgPSBudW0yLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDtcclxuICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgcjIgPSAwO1xyXG4gICAgfVxyXG4gICAgbSA9IE1hdGgucG93KDEwLCBNYXRoLm1heChyMSwgcjIpKTtcclxuICAgIHJldHVybiAobXVsRmxvYXQobnVtMSwgbSkgKyBtdWxGbG9hdChudW0yLCBtKSkgLyBtO1xyXG4gIH1cclxuICBmdW5jdGlvbiBtdWxGbG9hdChudW0xLG51bTIpe1xyXG4gICAgdmFyIG0gPSAwLCBzMSA9IG51bTEudG9TdHJpbmcoKSwgczIgPSBudW0yLnRvU3RyaW5nKCk7XHJcbiAgICB0cnl7IFxyXG4gICAgICAgIG0gKz0gczEuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDsgXHJcbiAgICB9Y2F0Y2goZSl7IH1cclxuICAgIHRyeXtcclxuICAgICAgICBtICs9IHMyLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDtcclxuICAgIH0gY2F0Y2goZSl7IH1cclxuIFxyXG4gICAgcmV0dXJuIE51bWJlcihzMS5yZXBsYWNlKFwiLlwiLCBcIlwiKSkgKiBOdW1iZXIoczIucmVwbGFjZShcIi5cIiwgXCJcIikpIC8gTWF0aC5wb3coMTAsIG0pO1xyXG59XHJcbiAgLy8gMVxyXG4gIGNvbnN0IGNvbHMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgY29scy5wdXNoKFxyXG4gICAgICBjby5zdGFydChmdW5jdGlvbiogKCkge1xyXG5cclxuICAgICAgICB5aWVsZCBwbGF5U3ltYm9sQ29sKGksIDMuMCk7XHJcblxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG5pZihQdWJsaWNTZXRVcC5zb3VuZD09MSl7XHJcbiAgICAgICAgICAgIFxyXG4gIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoUHVibGljU2V0VXAuYXVkaW9bXCIwMDI0XCJdLCBmYWxzZSk7XHJcbn1cclxuICB5aWVsZCBjby53YWl0Rm9yQWxsKGNvbHMpO1xyXG4gIGNvbnN0IHt0eXBlLCBpTGluZSwgaUZyYW1lLGZyZWVHYW1lTkNudHMsIFdpblBvaW50TGluZSwgV2luVG90YWxQb2ludCAsaGVhcnQsVmlkZW9JZHh9ID0gY2Muc3RvcmUuZ2FtZVJlc3VsdDtcclxuXHJcbiAgLy8gMlxyXG4gIGxldCBsYXN0TGluZSA9IC0xO1xyXG4gIGZvciAobGV0IGkgPSA5IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgIGlmIChpTGluZVtpXSA9PT0gMSkge1xyXG4gICAgICBsYXN0TGluZSA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgc2NvcmU9Y2MuZmluZCgnQ2FudmFzL0dhbWUvc2NvcmUnKS5nZXRDb21wb25lbnQoXCJzY29yZVwiKTtcclxuICBpZiAobGFzdExpbmUgPiAtMSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgICAgaWYgKGlMaW5lW2ldID09PSAxKSB7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9HYW1lU2NvcmUvVmFsdWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN0b3JlLmdhbWVSZXN1bHQuV2luUG9pbnRMaW5lW2ldO1xyXG5cclxuICAgICAgICBzY29yZS5ydW4oY2Muc3RvcmUuZ2FtZVJlc3VsdC5XaW5Qb2ludExpbmVbaV0pO1xyXG4gICAgICAgIGlmKFB1YmxpY1NldFVwLnNvdW5kPT0xKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFB1YmxpY1NldFVwLmF1ZGlvW1wiMDAyMlwiXSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB5aWVsZCBwbGF5TGluZShpLCBpRnJhbWVbaV0sIHRydWUsIGkgPT09IGxhc3RMaW5lLCA0LjUsIDEwMDApO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDNcclxuICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xyXG4gICAgICBpZiAoaUxpbmVbaV0gPT09IDEpIHtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgY28uc3RhcnQoZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgeWllbGQgcGxheUxpbmUoaSwgaUZyYW1lW2ldLCBmYWxzZSwgZmFsc2UsIDQuNSwgMTUwMCk7XHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0dhbWVTY29yZS9WYWx1ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2Muc3RvcmUuZ2FtZVJlc3VsdC5XaW5Ub3RhbFBvaW50O1xyXG5cclxuICAgIHlpZWxkIGNvLndhaXRGb3JBbGwobGluZXMpO1xyXG5cclxuICAgIC8vIDRcclxuICAgIGlmIChsaW5lcy5sZW5ndGggPj0gMikge1xyXG4gICAgICB5aWVsZCBwbGF5VmlkZW8oJ3JhbmRvbScsMCk7XHJcblxyXG5cclxuICAgICAgaWYoUHVibGljU2V0VXAuc291bmQ9PTEpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhQdWJsaWNTZXRVcC5NdXNpY0NsaXAsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gICAgbGV0IGhlYXJ0T2JqPWNjLmZpbmQoJ0NhbnZhcy9HYW1lL2hlYXJ0UGFuZWwnKS5nZXRDb21wb25lbnQoXCJoZWFydFwiKTtcclxuICAgIGhlYXJ0T2JqLnNob3coaGVhcnQpO1xyXG5cclxuXHJcbiAgICBpZihWaWRlb0lkeCE9bnVsbCAmJiBWaWRlb0lkeCE9MCl7XHJcbiAgICAgIHlpZWxkIHBsYXlWaWRlbygnaW5kZXgnLFZpZGVvSWR4KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2ZyZWVTcGluXHJcbiAgICBsZXQgYW5pbSA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL0ZyZWVTcGluJykuZ2V0Q29tcG9uZW50KFwiZnJlZVNwaW5BbmltXCIpO1xyXG4gICAgaWYoZnJlZUdhbWVOQ250c1swXT09MSAmJiBjYy5zdG9yZS50eXBlPT0wKXtcclxuICAgICAgLy/mnInkuK3lhY3osrvpgYrmiLIo56ys5LiA5qyhKVxyXG4gICAgICBcclxuICAgICAgaWYoY2Muc3RvcmUuYXV0bz09ZmFsc2Upe1xyXG4gICAgICAgIC8v5aaC5p6c55uu5YmN5LiN5piv6Ieq5YuVXHJcbiAgICAgICAgLy/liYfntZDmnZ/lvozmlLnmiYvli5VcclxuICAgICAgICBjYy5zdG9yZS50eXBlPTM7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNjLnN0b3JlLnR5cGU9MjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY2Muc3RvcmUuYXV0bz10cnVlO1xyXG4gICAgICBhbmltLnBsYXkoKTtcclxuICAgICAgeWllbGQgY28ud2FpdEZvclNlY29uZHMoMy4xKTtcclxuICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9GcmVlU3BpbnNQYW5lbC9jbnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1mcmVlR2FtZU5DbnRzWzFdO1xyXG4gICAgICBcclxuICAgIH1lbHNlIGlmKHR5cGU9PTIpe1xyXG4gICAgICAvL+WmguaenOebruWJjeaYr+WFjeiyu+mBiuaIslxyXG4gICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0ZyZWVTcGluc1BhbmVsL2NudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWZyZWVHYW1lTkNudHNbMl07XHJcbiAgICAgIGxldCBfdG90YWwgPWFkZEZsb2F0KFB1YmxpY1NldFVwLmZyZWVTcGluVG90YWwsY2Muc3RvcmUuZ2FtZVJlc3VsdC5XaW5Ub3RhbFBvaW50KTsgICAgXHJcbiAgICAgIFB1YmxpY1NldFVwLmZyZWVTcGluVG90YWw9X3RvdGFsO1xyXG4gICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0ZyZWVTcGluc1BhbmVsL3RvdGFsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9UHVibGljU2V0VXAuZnJlZVNwaW5Ub3RhbDtcclxuICAgICAgaWYoZnJlZUdhbWVOQ250c1syXT09MCl7XHJcbiAgICAgICAgY2Muc3RvcmUudHlwZT0xO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKGNjLnN0b3JlLnR5cGU9PTEpe1xyXG4gICAgICAvL+acgOW+jOS4gOasoVxyXG4gICAgICBjYy5zdG9yZS50eXBlPTA7XHJcbiAgICAgIGlmKGNjLnN0b3JlLkZyZWVUb3RhbFBvaW50IT1udWxsKXtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0ZyZWVTcGluc1BhbmVsL3RvdGFsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9Y2Muc3RvcmUuRnJlZVRvdGFsUG9pbnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHlpZWxkIGNvLndhaXRGb3JTZWNvbmRzKDIpOyAgICAgXHJcbiAgICAgIGFuaW0uVUlPZmYoKTtcclxuICAgICAgUHVibGljU2V0VXAuZnJlZVNwaW5Ub3RhbD0wXHJcbiAgICAgIGlmKGNjLnN0b3JlLnR5cGU9PTMpe1xyXG4gICAgICAgIGNjLnN0b3JlLmF1dG89ZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0dhbWVTY29yZS9WYWx1ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gMDtcclxuXHJcbiAgLy8gdXBkYXRlIHVzZXIgcG9pbnRzXHJcbiAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9HYW1lUG9pbnQvVmFsdWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN0b3JlLnVzZXJQb2ludHM7XHJcbn1cclxuIl19