"use strict";
cc._RF.push(module, '94c83znD15MILrkKX56KJvR', 'menuController');
// scripts/menuController.js

"use strict";

var _co = _interopRequireDefault(require("./co.cc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    var _marked = /*#__PURE__*/regeneratorRuntime.mark(doDropDown);

    var settingsPanel = cc.find('SettingsPanel', this.node);
    settingsPanel.y = this.node.height;

    function doDropDown() {
      var speed, t0, dt, dy, sd, t1;
      return regeneratorRuntime.wrap(function doDropDown$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(droppingDown === 1 || droppingDown === 2)) {
                _context.next = 23;
                break;
              }

              _context.prev = 1;
              speed = 1.6;
              t0 = _co["default"].currentRuntime.lastTickTime;
              dt = 0;

            case 5:
              if (!true) {
                _context.next = 20;
                break;
              }

              dy = speed * dt;

              if (dy > dist) {
                dy = dist;
              }

              dist -= dy;
              sd = droppingDown === 1 ? -1 : +1;
              settingsPanel.y += dy * sd;
              _context.next = 13;
              return;

            case 13:
              if (!(dist <= 0)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("break", 20);

            case 15:
              t1 = _co["default"].currentRuntime.lastTickTime;
              dt = t1 - t0;
              t0 = t1;
              _context.next = 5;
              break;

            case 20:
              _context.prev = 20;
              coRunning = null;
              return _context.finish(20);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _marked, null, [[1,, 20, 23]]);
    }

    var droppingDown = 0;
    var maxDist = this.node.height;
    var dist = 0;
    var coRunning = null;

    this.dropDown = function () {
      if (droppingDown === 1) {
        droppingDown = 2;
      } else if (droppingDown === 0 || droppingDown === 2) {
        droppingDown = 1;
      }

      dist = dist === 0 ? maxDist : maxDist - dist;

      if (coRunning === null) {
        coRunning = _co["default"].start(doDropDown);
      }
    };
  },
  start: function start() {
    var settingsPanel = cc.find('SettingsPanel', this.node);

    if (cc.store.soundEnabled === true) {
      var soundOnButton = cc.find('SoundOnButton', settingsPanel);
      soundOnButton.active = false;
      soundOnButton.getComponent(cc.Button).interactable = false;
      var soundOffButton = cc.find('SoundOffButton', settingsPanel);
      soundOffButton.active = true;
      soundOffButton.getComponent(cc.Button).interactable = true;
    } else {
      var _soundOnButton = cc.find('SoundOnButton', settingsPanel);

      _soundOnButton.active = true;
      _soundOnButton.getComponent(cc.Button).interactable = true;

      var _soundOffButton = cc.find('SoundOffButton', settingsPanel);

      _soundOffButton.active = false;
      _soundOffButton.getComponent(cc.Button).interactable = false;
    }
  }
});

cc._RF.pop();