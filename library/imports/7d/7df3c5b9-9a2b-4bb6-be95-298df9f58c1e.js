"use strict";
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