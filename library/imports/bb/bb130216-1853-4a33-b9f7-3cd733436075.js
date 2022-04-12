"use strict";
cc._RF.push(module, 'bb130IWGFNKM7n3PNczQ2B1', 'sound');
// scripts/sound.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var PublicSetUp = require('PublicSetUp');

var sound = function () {
  return /*#__PURE__*/regeneratorRuntime.mark(function playVideo(id) {
    return regeneratorRuntime.wrap(function playVideo$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('*');

            if (PublicSetUp.sound == 0) {
              cc.audioEngine.playEffect(id, true);
            }

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, playVideo);
  });
}();

var _default = sound;
exports["default"] = _default;
module.exports = exports["default"];

cc._RF.pop();