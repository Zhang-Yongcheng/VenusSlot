"use strict";
cc._RF.push(module, '2eb7deXGDJNl6WX8kLesyPk', 'playSymbolCol');
// scripts/playSymbolCol.js

"use strict";

exports.__esModule = true;
exports["default"] = playSymbolCol;

var _co = _interopRequireDefault(require("./co.cc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(playSymbolCol);

var PublicSetUp = require('PublicSetUp');

function playSymbolCol(colIndex, speed) {
  var cols, col, spacing, dist0, dist, t0, dt, dy, newDist, movedDist, t1;
  return regeneratorRuntime.wrap(function playSymbolCol$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cols = cc.find('Canvas/Game/Machine/Performance/Cols');
          col = cols.getChildByName("" + (colIndex + 1));
          spacing = col.children[1].y - col.children[0].y;
          dist0 = col.children[col.childrenCount - 3].y - col.children[0].y;
          dist = dist0;
          t0 = _co["default"].currentRuntime.lastTickTime;
          dt = 0;

        case 7:
          if (!true) {
            _context.next = 22;
            break;
          }

          dy = speed * dt;

          if (dy >= spacing) {
            dy = speed * (1 / 60 * 1000);
          }

          if (dy >= dist) {
            if (cc.store.isGameResultGot() === true) {
              if (col.redist > 0) {
                col.y = col.baseY;
                dy -= dist;
                dist0 = col.children[col.redist].y - col.children[0].y;
                dist = dist0;
                col.redist = 0;
              } else {
                dy = dist;
              }
            } else {
              col.y = col.baseY;
              dy -= dist;
              dist = dist0;
            }
          } else {
            if (col.redist2 > 0) {
              // dist0 = (col.children[col.redist2].y - col.children[0].y) - Math.abs(col.y - col.baseY);
              newDist = col.children[col.redist2].y - col.children[0].y;
              movedDist = dist0 - dist;
              dist0 = newDist - movedDist;
              dist = dist0;
              col.redist2 = 0;
            }
          }

          dist -= dy;
          col.y -= dy;
          _context.next = 15;
          return;

        case 15:
          if (!(dist <= 0)) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("break", 22);

        case 17:
          t1 = _co["default"].currentRuntime.lastTickTime;
          dt = t1 - t0;
          t0 = t1;
          _context.next = 7;
          break;

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

module.exports = exports["default"];

cc._RF.pop();