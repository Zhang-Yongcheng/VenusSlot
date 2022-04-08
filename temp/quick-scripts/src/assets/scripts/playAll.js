"use strict";
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