
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/playLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7df3cW5mitLtr6VKY359Ywe', 'playLine');
// scripts/playLine.js

"use strict";

exports.__esModule = true;
exports["default"] = playLine;

var _co = _interopRequireDefault(require("./co.cc"));

var _getSymbolAnchor = _interopRequireDefault(require("./getSymbolAnchor"));

var _lineFrames = _interopRequireDefault(require("./lineFrames"));

var _playEffect = _interopRequireDefault(require("./playEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(playLine);

function playLine(lineIndex, frameCnt, slideEffect, keepVisible, speed, duration) {
  var linesNode, lineNode, effects;
  return regeneratorRuntime.wrap(function playLine$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          linesNode = cc.find('Canvas/Game/Machine/Performance/Lines');
          lineNode = linesNode.getChildByName("" + (lineIndex + 1));
          lineNode.active = true;

          if (!(slideEffect === true)) {
            _context4.next = 7;
            break;
          }

          lineNode.x -= linesNode.width;
          _context4.next = 7;
          return _co["default"].start( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var t0, dt, dx, t1;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    t0 = _co["default"].currentRuntime.lastTickTime;
                    dt = 0;

                  case 3:
                    if (!true) {
                      _context.next = 16;
                      break;
                    }

                    dx = speed * dt;
                    lineNode.x += dx;

                    if (!(lineNode.x >= 0)) {
                      _context.next = 9;
                      break;
                    }

                    lineNode.x = 0;
                    return _context.abrupt("break", 16);

                  case 9:
                    _context.next = 11;
                    return;

                  case 11:
                    t1 = _co["default"].currentRuntime.lastTickTime;
                    dt = t1 - t0;
                    t0 = t1;
                    _context.next = 3;
                    break;

                  case 16:
                    _context.prev = 16;
                    lineNode.x = 0;
                    return _context.finish(16);

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0,, 16, 19]]);
          }));

        case 7:
          _context4.prev = 7;
          effects = [];
          _context4.prev = 9;
          return _context4.delegateYield( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var frames, _loop, i;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    frames = _lineFrames["default"][lineIndex + 1];

                    _loop = function _loop(i) {
                      effects.push(_co["default"].start( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return (0, _playEffect["default"])((0, _getSymbolAnchor["default"])(frames[i]), 2000);

                              case 2:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      })));
                    };

                    for (i = 0; i < frameCnt; i++) {
                      _loop(i);
                    }

                    _context3.next = 5;
                    return _co["default"].waitForMilliseconds(duration);

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          })(), "t0", 11);

        case 11:
          _context4.prev = 11;
          effects.forEach(function (effect) {
            return effect.stop();
          });
          return _context4.finish(11);

        case 14:
          _context4.prev = 14;

          if (keepVisible === false) {
            lineNode.active = false;
          }

          return _context4.finish(14);

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked, null, [[7,, 14, 17], [9,, 11, 14]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheUxpbmUuanMiXSwibmFtZXMiOlsicGxheUxpbmUiLCJsaW5lSW5kZXgiLCJmcmFtZUNudCIsInNsaWRlRWZmZWN0Iiwia2VlcFZpc2libGUiLCJzcGVlZCIsImR1cmF0aW9uIiwibGluZXNOb2RlIiwiY2MiLCJmaW5kIiwibGluZU5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImFjdGl2ZSIsIngiLCJ3aWR0aCIsImNvIiwic3RhcnQiLCJ0MCIsImN1cnJlbnRSdW50aW1lIiwibGFzdFRpY2tUaW1lIiwiZHQiLCJkeCIsInQxIiwiZWZmZWN0cyIsImZyYW1lcyIsImxpbmVGcmFtZXMiLCJpIiwicHVzaCIsIndhaXRGb3JNaWxsaXNlY29uZHMiLCJmb3JFYWNoIiwiZWZmZWN0Iiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OzttREFFeUJBOztBQUFWLFNBQVVBLFFBQVYsQ0FBbUJDLFNBQW5CLEVBQThCQyxRQUE5QixFQUF3Q0MsV0FBeEMsRUFBcURDLFdBQXJELEVBQWtFQyxLQUFsRSxFQUF5RUMsUUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BDLFVBQUFBLFNBRE8sR0FDS0MsRUFBRSxDQUFDQyxJQUFILENBQVEsdUNBQVIsQ0FETDtBQUVQQyxVQUFBQSxRQUZPLEdBRUlILFNBQVMsQ0FBQ0ksY0FBVixPQUE0QlYsU0FBUyxHQUFHLENBQXhDLEVBRko7QUFHYlMsVUFBQUEsUUFBUSxDQUFDRSxNQUFULEdBQWtCLElBQWxCOztBQUhhLGdCQUtUVCxXQUFXLEtBQUssSUFMUDtBQUFBO0FBQUE7QUFBQTs7QUFNWE8sVUFBQUEsUUFBUSxDQUFDRyxDQUFULElBQWNOLFNBQVMsQ0FBQ08sS0FBeEI7QUFOVztBQVFYLGlCQUFNQyxlQUFHQyxLQUFILHVDQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVBDLG9CQUFBQSxFQUZPLEdBRUZGLGVBQUdHLGNBQUgsQ0FBa0JDLFlBRmhCO0FBR1BDLG9CQUFBQSxFQUhPLEdBR0YsQ0FIRTs7QUFBQTtBQUFBLHlCQUtKLElBTEk7QUFBQTtBQUFBO0FBQUE7O0FBTUhDLG9CQUFBQSxFQU5HLEdBTUVoQixLQUFLLEdBQUdlLEVBTlY7QUFPVFYsb0JBQUFBLFFBQVEsQ0FBQ0csQ0FBVCxJQUFjUSxFQUFkOztBQVBTLDBCQVFMWCxRQUFRLENBQUNHLENBQVQsSUFBYyxDQVJUO0FBQUE7QUFBQTtBQUFBOztBQVNQSCxvQkFBQUEsUUFBUSxDQUFDRyxDQUFULEdBQWEsQ0FBYjtBQVRPOztBQUFBO0FBQUE7QUFhVDs7QUFiUztBQWVIUyxvQkFBQUEsRUFmRyxHQWVFUCxlQUFHRyxjQUFILENBQWtCQyxZQWZwQjtBQWdCVEMsb0JBQUFBLEVBQUUsR0FBR0UsRUFBRSxHQUFHTCxFQUFWO0FBQ0FBLG9CQUFBQSxFQUFFLEdBQUdLLEVBQUw7QUFqQlM7QUFBQTs7QUFBQTtBQUFBO0FBb0JYWixvQkFBQUEsUUFBUSxDQUFDRyxDQUFULEdBQWEsQ0FBYjtBQXBCVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFULEVBQU47O0FBUlc7QUFBQTtBQWtDTFUsVUFBQUEsT0FsQ0ssR0FrQ0ssRUFsQ0w7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQ0hDLG9CQUFBQSxNQXBDRyxHQW9DTUMsdUJBQVd4QixTQUFTLEdBQUcsQ0FBdkIsQ0FwQ047O0FBQUEsMkNBcUNBeUIsQ0FyQ0E7QUFzQ1BILHNCQUFBQSxPQUFPLENBQUNJLElBQVIsQ0FDRVosZUFBR0MsS0FBSCx1Q0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUCx1Q0FBTSw0QkFBVyxpQ0FBZ0JRLE1BQU0sQ0FBQ0UsQ0FBRCxDQUF0QixDQUFYLEVBQXVDLElBQXZDLENBQU47O0FBRE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVQsRUFERjtBQXRDTzs7QUFxQ1QseUJBQVNBLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxDQUFDLEdBQUd4QixRQUFwQixFQUE4QndCLENBQUMsRUFBL0IsRUFBbUM7QUFBQSw0QkFBMUJBLENBQTBCO0FBTWxDOztBQTNDUTtBQTRDVCwyQkFBTVgsZUFBR2EsbUJBQUgsQ0FBdUJ0QixRQUF2QixDQUFOOztBQTVDUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBOENUaUIsVUFBQUEsT0FBTyxDQUFDTSxPQUFSLENBQWdCLFVBQUFDLE1BQU07QUFBQSxtQkFBSUEsTUFBTSxDQUFDQyxJQUFQLEVBQUo7QUFBQSxXQUF0QjtBQTlDUzs7QUFBQTtBQUFBOztBQWlEWCxjQUFJM0IsV0FBVyxLQUFLLEtBQXBCLEVBQTJCO0FBQ3pCTSxZQUFBQSxRQUFRLENBQUNFLE1BQVQsR0FBa0IsS0FBbEI7QUFDRDs7QUFuRFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbyBmcm9tICcuL2NvLmNjJztcclxuaW1wb3J0IGdldFN5bWJvbEFuY2hvciBmcm9tICcuL2dldFN5bWJvbEFuY2hvcic7XHJcbmltcG9ydCBsaW5lRnJhbWVzIGZyb20gJy4vbGluZUZyYW1lcyc7XHJcbmltcG9ydCBwbGF5RWZmZWN0IGZyb20gJy4vcGxheUVmZmVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcGxheUxpbmUobGluZUluZGV4LCBmcmFtZUNudCwgc2xpZGVFZmZlY3QsIGtlZXBWaXNpYmxlLCBzcGVlZCwgZHVyYXRpb24pIHtcclxuICBjb25zdCBsaW5lc05vZGUgPSBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1BlcmZvcm1hbmNlL0xpbmVzJyk7XHJcbiAgY29uc3QgbGluZU5vZGUgPSBsaW5lc05vZGUuZ2V0Q2hpbGRCeU5hbWUoYCR7bGluZUluZGV4ICsgMX1gKTtcclxuICBsaW5lTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICBpZiAoc2xpZGVFZmZlY3QgPT09IHRydWUpIHtcclxuICAgIGxpbmVOb2RlLnggLT0gbGluZXNOb2RlLndpZHRoO1xyXG5cclxuICAgIHlpZWxkIGNvLnN0YXJ0KGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHQwID0gY28uY3VycmVudFJ1bnRpbWUubGFzdFRpY2tUaW1lO1xyXG4gICAgICAgIGxldCBkdCA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICBjb25zdCBkeCA9IHNwZWVkICogZHQ7XHJcbiAgICAgICAgICBsaW5lTm9kZS54ICs9IGR4O1xyXG4gICAgICAgICAgaWYgKGxpbmVOb2RlLnggPj0gMCkge1xyXG4gICAgICAgICAgICBsaW5lTm9kZS54ID0gMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgeWllbGQ7XHJcblxyXG4gICAgICAgICAgY29uc3QgdDEgPSBjby5jdXJyZW50UnVudGltZS5sYXN0VGlja1RpbWU7XHJcbiAgICAgICAgICBkdCA9IHQxIC0gdDA7XHJcbiAgICAgICAgICB0MCA9IHQxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBsaW5lTm9kZS54ID0gMDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZWZmZWN0cyA9IFtdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZnJhbWVzID0gbGluZUZyYW1lc1tsaW5lSW5kZXggKyAxXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZUNudDsgaSsrKSB7XHJcbiAgICAgICAgZWZmZWN0cy5wdXNoKFxyXG4gICAgICAgICAgY28uc3RhcnQoZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgeWllbGQgcGxheUVmZmVjdChnZXRTeW1ib2xBbmNob3IoZnJhbWVzW2ldKSwgMjAwMCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgeWllbGQgY28ud2FpdEZvck1pbGxpc2Vjb25kcyhkdXJhdGlvbik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBlZmZlY3RzLmZvckVhY2goZWZmZWN0ID0+IGVmZmVjdC5zdG9wKCkpO1xyXG4gICAgfVxyXG4gIH0gZmluYWxseSB7XHJcbiAgICBpZiAoa2VlcFZpc2libGUgPT09IGZhbHNlKSB7XHJcbiAgICAgIGxpbmVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=