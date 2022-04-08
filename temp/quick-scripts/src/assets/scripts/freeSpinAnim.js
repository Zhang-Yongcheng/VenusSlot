"use strict";
cc._RF.push(module, 'b0b669BCXVCUpQgg5VRna7b', 'freeSpinAnim');
// scripts/freeSpinAnim.js

"use strict";

exports.__esModule = true;
exports["default"] = freeSpinAnim;

var _co = _interopRequireDefault(require("./co.cc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(freeSpinAnim);

function freeSpinAnim() {
  var type;
  return regeneratorRuntime.wrap(function freeSpinAnim$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          type = cc.store.gameResult.type;
          console.log(type);

          if (!(type == 2)) {
            _context.next = 7;
            break;
          }

          _context.next = 5;
          return _co["default"].waitForSeconds(5);

        case 5:
          _context.next = 9;
          break;

        case 7:
          _context.next = 9;
          return;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

module.exports = exports["default"];

cc._RF.pop();