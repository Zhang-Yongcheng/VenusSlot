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
  var addFloat, mulFloat, cols, _loop, i, _cc$store$gameResult, type, iLine, iFrame, freeGameNCnts, WinPointLine, WinTotalPoint, heart, VideoIdx, lastLine, _i, score, t, _i2, lines, _loop2, _i3, cardObj, heartObj, anim, _total;

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
            _context3.next = 44;
            break;
          }

          t = 1;
          _i2 = 0;

        case 22:
          if (!(_i2 < 9)) {
            _context3.next = 34;
            break;
          }

          if (!(iLine[_i2] === 1)) {
            _context3.next = 31;
            break;
          }

          cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = Math.floor(cc.store.gameResult.WinPointLine[_i2]);

          if (t > 3) {
            t = 1;
          }

          score.run(t, Math.floor(cc.store.gameResult.WinPointLine[_i2]));
          t++;

          if (PublicSetUp.sound == 1) {
            cc.audioEngine.playEffect(PublicSetUp.audio["0022"], false);
          }

          _context3.next = 31;
          return (0, _playLine["default"])(_i2, iFrame[_i2], true, _i2 === lastLine, 4.5, 1000);

        case 31:
          _i2++;
          _context3.next = 22;
          break;

        case 34:
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

          cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = Math.floor(cc.store.gameResult.WinTotalPoint);
          _context3.next = 40;
          return _co["default"].waitForAll(lines);

        case 40:
          if (!(lines.length >= 2)) {
            _context3.next = 44;
            break;
          }

          _context3.next = 43;
          return (0, _playVideo["default"])('random', 0);

        case 43:
          if (PublicSetUp.sound == 1) {
            cc.audioEngine.playMusic(PublicSetUp.MusicClip, true);
          }

        case 44:
          if (cc.store.cardRatio >= 1 && cc.store.cardcnts >= 1) {
            cardObj = cc.find('Canvas/Game/Card/cardback').getComponent("card");
            cardObj.show();
          }

          heartObj = cc.find('Canvas/Game/heartPanel').getComponent("heart");
          heartObj.show(heart);

          if (!(VideoIdx != null && VideoIdx != 0)) {
            _context3.next = 50;
            break;
          }

          _context3.next = 50;
          return (0, _playVideo["default"])('index', VideoIdx);

        case 50:
          if (!(freeGameNCnts[0] == 2)) {
            _context3.next = 53;
            break;
          }

          _context3.next = 53;
          return (0, _playVideo["default"])('card', 1);

        case 53:
          //freeSpin
          anim = cc.find('Canvas/Game/FreeSpin').getComponent("freeSpinAnim"); //if(freeGameNCnts[0]==1 && cc.store.type==0){

          if (!(freeGameNCnts[0] == 1 && cc.store.type == 0)) {
            _context3.next = 63;
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
          _context3.next = 60;
          return _co["default"].waitForSeconds(3.1);

        case 60:
          cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/cnt').getComponent(cc.Label).string = freeGameNCnts[1];
          _context3.next = 64;
          break;

        case 63:
          if (type == 2) {
            //如果目前是免費遊戲
            cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/cnt').getComponent(cc.Label).string = freeGameNCnts[2];
            _total = addFloat(PublicSetUp.freeSpinTotal, cc.store.gameResult.WinTotalPoint);
            PublicSetUp.freeSpinTotal = _total;
            cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/total').getComponent(cc.Label).string = Math.floor(PublicSetUp.freeSpinTotal);

            if (freeGameNCnts[2] == 0) {
              cc.store.type = 1;
            }
          }

        case 64:
          if (!(cc.store.type == 1)) {
            _context3.next = 72;
            break;
          }

          //最後一次
          cc.store.type = 0;

          if (cc.store.FreeTotalPoint != null) {
            cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/total').getComponent(cc.Label).string = Math.floor(cc.store.FreeTotalPoint);
          }

          _context3.next = 69;
          return _co["default"].waitForSeconds(2);

        case 69:
          anim.UIOff();
          PublicSetUp.freeSpinTotal = 0;

          if (cc.store.type == 3) {
            cc.store.auto = false;
          }

        case 72:
          if (cc.store.userPoints < cc.store.currentBet) {
            cc.store.auto = false;
          }

          cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = 0; // update user points

          cc.find('Canvas/Game/Machine/UI/GamePoint/Value').getComponent(cc.Label).string = Math.floor(cc.store.userPoints);

        case 75:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked);
}

module.exports = exports["default"];

cc._RF.pop();