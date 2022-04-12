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