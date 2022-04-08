"use strict";
cc._RF.push(module, '56909yQz7dAZqiahqpg8Jba', 'performanceController');
// scripts/performanceController.js

"use strict";

var _buildSymbols = _interopRequireDefault(require("./buildSymbols"));

var _co = _interopRequireDefault(require("./co.cc"));

var _playAll = _interopRequireDefault(require("./playAll"));

var _shuffle = _interopRequireDefault(require("./shuffle"));

var _freeSpinAnim = _interopRequireDefault(require("./freeSpinAnim"));

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
      var _cc$store2, _symbolDataList, _randomSymbolDataList, iGrid0, _i3, _j2, _k;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!true) {
                _context.next = 17;
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
              //yield freeSpinAnim();
              (0, _requestGameResult["default"])();
              _context.next = 11;
              return (0, _playAll["default"])();

            case 11:
              (0, _requestTableInfo["default"])();

              if (!(cc.store.playing === true)) {
                _context.next = 15;
                break;
              }

              _context.next = 15;
              return _co["default"].waitForSeconds(1.2);

            case 15:
              _context.next = 0;
              break;

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  }
});

cc._RF.pop();