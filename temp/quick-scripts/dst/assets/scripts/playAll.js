
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
  var addFloat, mulFloat, cols, _loop, i, _cc$store$gameResult, type, iLine, iFrame, freeGameNCnts, WinPointLine, WinTotalPoint, lastLine, _i, _i2, lines, _loop2, _i3, anim, _total;

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
          _cc$store$gameResult = cc.store.gameResult, type = _cc$store$gameResult.type, iLine = _cc$store$gameResult.iLine, iFrame = _cc$store$gameResult.iFrame, freeGameNCnts = _cc$store$gameResult.freeGameNCnts, WinPointLine = _cc$store$gameResult.WinPointLine, WinTotalPoint = _cc$store$gameResult.WinTotalPoint; // 2

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
            _context3.next = 40;
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
            _context3.next = 40;
            break;
          }

          _context3.next = 36;
          return (0, _playVideo["default"])('random');

        case 36:
          cc.find('Canvas/Game/Machine/Particle_coin').active = false;
          cc.find('Canvas/Game/Machine/VideoFrame').active = false;
          cc.audioEngine.stopAll(PublicSetUp.audio1, false);

          if (PublicSetUp.sound == 1) {
            cc.audioEngine.playMusic(PublicSetUp.MusicClip, true);
          }

        case 40:
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
            _context3.next = 48;
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
          _context3.next = 47;
          return _co["default"].waitForSeconds(3.1);

        case 47:
          cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/cnt').getComponent(cc.Label).string = freeGameNCnts[1];

        case 48:
          if (cc.store.type == 2) {
            //如果目前是免費遊戲
            cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/cnt').getComponent(cc.Label).string = freeGameNCnts[2];
            _total = addFloat(PublicSetUp.freeSpinTotal, cc.store.gameResult.WinTotalPoint);
            PublicSetUp.freeSpinTotal = _total;
            cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/total').getComponent(cc.Label).string = PublicSetUp.freeSpinTotal;
          }

          if (!(cc.store.type == 1)) {
            _context3.next = 57;
            break;
          }

          //最後一次
          cc.store.type = 0;
          cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/total').getComponent(cc.Label).string = cc.store.FreeTotalPoint;
          _context3.next = 54;
          return _co["default"].waitForSeconds(1.2);

        case 54:
          anim.UIOff();
          PublicSetUp.freeSpinTotal = 0;

          if (cc.store.type == 3) {
            cc.store.auto = false;
          }

        case 57:
          cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = 0; // update user points

          cc.find('Canvas/Game/Machine/UI/GamePoint/Value').getComponent(cc.Label).string = cc.store.userPoints;

        case 59:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheUFsbC5qcyJdLCJuYW1lcyI6WyJwbGF5QWxsIiwiUHVibGljU2V0VXAiLCJyZXF1aXJlIiwiYWRkRmxvYXQiLCJtdWxGbG9hdCIsIm51bTEiLCJudW0yIiwibSIsInMxIiwidG9TdHJpbmciLCJzMiIsInNwbGl0IiwibGVuZ3RoIiwiZSIsIk51bWJlciIsInJlcGxhY2UiLCJNYXRoIiwicG93IiwicjEiLCJyMiIsIm1heCIsImNvbHMiLCJpIiwicHVzaCIsImNvIiwic3RhcnQiLCJ3YWl0Rm9yQWxsIiwiY2MiLCJzdG9yZSIsImdhbWVSZXN1bHQiLCJ0eXBlIiwiaUxpbmUiLCJpRnJhbWUiLCJmcmVlR2FtZU5DbnRzIiwiV2luUG9pbnRMaW5lIiwiV2luVG90YWxQb2ludCIsImxhc3RMaW5lIiwiZmluZCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwibGluZXMiLCJhY3RpdmUiLCJhdWRpb0VuZ2luZSIsInN0b3BBbGwiLCJhdWRpbzEiLCJzb3VuZCIsInBsYXlNdXNpYyIsIk11c2ljQ2xpcCIsImFuaW0iLCJhdXRvIiwicGxheSIsIndhaXRGb3JTZWNvbmRzIiwiX3RvdGFsIiwiZnJlZVNwaW5Ub3RhbCIsIkZyZWVUb3RhbFBvaW50IiwiVUlPZmYiLCJ1c2VyUG9pbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O21EQUl5QkE7O0FBSHpCLElBQUlDLFdBQVcsR0FBQ0MsT0FBTyxDQUFDLGFBQUQsQ0FBdkI7O0FBR2UsU0FBVUYsT0FBVjtBQUFBLE1BR0pHLFFBSEksRUFrQkpDLFFBbEJJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JKQSxVQUFBQSxRQWxCSSxzQkFrQktDLElBbEJMLEVBa0JVQyxJQWxCVixFQWtCZTtBQUMxQixnQkFBSUMsQ0FBQyxHQUFHLENBQVI7QUFBQSxnQkFBV0MsRUFBRSxHQUFHSCxJQUFJLENBQUNJ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QUEsRUFBRSxDQUFDVSxJQUFILENBQVEsd0NBQVIsRUFBa0RDLFlBQWxELENBQStEWCxFQUFFLENBQUNZLEtBQWxFLEVBQXlFQyxNQUF6RSxHQUFrRmIsRUFBRSxDQUFDQyxLQUFILENBQVM2QixVQUEzRjs7QUFuSmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbyBmcm9tICcuL2NvLmNjJztcclxuaW1wb3J0IHBsYXlMaW5lIGZyb20gJy4vcGxheUxpbmUnO1xyXG5pbXBvcnQgcGxheVN5bWJvbENvbCBmcm9tICcuL3BsYXlTeW1ib2xDb2wnO1xyXG5pbXBvcnQgcGxheVZpZGVvIGZyb20gJy4vcGxheVZpZGVvJztcclxuaW1wb3J0IHsgdGVzdCB9IGZyb20gJy4vUHVibGljU2V0VXAnO1xyXG5sZXQgUHVibGljU2V0VXA9cmVxdWlyZSgnUHVibGljU2V0VXAnKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcGxheUFsbCgpIHtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGFkZEZsb2F0KG51bTEsbnVtMil7XHJcbiAgICB2YXIgcjEsIHIyLCBtO1xyXG4gICAgdHJ5eyBcclxuICAgICAgICByMSA9IG51bTEudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoOyBcclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICByMSA9IDA7IFxyXG4gICAgfVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIHIyID0gbnVtMi50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7XHJcbiAgICB9IGNhdGNoKGUpe1xyXG4gICAgICAgIHIyID0gMDtcclxuICAgIH1cclxuICAgIG0gPSBNYXRoLnBvdygxMCwgTWF0aC5tYXgocjEsIHIyKSk7XHJcbiAgICByZXR1cm4gKG11bEZsb2F0KG51bTEsIG0pICsgbXVsRmxvYXQobnVtMiwgbSkpIC8gbTtcclxuICB9XHJcbiAgZnVuY3Rpb24gbXVsRmxvYXQobnVtMSxudW0yKXtcclxuICAgIHZhciBtID0gMCwgczEgPSBudW0xLnRvU3RyaW5nKCksIHMyID0gbnVtMi50b1N0cmluZygpO1xyXG4gICAgdHJ5eyBcclxuICAgICAgICBtICs9IHMxLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7IFxyXG4gICAgfWNhdGNoKGUpeyB9XHJcbiAgICB0cnl7XHJcbiAgICAgICAgbSArPSBzMi50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7XHJcbiAgICB9IGNhdGNoKGUpeyB9XHJcbiBcclxuICAgIHJldHVybiBOdW1iZXIoczEucmVwbGFjZShcIi5cIiwgXCJcIikpICogTnVtYmVyKHMyLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSAvIE1hdGgucG93KDEwLCBtKTtcclxufVxyXG4gIC8vIDFcclxuICBjb25zdCBjb2xzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIGNvbHMucHVzaChcclxuICAgICAgY28uc3RhcnQoZnVuY3Rpb24qICgpIHtcclxuXHJcbiAgICAgICAgeWllbGQgcGxheVN5bWJvbENvbChpLCAzLjApO1xyXG5cclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIHlpZWxkIGNvLndhaXRGb3JBbGwoY29scyk7XHJcbiAgY29uc3Qge3R5cGUsIGlMaW5lLCBpRnJhbWUsZnJlZUdhbWVOQ250cywgV2luUG9pbnRMaW5lLCBXaW5Ub3RhbFBvaW50IH0gPSBjYy5zdG9yZS5nYW1lUmVzdWx0O1xyXG5cclxuICAvLyAyXHJcbiAgbGV0IGxhc3RMaW5lID0gLTE7XHJcbiAgZm9yIChsZXQgaSA9IDkgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgaWYgKGlMaW5lW2ldID09PSAxKSB7XHJcbiAgICAgIGxhc3RMaW5lID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChsYXN0TGluZSA+IC0xKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xyXG4gICAgICBpZiAoaUxpbmVbaV0gPT09IDEpIHtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0dhbWVTY29yZS9WYWx1ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2Muc3RvcmUuZ2FtZVJlc3VsdC5XaW5Qb2ludExpbmVbaV07XHJcbiAgICAgICAgeWllbGQgcGxheUxpbmUoaSwgaUZyYW1lW2ldLCB0cnVlLCBpID09PSBsYXN0TGluZSwgNC41LCAzMjAwKTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAzXHJcbiAgICBjb25zdCBsaW5lcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgICAgaWYgKGlMaW5lW2ldID09PSAxKSB7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgIGNvLnN0YXJ0KGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHBsYXlMaW5lKGksIGlGcmFtZVtpXSwgZmFsc2UsIGZhbHNlLCA0LjUsIDM3MDApO1xyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9HYW1lU2NvcmUvVmFsdWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN0b3JlLmdhbWVSZXN1bHQuV2luVG90YWxQb2ludDtcclxuXHJcbiAgICB5aWVsZCBjby53YWl0Rm9yQWxsKGxpbmVzKTtcclxuXHJcbiAgICAvLyA0XHJcbiAgICBpZiAobGluZXMubGVuZ3RoID49IDIpIHtcclxuICAgICAgeWllbGQgcGxheVZpZGVvKCdyYW5kb20nKTtcclxuICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9QYXJ0aWNsZV9jb2luJykuYWN0aXZlPWZhbHNlO1xyXG4gICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1ZpZGVvRnJhbWUnKS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoUHVibGljU2V0VXAuYXVkaW8xLCBmYWxzZSk7XHJcbiAgICAgIGlmKFB1YmxpY1NldFVwLnNvdW5kPT0xKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoUHVibGljU2V0VXAuTXVzaWNDbGlwLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICAgLy8gaWYoUHVibGljU2V0VXAudGVzdD09MTEpe1xyXG4gICAgLy8gICBmcmVlR2FtZU5DbnRzWzBdPTE7XHJcbiAgICAvLyAgIFB1YmxpY1NldFVwLnRlc3QtLTtcclxuICAgIC8vICAgZnJlZUdhbWVOQ250c1sxXT1QdWJsaWNTZXRVcC50ZXN0O1xyXG4gICAgLy8gfWVsc2UgaWYoUHVibGljU2V0VXAudGVzdDwxMSl7XHJcbiAgICAvLyAgIGNjLnN0b3JlLnR5cGU9MjtcclxuICAgIC8vICAgUHVibGljU2V0VXAudGVzdC0tO1xyXG4gICAgLy8gICBmcmVlR2FtZU5DbnRzWzJdPVB1YmxpY1NldFVwLnRlc3Q7XHJcbiAgICAvLyAgIGlmKFB1YmxpY1NldFVwLnRlc3Q9PTApe1xyXG4gICAgLy8gICAgIGNjLnN0b3JlLnR5cGU9MTtcclxuICAgIC8vICAgICBQdWJsaWNTZXRVcC50ZXN0PTEyO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICAvL2ZyZWVTcGluXHJcbiAgICBsZXQgYW5pbSA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL0ZyZWVTcGluJykuZ2V0Q29tcG9uZW50KFwiZnJlZVNwaW5BbmltXCIpO1xyXG4gICAgaWYoZnJlZUdhbWVOQ250c1swXT09MSAmJiBjYy5zdG9yZS50eXBlPT0wKXtcclxuICAgICAgLy/mnInkuK3lhY3osrvpgYrmiLIo56ys5LiA5qyhKVxyXG4gICAgICBcclxuICAgICAgaWYoY2Muc3RvcmUuYXV0bz09ZmFsc2Upe1xyXG4gICAgICAgIC8v5aaC5p6c55uu5YmN5LiN5piv6Ieq5YuVXHJcbiAgICAgICAgLy/liYfntZDmnZ/lvozmlLnmiYvli5VcclxuICAgICAgICBjYy5zdG9yZS50eXBlPTM7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNjLnN0b3JlLnR5cGU9MjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY2Muc3RvcmUuYXV0bz10cnVlO1xyXG4gICAgICBhbmltLnBsYXkoKTtcclxuICAgICAgeWllbGQgY28ud2FpdEZvclNlY29uZHMoMy4xKTtcclxuICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9GcmVlU3BpbnNQYW5lbC9jbnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1mcmVlR2FtZU5DbnRzWzFdO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGlmKGNjLnN0b3JlLnR5cGU9PTIpe1xyXG4gICAgICAvL+WmguaenOebruWJjeaYr+WFjeiyu+mBiuaIslxyXG4gICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0ZyZWVTcGluc1BhbmVsL2NudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWZyZWVHYW1lTkNudHNbMl07XHJcbiAgICAgIGxldCBfdG90YWwgPWFkZEZsb2F0KFB1YmxpY1NldFVwLmZyZWVTcGluVG90YWwsY2Muc3RvcmUuZ2FtZVJlc3VsdC5XaW5Ub3RhbFBvaW50KTsgICAgXHJcbiAgICAgIFB1YmxpY1NldFVwLmZyZWVTcGluVG90YWw9X3RvdGFsO1xyXG4gICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0ZyZWVTcGluc1BhbmVsL3RvdGFsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9UHVibGljU2V0VXAuZnJlZVNwaW5Ub3RhbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYoY2Muc3RvcmUudHlwZT09MSl7XHJcbiAgICAgIC8v5pyA5b6M5LiA5qyhXHJcbiAgICAgIGNjLnN0b3JlLnR5cGU9MDtcclxuICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9GcmVlU3BpbnNQYW5lbC90b3RhbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWNjLnN0b3JlLkZyZWVUb3RhbFBvaW50O1xyXG4gICAgICB5aWVsZCBjby53YWl0Rm9yU2Vjb25kcygxLjIpOyAgICAgXHJcbiAgICAgIGFuaW0uVUlPZmYoKTtcclxuICAgICAgUHVibGljU2V0VXAuZnJlZVNwaW5Ub3RhbD0wXHJcbiAgICAgIGlmKGNjLnN0b3JlLnR5cGU9PTMpe1xyXG4gICAgICAgIGNjLnN0b3JlLmF1dG89ZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0dhbWVTY29yZS9WYWx1ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gMDtcclxuXHJcbiAgLy8gdXBkYXRlIHVzZXIgcG9pbnRzXHJcbiAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9HYW1lUG9pbnQvVmFsdWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN0b3JlLnVzZXJQb2ludHM7XHJcbn1cclxuIl19